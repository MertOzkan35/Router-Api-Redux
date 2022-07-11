import React from "react";
import "./Navbarr.css";
import { Link, NavLink } from "react-router-dom";
import Hava from "./Hava";

function Navbar() {
  return (
    <div>
      <div>
        <h1>
          <a className="navmerth1" href="/">
            HELVACI HASAN
          </a>
        </h1>
        <Hava />
      </div>
      <nav className="navbar navbar-expand-lg navbar-light  navmert">
        <a className="navbar-brand" href="/siparis">
          Sipariş Ver
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/Hakkimizda">
                Hakkımızda <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Urunler">
                Ürünler
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Tarih">
                BAŞKANIMIZ!!
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Ilet">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
