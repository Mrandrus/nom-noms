import NomNomsLogo from "../images/coNomNomsLogo.png";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerMenu">
        <ul>
          <li className="navRestaurants">
            <Link to="/Restaurants">Restaurants</Link>
          </li>
          {/* <li className="navReviews">
            <Link to="/Reviews">Reviews</Link>
          </li> */}
          <li className="navRecipe">
            <Link to="/Recipes">Recipes</Link>
          </li>
          <li className="navAbout">
            <Link to="/About">About</Link>
          </li>
          <li className="navContact">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="footerLogo">
        <a href="/">
          <img src={NomNomsLogo} className="NomNoms-logo-footer" alt="Nomlogo" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
