import React from "react";

import images from "../../constants/images";

const Providers = () => {
  return (
    <div
      className="app__providers app__wrapper section__padding"
      id="providers"
    >
      <div className="app__wrapper_img2">
        <img src={images.illustration02} alt="illustration" />
      </div>
      <div className="app__wrapper_info">
        <h1 className="headtext__mulish">Leading healthcare providers</h1>
        <hr></hr>
        <p className="p__mulish">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>
      </div>
    </div>
  );
};

export default Providers;
