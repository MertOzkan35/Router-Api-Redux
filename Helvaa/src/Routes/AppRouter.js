import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Components/HomePage";
import Siparis from "../Components/Siparis";
import Hakkimizda from "../Components/Hakkimizda";
import Urunler from "../Components/Urunler";
import Tarih from "../Components/Tarih";
import Ilet from "../Components/Ilet";
function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/siparis" element={<Siparis />} />
        <Route path="/Hakkimizda" element={<Hakkimizda />} />
        <Route path="/Urunler" element={<Urunler />} />
        <Route path="/Tarih" element={<Tarih />} />
        <Route path="/Ilet" element={<Ilet />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
