import React from "react";

function Urunler() {
  return (
    <div>
      <h1 className="h1">Ürünlerimiz</h1>
      <div>
        {" "}
        <div className="display">
          <img
            className="imgclass2"
            src={require("../Assets/images/hlv5.jpg")}
          />
          <h4 style={{ paddingLeft: "95px", paddingTop: "50px" }}>
            Sade Tahin Helvası
          </h4>
        </div>{" "}
        <div className="display">
          <img
            className="imgclass2"
            src={require("../Assets/images/hlv6.jpg")}
          />
          <h4 style={{ paddingLeft: "95px", paddingTop: "50px" }}>
            Cevizli Yaz Helvası
          </h4>
        </div>{" "}
        <div className="display">
          <img
            className="imgclass2"
            src={require("../Assets/images/hlv7.jpg")}
          />
          <h4 style={{ paddingLeft: "95px", paddingTop: "50px" }}>
            Fıstıklı Tahin Helvası
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Urunler;
