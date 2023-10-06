import "../App.css";
import ExampleOne from "./PropsPractice/ExampleOne";
import Rocky from "../images/Rocky-Mountain-National-Park-Colorado.png";
import DateObject from "react-date-object";
import jsonReviewData from "../Reviews/foodReviewJS";
import jsonRecipeData from "../Reviews/foodRecipesJS.js";
import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import FoodMap from "./FoodMap";

function Home() {
  //let date = new Date().toLocaleString("en-US", { month: "long" })
  const [resties, setResties] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const baseUrlRestaurants = "/Restaurants";
  const baseUrlRecipes = "/Recipes";


  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }


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
        <div className="noms-home-intro-content">
          <p>
            Join me in my journey across Colorado as I compile a roadmap of some
            of the best Restaurants this beautiful state has to offer. Also I'll
            post some of my favorite recipes.
          </p>
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
                  to={`${baseUrlRestaurants}/${p.Cuisine}/${p.Restaurant}`}
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
                  <img
                    src={p?.ImageOutside}
                    alt={`${p?.Restaurant}-food-image${p.id}`}
                    height={200}
                    width={350}
                  />
                  <p>{p?.Cuisine}</p>
                  <p>{p?.City}</p>
                </Link>
              </div>
            );
          })}
        </div>
        
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
                  to={`${baseUrlRecipes}/${p.Cuisine}/${p.Recipe}`}
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
                    height={200}
                    width={350}
                  />
                  <p>{p?.Description}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Home;
