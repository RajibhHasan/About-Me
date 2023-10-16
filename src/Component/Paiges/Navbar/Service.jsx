import React from "react";

import { FaBug } from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";

const Service = () => {
  return (
    <>
      <div>
        <div className="what-b">
          <div className="what">
            <h2 className="whatTitle">
              What<span id="I">I</span>Do
            </h2>
            <div className="text-b">
              I take pride in showcasing my portfolio of work, which includes
              various types of projects and services related to websites. I am
              dedicated to ensuring client satisfaction by delivering
              high-quality work and providing a range of website-related
              services. From website design and development to optimization,
              maintenance, and support, I strive to meet the unique requirements
              of each client. Your satisfaction is my top priority, and I am
              committed to delivering exceptional results for all your website
              needs
            </div>
            <div className="ser-b">
              <button id="b3" className="Hare">
                View All services{" "}
              </button>
            </div>
          </div>
          <div className="expBox">
            <div className="exp-flex">
              <h1 className="exp-T"> {"</>"} </h1>
              <h2 className="Full">Full website creation</h2>
              <div className="expText">
                {" "}
                I excel at creating versatile websites for businesses,
                portfolios, companies, e-commerce stores, blogs, and more. My
                expertise lies in delivering distinctive, sleek, and visually
                captivating design interfaces that elevate user engagement{" "}
              </div>
            </div>

            <div className="exp-flex">
              <h1 className="exp-T"> {"</>"} </h1>
              <h2 className="Full">Online store & shopping</h2>
              <div className="expText">
                With my expertise, I can develop a fully operational online
                store that supports various payment gateways, while seamlessly
                integrating shopping cart functionality into your existing
                website.
              </div>
            </div>
            <div className="exp-flex">
              <h1 className="exp-T"> {<FaBug />} </h1>
              <h2 className="Full">Fixing problems</h2>
              <div className="expText">
                Website problems and bugs are common issues, but you can trust
                me to handle them. I specialize in resolving all types of
                problems and bugs for any website, ensuring smooth
                functionality.
              </div>
            </div>
            <div className="exp-flex">
              <h1 className="exp-T"> {<GrVmMaintenance />} </h1>
              <h2 className="Full">Maintenance & Optimized</h2>
              <div className="expText">
                Website problems and bugs are common issues, but you can trust
                me to handle them. I specialize in resolving all types of
                problems and bugs for any website, ensuring smooth
                functionality.
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="what">
          <h2 className="whatTitle">
            How<span id="I">Do I</span>Work
          </h2>
          <div className="text-b">
            I prefer working methodically and step by step as it is an efficient
            approach to accomplish tasks successfully and with precision.
          </div>
          <div className="grid">
            <div className="exp-flex">
              <h1 className="exp-T"> 1 </h1>
              <h2 className="Full">Discussion</h2>
              <div className="expText">
                Understanding the project's needs and requirements is vital to
                me. Therefore, I thoroughly discuss all the details related to
                the project and, if required, utilize video or audio
                conversations for better communication.
              </div>
            </div>

            <div className="exp-flex" id="trans">
              <h1 className="exp-T"> 2 </h1>
              <h2 className="Full">Planing</h2>
              <div className="expText">
                Thorough planning is essential for interior projects. By
                creating a detailed plan, I can effectively manage every aspect,
                including delivery timelines and gathering necessary website
                data from you.
              </div>
            </div>

            <div className="exp-flex">
              <h1 className="exp-T"> 3 </h1>
              <h2 className="Full">Design</h2>
              <div className="expText">
                I focus on website design with great concentration, aiming to
                provide clean and visually appealing designs that elevate the
                quality and success of your business.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
