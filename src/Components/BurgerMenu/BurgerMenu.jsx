import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./burgermenu.module.css";
import { usePageWidth } from "../../hooks";

const burgerMenuData = [
  { label: "Restaurants", path: "/Restaurants" },
  { label: "Recipes", path: "/Recipes" },
  { label: "About", path: "/About" },
  { label: "Contact", path: "/Contact" },
];

// const Menu=()=>{return (
//   <BurgerMenu/>
//   <DesktopMenu/>
// )

const MainMenu = (props) => {
  const pageWidth = usePageWidth();

  return (
    // <div className="headerMenu">
    <div>
      TEST
      {pageWidth > 1000 ? (
        <ul>
          {burgerMenuData.map((item, key) => {
            return (
              <li key={key} className="navRestaurants">
                <Link to={item.path}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <CusineDrop />
      )}
    </div>
  );
};

export default MainMenu;

const CusineDrop = () => {
  return (
    <>
      <label for="cuisine">Cuisine:</label>
      <select name="cusine" id="menuCusine">
        {burgerMenuData.map((p, k) => {
          <Link to={p.path}>
            <option value={p.label}>Free</option>
          </Link>;
        })}
      </select>
    </>
  );
};
