import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import AppRouter from "./Routes/AppRouter";
import Hava from "./Components/Hava";
import { useSelector } from "react-redux";
import Dark from "./Components/Dark";

function App() {
  const { dark } = useSelector((state) => state.site);
  return (
    <div className={dark ? "dark" : "light"}>
      <div style={{ backgroundColor: "#e6ddee" }}>
        <Dark />
        <Navbar />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
