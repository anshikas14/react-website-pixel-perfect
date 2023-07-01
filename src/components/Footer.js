import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Send us a message
        </p>
        <p className='footer-subscription-text'>
          We will respond to your queries soon.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='message'
              type='message'
              placeholder='Your Message'
            />
            <Button buttonStyle='btn--outline'>Send Message</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>About NITJ</Link>
            <Link to='/'>Awards</Link>
            <Link to='/'>Sponsors</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Speakers</h2>
            <Link to='/'>Keynote Speakers</Link>
            <Link to='/'>Speakers for tutorials</Link>
            <Link to='/'>Industry panel sessions</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Speakers</h2>
            <Link to='/'>Keynote Speakers</Link>
            <Link to='/'>Speakers for Tutorials</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
    
    
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              WREC | NITJ
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>WREC | NITJ © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;