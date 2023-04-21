import Reviews from "./Reviews.js";
import UpperContent from "./UpperContent.js";
import Home from "./Home.js";
import Restaurants from "./Restaurants.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Recipes from "./Recipes.js";
import ErrorPage from "./ErrorPage.js";
import Recipe from "./Recipe.js";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";

function AppRouter() {
  return (
    <div>
      <div>
        <div className="headerMenu">
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

        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Restaurants/*" element={<Restaurants />}></Route>
          <Route path="/Reviews/*" element={<Reviews />}></Route>
          <Route path="/Recipes/*" element={<Recipes />}></Route>
          <Route path="/Recipe" element={<Recipe />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default AppRouter;
