import React from "react";
import { Link } from "react-router-dom";
import "./Style/Portfolio.css";
import one from "./Style/Img/1.jpg";
import two from "./Style/Img/2.jpg";
import three from "./Style/Img/3.jpg";
import fore from "./Style/Img/4.jpg";
import Fotter from './Fotter'

const Portfolio = () => {
  const title="ht";
  return (
    <>
      <div>
      <div className="main">
      <div className="tit">Let's Work</div>
      <div className="tit-l">
      How <span id="rec">Recent </span> Work
      </div>
      <div className="fl-ex">
      <button className="flex-item">View All</button>
            <button className="flex-item">Ecommerce</button>
                  <button className="flex-item">Portfolio</button>
      </div>
      <div className="grid-port">
       <Link to="Extra Safe BD">
      <div className="port-item">
      <img className="port-img" src={one} alt="1.jpg" />
      </div>
      </Link>
      
       <Link to="The Police Clener">
        <div className="port-item">
      <img className="port-img" src={two} alt="1.jpg" />   
      </div>
      </Link>
      
       <Link to="Jays Rocky">
      
            <div className="port-item">
       <img className="port-img" src={three} alt="1.jpg" />
       </div>
       
       </Link>
          <Link to="E-commerce Demo">
             <div className="port-item">
        <img className="port-img" src={fore} alt="1.jpg" />     
      </div>
      </Link>
      </div>
     
      
      </div>
     
      
      
      </div>
    </>
  );
};

export default Portfolio;
