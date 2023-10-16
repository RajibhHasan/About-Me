import React, { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./Style/Navbar.css";

const Navbar = () => {
  const [togle, setTogle] = useState(false);

  const Open = () => {
    setTogle(!togle);
  };

  const Close = () => {
    setTogle(!togle);
  };

  const hide = () => {
    setTogle(!togle);
  };

  return (
    <div>
      <div className="fix">
        <div className="bx">
          <div className="logo">
            <h3>Rajib Hasan</h3>
            <h5> Pro Web Developer</h5>
          </div>
          <div className="b">
            {togle ? (
              <button
                className="togle"
                onClick={() => {
                  Open();
                }}
              >
                <AiOutlineClose />
              </button>
            ) : (
              <button
                className="togle"
                onClick={() => {
                  Close();
                }}
              >
                {" "}
                <FiMenu />
              </button>
            )}
          </div>

          <nav className={togle ? "openNev" : "closeNav"}>
            <NavLink to="/" className="Link" onClick={hide}>
              Home
            </NavLink>
            <NavLink to="/About" className="Link" onClick={hide}>
              About
            </NavLink>
            <NavLink to="/Service" className="Link" onClick={hide}>
              Service
            </NavLink>
            <NavLink to="/Contact" className="Link" onClick={hide}>
              Contact
            </NavLink>
            <NavLink to="/Portfolio" className="Link" onClick={hide}>
              Portfolio
            </NavLink>
          </nav>
          <button className="lets">let's Talk</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
