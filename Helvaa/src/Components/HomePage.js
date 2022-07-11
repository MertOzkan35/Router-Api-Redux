import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

const HomePage = () => {
  return (
    <div className="imgclass">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={require("../Assets/images/hlv1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Assets/images/hlv2.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Assets/images/helva3.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePage;
