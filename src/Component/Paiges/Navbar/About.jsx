import React, { memo } from "react";

import { BiUserCircle } from "react-icons/bi";
import { FaUserSecret } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiTwotoneFlag } from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";

import "./Style/About.css";
import Prp from "./Style/Img/Profi.png";
const About = () => {
  return (
    <>
      <div>
        <div className="About">
          <div className="about-box">
            <div className="about-Img">
              <img className="image" src={Prp} alt="profile" />
            </div>
          </div>
          <div className="About-contact">
            <div className="about-contact-info-box">
              <div className="about-item">
                <div className="about-item-list">
                  <span id="ic">
                    <BiUserCircle />
                  </span>
                  <span>Name</span>
                </div>
                <div className="about-item-list">: Rajib Hasan.</div>

                <div className="about-item-list">
                  <span id="ic">
                    {" "}
                    <FaUserSecret />
                  </span>
                  <span>Profession</span>
                </div>
                <div className="about-item-list">: Web Developer.</div>

                <div className="about-item-list">
                  <span id="ic">
                    {" "}
                    <FaBirthdayCake />
                  </span>
                  <span>Date Of Birth</span>
                </div>
                <div className="about-item-list">: 30 December.</div>

                <div className="about-item-list">
                  <span id="ic">
                    {" "}
                    <MdMarkEmailRead />
                  </span>
                  <span>Email</span>
                </div>
                <div className="about-item-list">
                  : rajib01943075658@ gmail.com,
                </div>

                <div className="about-item-list">
                  <span id="ic">
                    {" "}
                    <BsFillTelephoneForwardFill />
                  </span>
                  <span>Phone</span>
                </div>
                <div className="about-item-list">: 01996973025.</div>

                <div className="about-item-list">
                  <span id="ic">
                    <AiTwotoneFlag />
                  </span>
                  <span>Nationality</span>
                </div>
                <div className="about-item-list">: Bangladeshi,</div>

                <div className="about-item-list">
                  <span id="ic">
                    {" "}
                    <FaAddressCard />
                  </span>
                  <span>Address</span>
                </div>
                <div className="about-item-list">: Mymensingh.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(About);
