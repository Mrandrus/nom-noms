import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <div className="headerMenu">
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
  const navigate = useNavigate();
  return (
    <>
      <label style={{ color: "white" }} for="cuisine">
        Cuisine:
      </label>
      <select
        name="cuisine"
        id="menuCusine"
        onChange={(e) => navigate(e.target.value)}
      >
        {burgerMenuData.map((p, k) => {
          return (
            <option value={p.label} key={k}>
              {p.label}
            </option>
          );
        })}
      </select>
    </>
  );
};
