import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsLink45Deg } from "react-icons/bs";

import "./Style/PortDetel.css";

import one from "./Style/Img/1.jpg";
import two from "./Style/Img/2.jpg";
import three from "./Style/Img/3.jpg";
import fore from "./Style/Img/4.jpg";

const PortDetal = () => {
  const { title } = useParams();
  const data = [
    { id: 1, title: "Extra Safe BD", link: one },
    { id: 2, title: "The Police Clener", link: two },
    { id: 3, title: "Jays Rocky", link: three },
    { id: 4, title: "E-commerce Demo", link: fore },
  ];

  const [imgLink, setImgLink] = useState(null);

  const fill = data.filter(
    (it) => it.title.toLowerCase() === title.toLowerCase()
  );

  return (
    <>
      <div>
        <div className="detel">
          <div className="detel-title">{title}</div>
          <div className="detelBtBox">
            <a
              id="detelbtn"
              href="http://localhost:5173/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {<BsLink45Deg />}
              {title}
            </a>
          </div>
          <div className="detelImgBox">
            <div className="ImgFrem">
              {fill.map((it) => {
                return (
                  <>
                    <div>
                      <img id="imgLink" src={it.link} alt={it.title} />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="someText">Have a Project for Me? GET IN TOUCH!</div>
          <div className="hareButton">
            <span id="btnHare">Hare Me</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortDetal;
