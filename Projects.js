import './App.css';
import data from './data';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Projects() {
    const [item] = useState(data);
    const [index, setIndex] = React.useState(0);
  
    useEffect(() => {
      const lastIndex = item.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, item]);
  
    return (

        <section>
        <div className="section-center">
          {item.map((item, itemIndex) => {
            const { id, image, project, description, link, whitepaper} = item;
  
            let position = 'nextSlide';
            if (itemIndex === index) {
              position = 'activeSlide';
            }
            if (
              itemIndex === index - 1 ||
              (index === 0 && itemIndex === item.length - 1)
            ) {
              position = 'lastSlide';
            }
  
            return (
              <article className={position} key={id}>
                <img src={image} alt={project} className="item-img" />
                <h4>{project}</h4>
                <a href={link}>
                  <p className="link">Go to Project</p>
                </a>
                <p className="text">{description}</p>
                <a href={whitepaper}>
                  <p className="whitepaper">Link to Whitepaper</p>
                </a>
              </article>
            );
  
          })}
  
          <button className="prev" onClick={() => setIndex(index - 1)}>
            &#10094;
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>	
            &#10095;
          </button>
        </div>
      </section>
      
    );
  }
  
  export default Projects;
  