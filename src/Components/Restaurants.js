import React from "react";
import styles from "./Restaurants.module.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
/* == IMPORT RAW DATA (mimicking fetch to DB)== */
import jsonReviewData from "../Reviews/foodReviewJS";
import $ from "jquery";

/**
 * @baseUrlRestaurants is needed to maintain correct structure of url in <Link to={} />
 * note: the `/` in front is necessary otherwise Link to{} will just keep elongating the URL
 */
const baseUrlRestaurants = "/Restaurants";

const Restaurants = () => {
  /**
   * @params is set in AppRouter.js see excerpt below:
   *      <Route path="/Restaurants/*" element={<Restaurants />}></Route>
          <Route path="/Restaurants/:cuisine/*" element={<Restaurants />}></Route>
          <Route path="/Restaurants/:cuisine/:restaurant/*" element={<Restaurants />}></Route>

   * It may be overkill, but i had to add every Route that could lead to Restaurants
    Notice how the only state in the Restaurant Component is using the hook useParams().
    no other state is required as the Link elements set the url, and @params now has access to cuisine
    and restaurants respectively from the url

    params keys  'cuisine' and 'restaurant' are set in AppRouter by using the ':' in front of the variable name
    
   */
  const imageZoom = () => {

  }

  const params = useParams();

  return (
    <div className="restaurant-content">
      <RestaurantCuisineFilter
        cuisineList={removeDuplicatesByKey(jsonReviewData, "Cuisine")}
        cuisine={params?.cuisine}
      />

      {!params.restaurant ? (
        <RestaurantListByCuisine
          restaurantListByCuisine={jsonReviewData.filter(
            (p) => p.Cuisine === params.cuisine
          )}
          cuisine={params?.cuisine}
        />
      ) : (
        <RestaurantReview
          restaurant={jsonReviewData.find(
            (p) => p.Restaurant === params.restaurant
          )}
        />
      )}
    </div>
  );
};

export default Restaurants;

/** == DUMB CHILD COMPONENTS ===
 * They Only receive props. There is no state inside them
 */

const RestaurantCuisineFilter = ({ cuisineList, cuisine }) => {
  cuisineList.sort((a, b) => {
    let textA = a.Cuisine.toUpperCase();
    let textB = b.Cuisine.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  return (
    <div className="restaurant-sideBar">
      <ul>
        {getArray(cuisineList).map((p, i) => (
          <Link to={`${baseUrlRestaurants}/${p.Cuisine}`} key={i}>
            <li
              key={p.Id}
              className={`restaurant-sideBar-buttons ${
                cuisine === p.Cuisine ? styles.activeCuisine : ""
              }`}
            >
              {p.Cuisine}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const RestaurantListByCuisine = ({ restaurantListByCuisine, cuisine }) => {
  return (
    <div className="restaurant-page-content">
      {!cuisine ? (
        <RestaurantList />
      ) : (
        <>
          {getArray(restaurantListByCuisine).map((p, i) => {
            return (
              <div
                key={`restaurant_id_${p.Id}_${i}`}
                className={`restaurant-titles-items`}
              >
                <Link
                  key={i}
                  to={`${baseUrlRestaurants}/${cuisine}/${p.Restaurant}`}
                >
                  <div className="rest-img">
                    <img
                      src={`${p.ImageOutside}`}
                      alt={`${p.Restaurant}-image`}
                      // height={125}
                      // width={225}
                    />
                  </div>
                  <div className="rest-stuff">
                    <h1
                      className={`title_of_rest_${p.id}`}
                      style={{ color: "#002868", marginBottom: "5px" }}
                    >
                      {p.Restaurant}
                    </h1>
                    <hr className="rest-line-divider" />
                    <p>{p.City}</p>
                    <p>{p.Cuisine}</p>
                    <p>{p.BlogIntro}</p>
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

const RestaurantList = () => {
  return (
    <>
      {getArray(jsonReviewData).map((p, i) => {
        return (
          <div
            key={`restaurant_id_${p.Id}_${i}`}
            className={`restaurant-titles-items`}
          >
            <Link
              key={i}
              to={`${baseUrlRestaurants}/${p.Cuisine}/${p.Restaurant}`}
            >
              <div className="rest-img">
                <img
                  src={`${p.ImageOutside}`}
                  alt={`${p.Restaurant}-image`}
                  // height={125}
                  // width={225}
                />
              </div>
              <div className="rest-stuff">
                <h1
                  className={`title_of_rest_${p.id}`}
                  style={{ color: "#002868", marginBottom: "5px" }}
                >
                  {p.Restaurant}
                </h1>
                <hr className="rest-line-divider" />
                <p>{p.City}</p>
                <p>{p.Cuisine}</p>
                <p>{p.BlogIntro}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

const RestaurantReview = ({ restaurant }) => {
  return (
    <div className="rest-review-content">
      <h1>{restaurant?.Restaurant}</h1>
      <hr className="rest-line-divider" />

      <div className="restaurant-image">
        <img src={restaurant?.ImageOutside} alt={restaurant?.Restaurant} />
      </div>
      <p>{restaurant?.BlogIntro}</p>
      <div>
          {restaurant?.FoodImages?.map((x, i) => {
            {
              // console.log({ test: x });
              // $(document).ready(function () {
              //   $(".allFoodImages").click(function () {
              //     this.requestFullscreen();
              //   });
              // });

              return (
                // <div>
                //     {x}
                // </div>
                <img
                  key={`${i}_imagesReturned`}
                  src={x}
                  alt={`${restaurant?.Restaurant}-food-image${x}`}
                  // height={200}
                  // width={350}
                  className="allFoodImages"
                  onClick={(e) => e.target.classList.toggle("allFoodImages-clicked")}
                />
              );
            }
          })}
          {/* <img
            src={details?.foodPic[0]}
            alt={`${details?.restaurant}-food-image${details?.id}`}
            height={200}
            width={350}
          /> */}
        </div>
    </div>
  );
};

/* === JS HELPERS === */
function getArray(data) {
  return Array.isArray(data) === true ? data : [];
}

function removeDuplicatesByKey(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}
