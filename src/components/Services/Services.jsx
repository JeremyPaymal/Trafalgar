import React from "react";
import './Services.css'
import data from '../../constants/data.js';




const Services = () => {
  return (
    <div className="section__padding services__title" id="services">
      <h1 className="headtext__muslish">Our Services</h1>
      <hr></hr>
      <p className="p__mulish">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="app__wrapper services__container">
        {
            data.map((({id, imgUrl, title, paragraph}) => {
                return(
                    <article key={id} className='services__item'>
                        <div className="services__item-images">
                            <img src={imgUrl} alt={title}/>
                        </div>
                        <div className="services__item-text">
                    <h3>{title}</h3>
    
                    <p>{paragraph}</p>
                    </div>
                    </article>
                )
            }))
        }
      </div>
      <button className="services__btn custom__button2">Learn more</button>
    </div>
  );
};

export default Services;
