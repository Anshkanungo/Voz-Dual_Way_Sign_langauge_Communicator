import React, { useState } from 'react';
import './TextToSign.css';
import a from '../../../assets/sign-language/a.png';
import b from '../../../assets/sign-language/b.png';
import c from '../../../assets/sign-language/c.png';
import d from '../../../assets/sign-language/d.png';
import e from '../../../assets/sign-language/e.png';
import f from '../../../assets/sign-language/f.png';
import g from '../../../assets/sign-language/g.png';
import h from '../../../assets/sign-language/h.png';
import i from '../../../assets/sign-language/i.png';
import j from '../../../assets/sign-language/j.png';
import k from '../../../assets/sign-language/k.png';
import l from '../../../assets/sign-language/l.png';
import m from '../../../assets/sign-language/m.png';
import n from '../../../assets/sign-language/n.png';
import o from '../../../assets/sign-language/o.png';
import p from '../../../assets/sign-language/p.png';
import q from '../../../assets/sign-language/q.png';
import r from '../../../assets/sign-language/r.png';
import s from '../../../assets/sign-language/s.png';
import t from '../../../assets/sign-language/t.png';
import u from '../../../assets/sign-language/u.png';
import v from '../../../assets/sign-language/v.png';
import w from '../../../assets/sign-language/w.png';
import x from '../../../assets/sign-language/x.png';
import y from '../../../assets/sign-language/y.png';
import z from '../../../assets/sign-language/z.png';
import zero from '../../../assets/sign-language/0.png';
import one from '../../../assets/sign-language/1.png';
import two from '../../../assets/sign-language/2.png';
import three from '../../../assets/sign-language/3.png';
import four from '../../../assets/sign-language/4.png';
import five from '../../../assets/sign-language/5.png';
import six from '../../../assets/sign-language/6.png';
import seven from '../../../assets/sign-language/7.png';
import eight from '../../../assets/sign-language/8.png';
import nine from '../../../assets/sign-language/9.png';
import { FaMicrophone } from "react-icons/fa";


// Create an object to map characters to their corresponding images
const characterImages = {
  'a': a,
  'b': b,
  'c': c,
  'd': d,
  'e': e,
  'f': f,
  'g': g,
  'h': h,
  'i': i,
  'j': j,
  'k': k,
  'l': l,
  'm': m,
  'n': n,
  'o': o,
  'p': p,
  'q': q,
  'r': r,
  's': s,
  't': t,
  'u': u,
  'v': v,
  'w': w,
  'x': x,
  'y': y,
  'z': z,
  '0': zero,
  '1': one,
  '2': two,
  '3': three,
  '4': four,
  '5': five,
  '6': six,
  '7': seven,
  '8': eight,
  '9': nine,
};
function getImageForCharacter(character) {
  // Check if the character has a corresponding image
  const image = characterImages[character.toLowerCase()];
  if (image) {
    return image;
  } else {
    console.error(`Error loading image for character "${character}": Image not found`);
    // If image for character not found, return a default image or null
    return null;
  }
}
const TextToSign = () => {
  const [inputText, setInputText] = useState('');
  const [displayedImages, setDisplayedImages] = useState([]);
  const [listening, setListening] = useState(false);
  const recognition = new window.webkitSpeechRecognition();
  const [showGif, setShowGif] = useState(true);

  recognition.lang = 'en-US';
  recognition.continuous = true;

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setShowGif(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      translateText();
    }
  };


  const handleMouseDown = () => {
    setListening(true);
    recognition.start(); // Start recognition when mouse is held down
  };

  const handleMouseUp = () => {
    setListening(false);
    recognition.stop(); // Stop recognition when mouse is released
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setInputText(transcript);
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    setListening(false); // Stop listening on error
  };

  


  const handleListen = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
  
    recognition.onstart = () => {
      setListening(true);
    };
  
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
    };
  
    recognition.onend = () => {
      setListening(false);
    };
  };
  
  const translateText = () => {
    const characters = inputText.split('');
    const images = [];
    characters.forEach((char, index) => {
        const image = getImageForCharacter(char);
        if (image) {
            images.push(image);
            setTimeout(() => {
                setDisplayedImages([image]);
                setTimeout(() => {
                    if (index === characters.length - 1) {
                        // Keep the default image until next input
                        setDisplayedImages([...images, defaultImage]);
                    } else {
                        // Keep the div blank instead of removing it
                        setDisplayedImages([]); 
                    }
                }, 700); // Reduced time gap for image transition
            }, (index * 1100) + 100 - 300); // Adjusted time gap for image duration and transition
        }
    });
};
function handleInput(value) {
  const displayText = document.getElementById('displayText');
  if (value.trim() !== '') {
      displayText.classList.add('displaced');
  }
}
  
  return (
    <>
    <h1 className='text-center text-3xl font-bold text-neutral'>Text to Sign</h1>
    {/* <!-- component --> */}
<div className="flex items-center justify-center h-screen bg-transparent">
   <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs h-2/3 min-w-[90%]">
     
     {/* Images Change loop */}
     <img className="mb-8 w-2/3 h-3/4 rounded-md shadow-lg mx-auto object-cover" src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product designer" />
     <div className='flex flex-col gap-0 w-full justify-center items-center'>
     <div className='flex gap-1 '>
     <input className='bg-light rounded-md px-2 py-2 m-0' placeholder='Enter here' type="text" />
     <button className='bg-light w-10 rounded-md px-2 py-2 m-0 flex justify-center items-center' type="" >
      <FaMicrophone className='text-2xl text-bakground'/>
      </button>
     </div>
     <button className="bg-bakground text-light px-8 py-2 mt-2 w-44 rounded-md  font-semibold uppercase tracking-wide">Convert</button>
     </div>
   </div>
 </div>
    </>

  );
}

export default TextToSign;
