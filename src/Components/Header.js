import "../App.css";
import GradingScale from "./GradingScale.js";
import NomNomsLogo from "../images/coNomNomsLogo.png";

function Header() {
  return (
    <div className="header">
      <div className="headerLogo">
      <img src={NomNomsLogo} className="NomNoms-logo" alt="Nomlogo" />
      </div>
      <div className="headerMenu">
        <ul>
          <li className="navRestaurants">
            <a href="/Restaurants">Restaurants</a>
          </li>
          <li className="navGradingScale">
            <a href="/GradingScale">Grading Scale</a>
          </li>
          <li className="navAbout">
            <a href="/About">About</a>
          </li>
          <li className="navContact">
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
      <GradingScale who="jubjubby" />
    </div>
  );
}

export default Header;
