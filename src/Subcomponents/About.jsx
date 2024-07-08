import React from 'react';

const About = () => {
  return (
    <section id="aboutUs_Mini">
      <div className='first_container'>
        <div className="content">
          <h1>ABOUT US</h1>
          <p>At Luxury Living, we pride ourselves on providing unparalleled luxury and comfort in our homes. Our mission is to offer our clients the best living experience, with top-notch amenities and exceptional service.</p>
          <p>Our team is dedicated to finding and creating properties that meet the highest standards of quality and elegance. From the initial search to the final purchase, we are here to ensure your satisfaction every step of the way.</p>
          <p>We believe that your home should be a reflection of your lifestyle and aspirations. With our extensive portfolio of properties, you are sure to find the perfect place to call home. Join us and experience the pinnacle of luxury living.</p>
        </div>
        <button>We strive to offer you the best possible homes to stay!</button>
      </div>
      <div className="second_container">
        <div className="image_1">
          <img src="/people.jpg" alt="people"/>
        </div>
        <div className='image_2'>
          <img src='/people2.jpg' alt="people"/>
        </div>
      </div>    
    </section>
  );
}

export default About;
