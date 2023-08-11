import NomNomsLogo from "../images/coNomNomsLogo.png";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";
import ToggleDarkMode from "./ToggleDarkMode";

function Footer() {
  return (
    <div className="footer">
      <div className="footerMenu">
        <ul>
          <br />
          <li className="navRestaurants">
            <Link to="/Restaurants">Restaurants</Link>
          </li>
          <br />

          {/* <li className="navReviews">
            <Link to="/Reviews">Reviews</Link>
          </li> */}
          <li className="navRecipe">
            <Link to="/Recipes">Recipes</Link>
          </li>
          <br />

          <li className="navAbout">
            <Link to="/About">About</Link>
          </li>
          <br />
          <li className="navContact">
            <Link to="/Contact">Contact</Link>
          </li>
          <br />
        </ul>
      </div>
      <div className="footerLogo">
        <a href="/">
          <img
            src={NomNomsLogo}
            className="NomNoms-logo-footer"
            alt="Nomlogo"
          />
        </a>

        {/* <ToggleDarkMode /> */}
      </div>
    </div>
  );
}

export default Footer;
