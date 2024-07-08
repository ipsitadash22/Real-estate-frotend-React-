import React from 'react';
import About from '../../Subcomponents/About';

const AboutUs = () => {
  return (
    <>
      <section id='aboutPage' className='page'>
        <div className="container">
          <img src="/about.jpg" alt="about"/>
          <div className='content'>
            <h3>Your peace of mind, our priority!</h3>
            <p>At Luxury Living, we prioritize your peace of mind above all else. Our mission is to provide you with exceptional service and the finest properties that cater to your lifestyle and aspirations.</p>
            <p>With a dedication to excellence, we ensure that every aspect of your home-buying journey is seamless and enjoyable. From initial consultation to finding your dream home, we are here to guide you every step of the way.</p>
            <p>Experience the difference with Luxury Living and discover why our clients trust us with their most important investment.</p>
          </div>
        </div>
        <About/>
      </section>
    </>
  );
}

export default AboutUs;
