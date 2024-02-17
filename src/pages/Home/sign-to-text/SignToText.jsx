import React, { useState, useRef, useEffect } from 'react';
import './SignToText.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faVideoSlash, faCopy, faPlay } from '@fortawesome/free-solid-svg-icons';
import waveformImage from '../../../assets/waveform.png';
import yellowWaveformImage from '../../../assets/yellow-waveform.png';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import { FaUserFriends } from "react-icons/fa";

const SignToText = () => {
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [speechInProgress, setSpeechInProgress] = useState(false);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const [model, setModel] = useState(null);
  const [sentence, setSentence] = useState('');
  const webcamRef = useRef(null);

  useEffect(() => {
    loadModel();
  }, []);

  const loadModel = async () => {
    try {
      const loadedModel = await tf.loadLayersModel('./model/model.json');
      setModel(loadedModel);
    } catch (error) {
      console.error('Error loading model:', error);
    }
  };

  const startVideo = () => {
    setIsVideoOn(true);
  };

  const stopVideo = () => {
    setIsVideoOn(false);
  };

  const toggleVideo = () => {
    if (isVideoOn) {
      stopVideo();
    } else {
      startVideo();
    }
  };

  const captureFrames = async () => {
    if (!isVideoOn || !model) return;
  
    const intervalId = setInterval(async () => {
      if (!webcamRef.current) return;
      const imageSrc = webcamRef.current.getScreenshot();
      const image = await loadImage(imageSrc);
      const char = await predict(image);
      setSentence(prevSentence => prevSentence + char);
    }, 1000);
  
    return () => clearInterval(intervalId);
  };
  

  const loadImage = async (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  const predict = async (image) => {
    const tensor = tf.browser.fromPixels(image);
    const resized = tf.image.resizeBilinear(tensor, [64, 64]);
    const expanded = resized.expandDims();
    const prediction = await model.predict(expanded).data();
    const index = prediction.indexOf(Math.max(...prediction));
    const char = String.fromCharCode(65 + index);
    return char;
  };

  const textAreaRef = useRef(null);

  const copyToClipboard = () => {
    if (textAreaRef.current) {
      navigator.clipboard.writeText(textAreaRef.current.value);
    }
  };

  const playText = () => {
    const text = textAreaRef.current.value.trim();
    if (!text) return;

    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = text;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      speech.onstart = () => {
        setSpeechInProgress(true);
      };
      speech.onend = () => {
        setSpeechInProgress(false);
      };
      window.speechSynthesis.speak(speech);
    } else {
      alert('Text-to-speech is not supported on your device.');
    }
  };

  return (
    <>
    <h1 className='text-center text-3xl font-bold text-neutral'>Sign to Text</h1>
    <div className="flex items-center justify-center h-screen bg-transparent">
      <div className="relative flex flex-col items-center justify-center bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs h-2/3 min-w-[90%]">
        {/* Video Preview */}
        <div className="video-controls">
    <button onClick={toggleVideo} className="video-toggle">
      <FontAwesomeIcon icon={isVideoOn ? faVideo : faVideoSlash} />
    </button>
    {isVideoOn && (
      <div className="video-screen">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="video-feed"
          onUserMedia={() => captureFrames()}
        />
      </div>
    )}
  </div>

        <div className='flex flex-col gap-0 w-full justify-center items-center'>
        <div className="text-area">
    <textarea className="text-input" value={sentence} readOnly></textarea>
    <FontAwesomeIcon icon={faCopy} className="copy-icon" onClick={copyToClipboard} />
  </div>
          <button onClick={toggleVideo} className="bg-bakground text-light px-8 py-2 mt-16 w-44 rounded-md  font-semibold uppercase tracking-wide">Start Video</button>

        </div>
      </div>
    </div>
  </>
  );
}

export default SignToText;
