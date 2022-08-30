import React from "react";
import cafeImg1x from "../../assets/images/desktop-image.png";
import cafeImg2x from "../../assets/images/desktop-image@2x.png";
import logo from "../../assets/images/desktop-logo.png";
import AgeForm from "../AgeForm/AgeForm.jsx";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="image">
          <img src={cafeImg1x} alt="Image of the cafe" />
        </div>
        <div className="data">
          <div className="logo-wrapper">
            <img src={logo} alt="Cafe logo" />
          </div>
          <div className="form">
            <AgeForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
