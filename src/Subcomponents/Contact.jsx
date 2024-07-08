import React from 'react';
import {Link} from 'react-router-dom';
import {RiFacebookBoxLine} from "react-icons/ri";
const Contact = () => {
  return (
  <section id="contact_Mini">
    <div className='super_container'>
        <div className="container_1">
            <h3>Let's Connect</h3>
            <div>
                <p>Phone</p>
                <span>9876352225</span>
            </div>
            <div>
                <p>Email</p>
                <span>isha@gmail.com</span>
            </div>
            <div>
                <p>Address</p>
                <span>House No.123 Sector A-1</span>
            </div>
            <ul>
                <Link to={'/'} target='_blank'><RiFacebookBoxLine/></Link>
                <Link to={'/'} target='_blank'><RiFacebookBoxLine/></Link>
                <Link to={'/'} target='_blank'><RiFacebookBoxLine/></Link>

            </ul>
        </div>
        <div className="container_2">
            <h3>We would love to hear from you</h3>
            <form>
                <div>
                    <input type="text" placeholder='Your Name'/>
                    <input type="email" placeholder='Email'/>
                </div>
                <textarea rows="3" placeholder='Your message....'></textarea>
        <button type='submit'>SEND</button>
            </form>
        </div>
    </div>
  </section>
  )
}

export default Contact