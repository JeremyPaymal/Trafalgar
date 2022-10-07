import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import {MdOutlineHealthAndSafety} from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const [colorChange, setColorchange] = useState(false);
const changeNavbarColor = () =>{
	if(window.scrollY >= 80){
	setColorchange(true);
	}
	else{
	setColorchange(false);
	}
};
window.addEventListener('scroll', changeNavbarColor);


  return (
    <nav className={colorChange ? 'app__navbar colorChange' : 'app__navbar'}>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt='app-logo'/>
        </div>
        <ul className='app__navbar-links'>
            <li><a data-to-scrollspy-id="home"href='#home'>Home</a></li>
            <li><a data-to-scrollspy-id="services" href='#services'>Find a doctor</a></li>
            <li><a data-to-scrollspy-id="download" href='#download'>Apps</a></li>
            <li><a data-to-scrollspy-id="testimonials"href='#testimonials'>Testimonials</a></li>
            <li><a data-to-scrollspy-id="providers" href='#providers'>About us</a></li>
        </ul>
      


        <div className='app__navbar-smallscreen'>
            <GiHamburgerMenu color='black' fontSize={27} onClick= {() => setToggleMenu(true)} />

            {toggleMenu && (
                <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                       <MdOutlineHealthAndSafety
                       fontSize={27}
                       className="overlay_close"
                       onClick={() => setToggleMenu(false)}
                       />
                       <ul className="app__navbar-smallscreen-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#findadoctor">Find a doctor</a></li>
                        <li><a href="apps">Apps</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#aboutus">About us</a></li>
                        </ul> 
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar