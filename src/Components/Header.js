import "../App.css";
import GradingScale from "./Reviews.js";
import NomNomsLogo from "../images/coNomNomsLogo.png";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import AppRouter from "./AppRouter";


function Header() {
  return (
    <div className="header">
      <div className="headerLogo">
        <a href="/">
          <img src={NomNomsLogo} className="NomNoms-logo" alt="Nomlogo" />
        </a>
      </div>
        <AppRouter />
      </div>
  );
}

export default Header;
