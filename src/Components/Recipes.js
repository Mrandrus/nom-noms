import "../App.css";
import jsonReviewData from "../Reviews/foodReview.json";
import React, { Component, useEffect, useState } from "react";
import jsonRecipeData from "../Reviews/foodRecipes.json";

function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [showRecipes, setShowRecipes] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);

  const removeDupes = (arr, key) => {
    const data = [...new Map(arr.map((item) => [item[key], item])).values()];
    return data;
  };

  const recipes = removeDupes(jsonRecipeData, "Cuisine");

  const getRecipes = (cuisine) => {
    console.log("Passed cuisine", cuisine);
    const arr = [];

    jsonRecipeData.forEach((r, i) => {
      if (r.Cuisine === cuisine) {
        arr.push(r);
      }
    });

    setShowRecipe(false);
    setShowRecipes(true);
    setRecipe(arr);
    setSelectedRecipe(arr);
  };

  const getRecipe = (id) => {
    console.log("passed recipe id", id);
    const array = [];

    jsonReviewData.forEach((a, b) => {
      if (a.Id === id) {
        array.push(a);
      }
    });

    setShowRecipe(true);
    setShowRecipes(false);
    console.log("Look at this man", array);
    setRecipe(array);
  };

  return (
    <div className="recipe-container">
      <div className="recipe-sidebar">
        <ul>
          {recipes.map((p, k) => (
            <li key={p.Id}>
              <button
                className="recipe-sideBar-buttons"
                onClick={() => getRecipes(p.Cuisine)}
              >
                {p.Cuisine}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="recipe-content">
        {showRecipe === false && showRecipes === false && (
          <div className="recipe-titles">
            {jsonRecipeData.map((r, i) => {
              return (
                <div
                  key={`reicpe_id_${r.Id}_${i}`}
                  className={`recipe-titles-items`}
                  onClick={() => getRecipe(r.Id)}
                >
                  {/* <Link
                                    to="/Reviews"
                                    state={{
                                      restaurant: r.Restaurant,
                                      cuisine: r.Cuisine,
                                      city: r.City,
                                      id: r.Id,
                                    }}
                                  > */}
                  <div className="recipe-img">
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
                    <hr className="rest-line-divider" />
                    <br />
                    <a>{r.Cuisine}</a>
                    <br />
                    {/* </Link> */}
                    <a>{r.Description}</a>
                    <br />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {showRecipe === true && (
          <div className="recipe-review">
            {recipe.map((r, i) => {
              return <p>{r.Recipe}</p>;
            })}
            <p>Peen</p>
          </div>
        )}
        {showRecipes === true && (
          <div className="recipe-titles">
            {selectedRecipe.map((r, i) => {
              return (
                <div
                  key={`recipe_id_${r.id}_${i}`}
                  className={`recipe-titles-items`}
                  onClick={() => getRecipe(r.Cuisine)}
                >
                  {/* <Link
                          to="/Reviews"
                          state={{
                            restaurant: r.Restaurant,
                            cuisine: r.Cuisine,
                            city: r.City,
                            id: r.Id,
                          }}
                        > */}
                  <div className="recipe-img">
                    <img
                      src={r.Image}
                      alt={`${r.Recipe}-image`}
                      height={100}
                      width={200}
                    />
                  </div>
                  <div className="recipe-stuff">
                    <h1
                      className={`title_of_recipe_${r.id}`}
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
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipes;
