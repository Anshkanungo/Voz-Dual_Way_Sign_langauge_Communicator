// Home.js
import React from 'react';
import './home.css';
import TextToSign from './text-to-sign/TextToSign';
import SignToText from './sign-to-text/SignToText';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <div className='home'>
      <Carousel className='carousel' showThumbs={false} showArrows={true} showStatus={false} showIndicators={false} dynamicHeight={false} infiniteLoop={true}>
        <div className="carousel-item">
          <TextToSign />
        </div>
        <div className="carousel-item">
          <SignToText />
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
