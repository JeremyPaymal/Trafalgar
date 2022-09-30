import React from "react";

import images from '../../constants/images'
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <h1 className="headtext__mulish">Virtual healthcare for you</h1>
        <p className="p__mulish">
          Trafalgar provides progressive, and affordable healthcare,<br/> accessible
          on mobile and online for everyone
        </p>
        <button className="custom__button">Consult today</button>
      </div>
      <div className="app__wrapper_img">
      <img src={images.illustration01} alt="illustration" />
      </div>
      </div>
  );
};

export default Header;
