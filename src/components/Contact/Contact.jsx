import React from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookBoxLine } from 'react-icons/ri';

const Contact = () => {
  return (
    <section id='contact'>
      <h1>CONTACT US</h1>
      <p>Have questions or want to learn more about our services? Contact us today!</p>
      <p>Feel free to reach out to us via phone, email, or visit our office:</p>
      <div className='container'>
        <img src='/about.jpg' alt="about"/>
        <div className="content">
          <h3>Let's Connect</h3>
          <div>
            <p>Phone</p>
            <span>(123) 456-7890</span>
          </div>
          <div>
            <p>Email</p>
            <span>info@luxuryliving.com</span>
          </div>
          <div>
            <p>Address</p>
            <span>House No.123, Sector A-1, Luxury City</span>
          </div>
          <ul className="social-links">
            <li>
              <Link to={'https://facebook.com'} target='_blank'><RiFacebookBoxLine/></Link>
            </li>
            <li>
              <Link to={'https://twitter.com'} target='_blank'><RiFacebookBoxLine/></Link>
            </li>
            <li>
              <Link to={'https://instagram.com'} target='_blank'><RiFacebookBoxLine/></Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
