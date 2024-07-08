import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const Footer = () => {
    const location=useLocation();
    const isHomePage=location.pathname==='/';
  return (
    <footer 
    className={
        isHomePage?'homePage_footer otherPage_footer':"otherPage_footer"
    }
    >
    <div className="container">
        <h4>Luxury Living</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsa voluptas veritatis sed, maxime aut consequatur deleniti facere unde optio?</p>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/termsandconditions'}>Terms and Conditions</Link>
            </li>
             <li>
                <Link to={'/contact'}>contact</Link>
            </li>
            
        </ul>
    </div>
    <div className="container">
        <h4>Connect with us</h4>
        <p>123355263</p>
        <p>ipsita@gmail.com</p>
        <p>All rights reserved to Ipsita dash</p>
    </div>
    </footer>  
)
}

export default Footer
