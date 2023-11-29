import "../App.css";
import jsonReviewData from "../Reviews/foodReview.json";
import React, { Component, useEffect, useState } from "react";
import jsonRecipeData from "../Reviews/foodRecipes.json";
import foodRecipesJS from "../Reviews/foodRecipesJS";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";
import Recipe from "./RecipeText";
import styles from "./Restaurants.module.css";
import { usePageWidth } from "../hooks";
import RecipeText from "./RecipeText";
import { Helmet } from "react-helmet";

const baseUrlRecipes = "/Recipes";

const Recipes = () => {
  const params = useParams();

  return (
    <div className="recipe-page-container">
      <RecipeCuisineFilter
        cuisineList={removeDuplicatesByKey(foodRecipesJS, "Cuisine")}
        cuisine={params?.cuisine}
      />

      {!params.recipe ? (
        <RecipeListByCuisine
          recipeByCuisine={foodRecipesJS.filter(
            (p) => p.Cuisine === params.cuisine
          )}
          cuisine={params?.cuisine}
        />
      ) : (
        <ActualRecipe
          recipe={foodRecipesJS.find((p) => p.Recipe === params.recipe)}
        />
      )}
    </div>
  );
};

export default Recipes;

const RecipeCuisineFilter = ({ cuisineList, cuisine }) => {
  cuisineList.sort((a, b) => {
    let textA = a.Cuisine.toUpperCase();
    let textB = b.Cuisine.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  const pageWidth = usePageWidth();

  return (
    <div className="recipe-page-sideBar">
      {pageWidth > 1399 ? (
        <ul>
          {getArray(cuisineList).map((p, i) => (
            <Link to={`${baseUrlRecipes}/${p.Cuisine}`} key={i}>
              <li
                key={p.Id}
                className={`recipe-sideBar-buttons ${
                  cuisine === p.Cuisine ? styles.activeCuisine : ""
                }`}
              >
                {p.Cuisine}
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <CuisineDrop cuisines={cuisineList} />
      )}
    </div>
  );
};

const RecipeListByCuisine = ({ recipeByCuisine, cuisine }) => {
  return (
    <div className="recipe-page-content">
      {!cuisine ? (
        <RecipeList />
      ) : (
        <>
          {getArray(recipeByCuisine).map((p, i) => {
            return (
              <div
                key={`recipe_id_${p.Id}_${i}`}
                className={`recipe-page-titles-items`}
              >
                <Link key={i} to={`${baseUrlRecipes}/${cuisine}/${p.Recipe}`}>
                  <div className="recipe-page-img">
                    <img
                      src={`${p.Image}`}
                      alt={`${p.Recipe}-image`}
                      height={125}
                      width={225}
                    />
                  </div>
                  <div className="recipe-stuff">
                    <h1
                      key={`title_of_reicpe_id_${p.Id}_${i}`}
                      className={`title_of_recipe_${p.Id}`}
                      style={{ color: "#002868", marginBottom: "5px" }}
                    >
                      {p.Recipe}
                    </h1>
                    <hr className="recipe-line-divider" />
                    <br />
                    <a>{p.Cuisine}</a>
                    <br />
                    {/* </Link> */}
                    <a>{p.Description}</a>
                    <br />
                  </div>
                </Link>
              </div>
            );
          })}{" "}
        </>
      )}
    </div>
  );
};

const RecipeList = () => {
  return (
    <>
      <div className="recipe-page-titles">
        {foodRecipesJS.map((r, i) => {
          return (
            <Link key={i} to={`${baseUrlRecipes}/${r.Cuisine}/${r.Recipe}`}>
              <div
                key={`reicpe_id_${r.Id}_${i}`}
                className={`recipe-page-titles-items`}
              >
                <div className="recipe-page-img">
                  <img
                    src={r.Image}
                    alt={`${r.Recipe}-image`}
                    height={100}
                    width={200}
                  />
                </div>
                <div className="recipe-stuff">
                  <h1
                    key={`title_of_reicpe_id_${r.Id}_${i}`}
                    className={`title_of_recipe_${r.Id}`}
                    style={{ color: "#002868", marginBottom: "5px" }}
                  >
                    {r.Recipe}
                  </h1>
                  <hr className="recipe-line-divider" />
                  <br />
                  <a>{r.Cuisine}</a>
                  <br />
                  {/* </Link> */}
                  <a>{r.Description}</a>
                  <br />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

const ActualRecipe = ({ recipe }) => {
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-review-content">
      <h1>{recipe.Recipe}</h1>
      <hr className="rest-line-divider" />
      <div className="recipe-main-food-image">
        <img src={recipe.Image} alt={`${recipe.Recipe}-image`} />
      </div>
      <div className="recipe-instruction-text">
        <RecipeText props={recipe} />
      </div>
      <br />
      <div>
        <UpdateMetaTags data={!recipe ? null : recipe}/>
      </div>
    </div>
  );
};

const CuisineDrop = ({ cuisines }) => {
  const navigate = useNavigate();

  const [burgerActive, setBurgerActive] = useState(false);

  const toggleBurger = () => {
    setBurgerActive(!burgerActive);
  };

  return (
    <>
      {/* <label style={{ color: "white" }} for="cuisine">
        Cuisine:
      </label>
      <select
        name="cuisine"
        id="menuCusine"
        onChange={(e) => navigate(e.target.value)}
      > */}
      <div className="burger-container">
        <div className="burger-cuisine-icon" onClick={toggleBurger}>
          <div className="burger-cuisine">
            <i className="arrow-down"></i> | Cuisines |{" "}
            <i className="arrow-down"></i>
          </div>
        </div>
        <ul className={`cuisine-links ${burgerActive ? "active" : "none"}`}>
          {getArray(cuisines).map((p, k) => {
            return (
              // <option value={p.label} key={k}>
              //   {p.label}
              // </option>
              <li key={k}>
                <Link
                  to={`${baseUrlRecipes}/${p.Cuisine}`}
                  key={k}
                  onClick={toggleBurger}
                >
                  {p.Cuisine}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* </select> */}
    </>
  );
};

//Uses React Helmet to dynamically alter meta tags based off
const UpdateMetaTags = (data) => {

  console.log('Data in UpdateMetaTags:', data);

  if (!data) {
    return null
  }

  const recipe = data

  return (
    <Helmet>
      <title>Colorado Nom Noms {recipe?.data.Recipe}</title>
      <meta name="description" content={recipe?.data.Description} />
      <meta
        name="keywords"
        content={`${recipe?.data.Recipe}, ${recipe?.data.Cuisine}, Colorado Nom Noms, Matt Andrus, Recipes, Food`}
      />
    </Helmet>
  );
};

/* === JS HELPERS === */
function getArray(data) {
  return Array.isArray(data) === true ? data : [];
}

function removeDuplicatesByKey(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}
