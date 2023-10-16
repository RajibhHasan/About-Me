import React from "react";

import "./Style/Fotter.css";
import FotterImg from "./Style/Img/Fotter.jpeg";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { ImSkype } from "react-icons/im";
import { BsPinterest } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

const Fotter = () => {
  return (
    <>
      <div>
        <div className="fotterBox">
          <div className="fot">
            <a href="#" className="LinkLogo">
              <FaWhatsappSquare />
            </a>
          </div>
          <div className="fot">
            <a href="#" className="LinkLogo">
              <BsMessenger />
            </a>
          </div>
          <div className="fot">
            <a href="#" className="LinkLogo">
              <BsLinkedin />
            </a>
          </div>
          <div className="fot">
            <a href="#" className="LinkLogo">
              <BsPinterest />
            </a>
          </div>
          <div className="fot">
            <a href="#" className="LinkLogo">
              <ImSkype />
            </a>
          </div>
          <div className="fot">
            <a href="#" className="LinkLogo">
              <BsTelegram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotter;
