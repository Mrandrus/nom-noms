import "../App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import jsonRecipeData from "../Reviews/foodRecipes.json";

function Recipe(props) {
  const location = useLocation();
  let details = location.state;

  return (
    <>
      <div className="recipe">
        <div className="recipe-space-left"></div>
        <h2>{details?.recipe}</h2>
        <p>{details?.cuisine}</p>
        <p>{details?.ingredients}</p>
        <img
          src={`${details?.image}`}
          alt={`${details?.recipe}-image`}
          height={200}
          width={350}
        />
        <p>{details?.insructions}</p>
        {/* <div>
          {details?.foodPic?.map((x, i) => {
            {
              console.log({ test: x });
              $(document).ready(function () {
                $(".allFoodImages").click(function () {
                  this.requestFullscreen();
                });
              });

              return (
                // <div>
                //     {x}
                // </div>
                <img
                  key={`${i}_imagesReturned`}
                  src={x}
                  alt={`${details?.Restaurant}-food-image${x}`}
                  height={200}
                  width={350}
                  className="allFoodImages"
                />
              );
            }
          })}
          {/* <img
                src={details?.foodPic[0]}
                alt={`${details?.restaurant}-food-image${details?.id}`}
                height={200}
                width={350}
              /> *
        </div> */}
        <div className="recipe-space-right"></div>
      </div>
    </>
  );
}

export default Recipe;
