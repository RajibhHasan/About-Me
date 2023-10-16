import React, { memo } from "react";

import Portfolio from "./Portfolio";
import Service from "./Service";
import Contact from "./Contact";
import "./Style/Home.css";
import logo from "./Style/Img/Screenshot_20231003_111512.png";

import { FaBug } from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";

const Home = () => {
  return (
    <>
      <div>
        <div className="home">
          <div className="flex">
            <h2 className="h2">
              HI, I'M <span id="name">RAKIBUL ISLAM.</span>
            </h2>
            <h4 id="title">I'm a Full-Stack Web Developer </h4>
            <p className="some">
              I specialize in creating and revamping WordPress websites with a
              professional and cost-effective approach. I offer comprehensive
              website services, catering to various needs. I am available
              round-the-clock for support, prioritizing client satisfaction
              above all else. Feel free to reach out to me to discuss your
              exciting project.
            </p>

            <div className="bu-b">
              <button id="b1" className="Hare">
                {" "}
                Hare Me
              </button>
              <button id="b2" className="Hare">
                My Project
              </button>
            </div>
          </div>

          <div className="img-box">
            <div className="round">
              <img id="img" src={logo} alt="profile" />
            </div>
          </div>
        </div>
        <div className="wel">
          <div className="fl-b">
            <h2 className="h2">
              Hello ! You're <span id="name">Wellcome.</span>{" "}
            </h2>

            <h4 id="title">I'm a Full-Stack Web Developer </h4>
            <div className="text">
              I am Rakibul Islam, a dedicated web developer who is passionate
              about my work. I devote a minimum of 13-14 hours every day to web
              development because it is my life and everything to me. My primary
              objective is to ensure client satisfaction by understanding their
              website requirements and providing comprehensive support
              throughout the project. I am available for video or audio
              conversations to better comprehend any issues or project
              specifications. Once the website or project is completed, I offer
              instructions on how to manage, edit, update, add pages, and post
              on the website independently. If necessary, I can also provide
              video tutorials for further assistance.
            </div>
            <button id="b3" className="Hare">
              My Resume{" "}
            </button>
          </div>
          <div className="im-b">
            <img id="img-r" src={logo} alt="profile" />
          </div>
        </div>

        <Service />
        <Portfolio />

        <div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default memo(Home);
