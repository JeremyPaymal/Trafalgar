import React from "react";

import './Download.css';
import images from "../../constants/images";

const Download = () => {
  return (
    <div className="app__download app__wrapper section__padding" id="download">
      <div className="app__wrapper_info">
        <h1 className="headtext__mulish">Download our mobile apps</h1>
        <p className="p__mulish">
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <button className="custom__button2">Download <span class="arrow"></span></button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.illustration03} alt="illustration" />
      </div>
    </div>
  );
};

export default Download;
