import React, { useState, useEffect } from "react";
import axios from "axios";

function Hava() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=84d39fc48a1f43d7833131835220807&q=Bandirma&aqi=no",
        { headers: { accept: "application/json" } }
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);
  console.log(weather ? weather : null);
  const durum = weather ? weather.current.temp_c : null;

  return (
    <div className="renk">
      <h6 className="yaz">Bandırma Hava durumu: {durum}C</h6>
    </div>
  );
}

export default Hava;
