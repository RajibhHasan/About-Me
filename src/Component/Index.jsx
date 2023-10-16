import React, { memo } from "react";

import "./Style/Index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Component/Paiges/Navbar/Home";
import Fotter from "../Component/Paiges/Navbar/Fotter";
import PortDetal from "../Component/Paiges/Navbar/PortDetal";
import About from "../Component/Paiges/Navbar/About";
import Contact from "../Component/Paiges/Navbar/Contact";
import Service from "../Component/Paiges/Navbar/Service";
import Portfolio from "../Component/Paiges/Navbar/Portfolio";

import Navbar from "../Component/Paiges/Navbar/Navbar";

const Index = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/:title" element={<PortDetal />} />

            <Route path="/Portfolio/:title" element={<PortDetal />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />

            <Route path="/Service" element={<Service />} />
            <Route path="/Portfolio" element={<Portfolio />} />
          </Routes>
          <Fotter />
        </BrowserRouter>
      </div>
    </>
  );
};

export default memo(Index);
