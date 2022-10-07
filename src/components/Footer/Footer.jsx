import React from "react";
import "./Footer.css";

import images from "../../constants/images";

const Footer = () => {
  return (
    <div className="app__footer section__padding app_wrapper" id="footer">
      <div className="app__footer-description">
        <img src={images.logo2} alt="app-logo"/>
        <p className="p__mulish">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone.
        </p>
        <small className="p__mulish">&copy;Trafalgar PTY LTD {new Date().getFullYear()}. All right reserved </small>
      </div>

        <div className="app__footer-links">
            <div className="links">
                <h3>Company</h3> 
                <ul>
                <li><a href="/">About</a></li>
                <li> <a href="/">Testimonials</a></li>
                <li><a href="/">Find a doctor</a></li> 
                <li><a href="/">Apps</a></li>
                </ul>
            </div>
            <div className="links">
            <h3>Region</h3> 
                <ul>
                <li><a href="/">Indonesia</a></li>
                <li> <a href="/">Singapore</a></li>
                <li><a href="/">Hongkong</a></li> 
                <li><a href="/">Canada</a></li>
                </ul>
            </div>
            <div className="links">
                <h3>Help</h3> 
                <ul>
                <li><a href="/">Help center</a></li>
                <li> <a href="/">Contact support</a></li>
                <li><a href="/">Instruction</a></li> 
                <li><a href="/">How it works</a></li>
                </ul>
                </div>
        </div>
    </div>
  );
};

export default Footer;
