import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video  autoPlay loop muted>
      <source src="C:\Users\verma\react-website-yt-1\public\videos\video-1.mp4" type="video/mp4"/>
      </video>
      <h4 id='heading'>2nd International Conference<br/><br/>
      <b>WOMEN RESEARCHERS IN ELECTRONICS AND COMPUTING<br/>&#40;April 21-23, 2023&#41;</b> 
      <br/><br/>Department of Electronics and Communication Engineering<br/>Dr. B.R. Ambedkar National Institute of Technology Jalandhar<br/> Punjab, INDIA</h4>

   
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;