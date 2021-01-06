import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousel.css";
import "../../home/motive/motive.css";

export default function Owl(props) {
  const state = {
    options: {
      loop: true,
      responsive: {
        0: {
          items: 1,
        },
        500: {
          items: 2,
          margin: 20,
        },
        800: {
          items: 2,
          margin: 0,
        },
        1000: {
          items: 2,
          margin: 50,
        },
        1100: {
          items: 4,
        },
      },
    },
  };
  return (
    <div className="slider-div">
      <div className="motive">
        <h1 className="carousel-head">{props.head}</h1>
        <div className="dash"></div>
      </div>
      <OwlCarousel
        className="owl-theme slide "
        {...state.options}
        autoplay={true}
        responsiveClass={true}
        nav={false}
      >
        <div className="slide-card">
          <h3 className="card-head"> Crio Winter Of Doing </h3>
          <div className="card-text">
            Hello Techies!👋 📢Crio Winter of Doing is here!!🤩🤩 India's top
            startups are lining up their tech challenges for you!! Join India's
            largest tech externship program for developers. Crio Winter of Doing
            is here!!🤩🤩 India's top startups are lining up their tech
            challenges for you!! Join India's largest tech externship program
            for developers.....
          </div>
        </div>
        <div className="slide-card">
          <h3 className="card-head"> Crio Winter Of Doing </h3>
          <div className="card-text">
            Hello Techies!👋 📢Crio Winter of Doing is here!!🤩🤩 India's top
            startups are lining up their tech challenges for you!! Join India's
            largest tech externship program for developers. Crio Winter of Doing
            is here!!🤩🤩 India's top startups are lining up their tech
            challenges for you!! Join India's largest tech externship program
            for developers.....
          </div>
        </div>{" "}
        <div className="slide-card">
          <h3 className="card-head"> Crio Winter Of Doing </h3>
          <div className="card-text">
            Hello Techies!👋 📢Crio Winter of Doing is here!!🤩🤩 India's top
            startups are lining up their tech challenges for you!! Join India's
            largest tech externship program for developers. Crio Winter of Doing
            is here!!🤩🤩 India's top startups are lining up their tech
            challenges for you!! Join India's largest tech externship program
            for developers.....
          </div>
        </div>{" "}
        <div className="slide-card">
          <h3 className="card-head"> Crio Winter Of Doing </h3>
          <div className="card-text">
            Hello Techies!👋 📢Crio Winter of Doing is here!!🤩🤩 India's top
            startups are lining up their tech challenges for you!! Join India's
            largest tech externship program for developers. Crio Winter of Doing
            is here!!🤩🤩 India's top startups are lining up their tech
            challenges for you!! Join India's largest tech externship program
            for developers.....
          </div>
        </div>
        <div className="slide-card">
          <h3 className="card-head"> Crio Winter Of Doing </h3>
          <div className="card-text">
            Hello Techies!👋 📢Crio Winter of Doing is here!!🤩🤩 India's top
            startups are lining up their tech challenges for you!! Join India's
            largest tech externship program for developers. Crio Winter of Doing
            is here!!🤩🤩 India's top startups are lining up their tech
            challenges for you!! Join India's largest tech externship program
            for developers.....
          </div>
        </div>
        <div className="slide-card">
          <h3 className="card-head"> Crio Winter Of Doing </h3>
          <div className="card-text">
            Hello Techies!👋 📢Crio Winter of Doing is here!!🤩🤩 India's top
            startups are lining up their tech challenges for you!! Join India's
            largest tech externship program for developers. Crio Winter of Doing
            is here!!🤩🤩 India's top startups are lining up their tech
            challenges for you!! Join India's largest tech externship program
            for developers.....
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
