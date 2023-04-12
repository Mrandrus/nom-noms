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
  const recipeArray = [];

  useEffect(() => {
    GetLatestReviews();
  }, []);

  const GetLatestReviews = () => {
    const restaurantArray = [];

    for (let i = 0; i < jsonReviewData.length; i++) {
      restaurantArray.push(jsonReviewData[i]);
    }

    restaurantArray.sort((a, b) => {
      return new Date(b.Date) - new Date(a.Date);
    });
    restaurantArray.length = 3;
    const rev = restaurantArray;
    setResties(rev);
  };

  const GetLatestRecipes = () => {
    for (let i = 0; i < jsonRecipeData.length; i++) {
      recipeArray.push(
        jsonRecipeData[Math.floor(Math.random() * jsonRecipeData.length)]
      );
    }
  };
  GetLatestRecipes();
  //GetLatestReviews();

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
        <div className="restaurant-content">
          {resties?.map((p, q) => {
            return (
              <div
                key={`restaurant_id_${p?.Id}_${q}`}
                className={`home-restaurant-items`}
              >
                <h3>{p?.Restaurant}</h3>
                <p>{p?.City}</p>
                <img
                  src={p?.ImageOutside}
                  alt={`${p?.Restaurant}-food-image${p.id}`}
                  height={200}
                  width={350}
                />
                <p>{p?.BlogIntro}</p>
              </div>
              // <Link
              //   className="home-rest-links"
              //   to="/Reviews"
              //   state={{
              //     restaurant: p.Restaurant,
              //     cuisine: p.Cuisine,
              //     city: p.City,
              //     id: p.Id,
              //     outsidePic: p.ImageOutside,
              //     foodPic: p.FoodImages,
              //     blogIntro: p.BlogIntro,
              //     blogText: p.BlogText,
              //   }}
              // >
              // </Link>
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
        <div className="recipe-one"></div>
        <div className="recipe-two"></div>
        <div className="recipe-three">
          <h3>{recipeArray[2].Recipe}</h3>
          <p>{recipeArray[2].Cuisine}</p>
          <img
            src={recipeArray[2].Image}
            alt={`${recipeArray[2].Image}-food-image${recipeArray[2].id}`}
            height={100}
            width={200}
          />
          <p>{recipeArray[2].Description}</p>
        </div>
      </div>
      <div>{/* <ExampleOne /> */}</div>
    </div>
  );
}

export default Home;
