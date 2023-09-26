import Reviews from "./Reviews.js";
import UpperContent from "./UpperContent.js";
import Home from "./Home.js";
import Restaurants from "./Restaurants.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Recipes from "./Recipes.js";
import ErrorPage from "./ErrorPage.js";
import Recipe from "./RecipeText.js";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu.jsx";
import FoodMap from "./FoodMap.js";

function AppRouter() {
  return (
    <div>
      <div>
        <BurgerMenu />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Restaurants/*" element={<Restaurants />}></Route>
          <Route
            path="/Restaurants/:cuisine/*"
            element={<Restaurants />}
          ></Route>
          <Route
            path="/Restaurants/:cuisine/:restaurant/*"
            element={<Restaurants />}
          ></Route>
          <Route path="/Reviews/*" element={<Reviews />}></Route>
          <Route path="/Recipes/*" element={<Recipes />}></Route>
          <Route path="/Recipes/:cuisine/*" element={<Recipes />}></Route>
          <Route
            path="/Recipes/:cuisine/:recipe/*"
            element={<Recipes />}
          ></Route>
          <Route path="/Recipe" element={<Recipe />}></Route>
          <Route path="/FoodMap" element={<FoodMap />}></Route>
          <Route path="/About" element={<About />}></Route>
          {/* <Route path="/Contact" element={<Contact />}></Route> */}
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default AppRouter;
