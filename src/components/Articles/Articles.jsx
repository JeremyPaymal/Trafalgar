import React from 'react';
import './Articles.css';

import images from '../../constants/images';

const articles = [
    {
        id: 1,
        imgUrl:images.article1,
        title: "Disease detection, check up in the laboratory",
        paragraph: "In this case, the role of the health laboratory is very important to do a disease detection...",
     },
    {
        id: 2,
        imgUrl:images.article2,
        title: "Herbal medicines that are safe for consumption",
        paragraph: "Herbal medicine is very widely used at this time because of its very good for your health...",
     },
    {
        id: 3,
        imgUrl:images.article3,
        title:"Natural care for healthy facial skin",
        paragraph: "A healthy lifestyle should start from now and also for your skin health.There are some...",
     },
]

const Articles = () => {
  return (
    <div className='app__articles section__padding' id="articles">
        <h1 className='headtext__mulish'>Check out our latest article</h1>
        <hr></hr>
        <div className='app__wrapper articles__container'>
            { articles.map((({id, imgUrl, title, paragraph}) => {
                return(
                    <article key={id} className="articles__item">
                        <div className='articles__item-images'>
                            <img src={imgUrl} alt={title}/>
                        </div>
                        <div className="articles__item-text">
                            <h3>{title}</h3>

                            <p>{paragraph}</p>

                            <a href='/'>Read more <span class="arrow"></span></a>
                        </div>
                    </article>
                )
            }))}
        </div>
    </div>
  )
}

export default Articles