import "../App.css";
import ExampleOne from "./PropsPractice/ExampleOne";
import Rocky from "../images/Rocky-Mountain-National-Park-Colorado.png";
import DateObject from "react-date-object";
import jsonReviewData from "../Reviews/foodReviewJS";
import jsonRecipeData from "../Reviews/foodRecipes.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  //let date = new Date().toLocaleString("en-US", { month: "long" })
  const [resties, setResties] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    GetLatestReviews();
    GetLatestRecipes();
  }, []);

  const GetLatestReviews = () => {
    const restaurantArray = [];

    restaurantArray.push(...jsonReviewData);

    restaurantArray.sort((a, b) => {
      return new Date(b.Date) - new Date(a.Date);
    });

    restaurantArray.length = 3;
    const rev = restaurantArray;
    setResties(rev);
  };

  const GetLatestRecipes = () => {
    const recipeArray = [];

    recipeArray.push(...jsonRecipeData);
    recipeArray.length = 3;
    setRecipes(recipeArray);
  };

  console.log(resties);
  return (
    <div className="noms-home-container">
      <div className="noms-image-container"></div>
      <div className="nom-container-one">
        <div className="noms-home-intro-content-left">
          <p>
            Join me in my journey across Colorado as I compile a roadmap of some
            of the best Restaurants this beautiful state has to offer. Also I'll
            post recipes.
          </p>
        </div>
        <div className="noms-home-intro-content-right">
          <p>shitter</p>
        </div>
      </div>
      <div className="noms-container-two">
        <div className="restaurant-content-title">
          <h2>Latest Reviews</h2>
        </div>
        <div className="restaurant-content">
          {resties?.map((p, q) => {
            return (
              <div
                key={`restaurant_id_${p?.Id}_${q}`}
                className={`home-restaurant-items`}
              >
                <Link
                  className="rest-links"
                  // to={`/Reviews/${r.Restaurant}`}
                  to={`/Reviews`}
                  state={{
                    restaurant: p.Restaurant,
                    cuisine: p.Cuisine,
                    city: p.City,
                    id: p.Id,
                    outsidePic: p.ImageOutside,
                    foodPic: p.FoodImages,
                    blogIntro: p.BlogIntro,
                    blogText: p.BlogText,
                  }}
                >
                  <h3>{p?.Restaurant}</h3>
                  <p>{p?.Cuisine}</p>
                  <p>{p?.City}</p>
                  <img
                    src={p?.ImageOutside}
                    alt={`${p?.Restaurant}-food-image${p.id}`}
                    height={200}
                    width={350}
                  />
                  <p>{p?.BlogIntro}</p>
                </Link>
              </div>
            );
          })}
        </div>
        {/* <div className="restaurant-two">
          <h3>{restaurantArray[1].Restaurant}</h3>
          <p>{restaurantArray[1].City}</p>
          <img
            src={restaurantArray[1].ImageOutside}
            alt={`${restaurantArray[1].Restaurant}-food-image${restaurantArray[1].id}`}
            height={100}
            width={200}
          />
          <p>{restaurantArray[1].BlogIntro}</p>
        </div>
        <div className="restaurant-three">
          <h3>{restaurantArray[2].Restaurant}</h3>
          <p>{restaurantArray[2].City}</p>
          <img
            src={restaurantArray[2].ImageOutside}
            alt={`${restaurantArray[2].Restaurant}-food-image${restaurantArray[2].id}`}
            height={100}
            width={200}
          />
          <p>{restaurantArray[2].BlogIntro}</p>
        </div> */}
      </div>
      <div className="noms-container-three">
        <div className="recipe-content-title">
          <h2>Latest Recipes</h2>
        </div>
        <div className="recipe-content">
          {recipes?.map((p, q) => {
            return (
              <div
                key={`recipe_id_${p?.Id}_${q}`}
                className={`home-recipe-items`}
              >
                <Link
                  className="recipe-links"
                  to="/Recipe"
                  state={{
                    recipe: p.Recipe,
                    cuisine: p.Cuisine,
                    ingredients: p.Ingredients,
                    image: p.Image,
                    instructions: p.Instructions,
                  }}
                >
                  <h3>{p.Recipe}</h3>
                  <p>{p.Cuisine}</p>
                  <img
                    src={p?.Image}
                    alt={`${p?.Image}-food-image${p?.id}`}
                    height={100}
                    width={200}
                  />
                  <p>{p?.Description}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div>{/* <ExampleOne /> */}</div>
    </div>
  );
}

export default Home;
