import React,{useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx';
import {Link,useNavigate} from "react-router-dom";

const Navbar = () => {
    const[navHeight,setnavHeight]=useState(false) ;
    const navigate=useNavigate();
    const gotoHome=()=>{
        navigate("/");
    };
   return (
    <>
    <nav className={navHeight?"show nav":"nav"}>
        <div className='logo' onClick={()=>gotoHome()}>LUXURY LIVING</div>
        <ul>
            <li>
                <Link to ="/aboutus">ABOUT US</Link>
            </li>
            <li>
                <Link to ="/villas">VILLAS</Link>
            </li>
            <li>
                <Link to ="/contact">CONTACT</Link>
            </li>
        </ul>
        <RxHamburgerMenu className='hamburger' onClick={()=>setnavHeight(!navHeight)}/>
    </nav>
    </>
  )
}

export default Navbar