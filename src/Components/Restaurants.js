import jsonReviewData from "../Reviews/foodReview.json";
import React, { Component, useEffect, useState } from "react";
import "../App.css";
import RestaurantReview from "./RestaurantReview";
import Reviews from "./Reviews";
import { useAsyncError, useLocation } from "react-router-dom";
import defaultPhoto from "../images/coNomNomsLogo.png";
import useUrlState from "@ahooksjs/use-url-state";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

const Restaurants = () => {
  //const defaultDatas = [...jsonReviewData.Restaurant]
  //console.log("cheese", defaultDatas)
  const loc = useLocation();

  const [restaurantsSelected, setRestaurantsSelected] = useState([]);
  const [review, setReview] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const [showRest, setShowRest] = useState(false);
  const [urlPage, setUrlPage] = useUrlState(restaurantsSelected.Cuisine);

  useEffect(() => {
    //getReview(restaurantsSelected)
  }, [restaurantsSelected]);
  //const [count, setCount] = useState(0)
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         jsonReviewData: [],
  //     }
  // }
  useEffect(() => {}, [review]);
  // componentDidMount() {
  //     fetch("../Reviews/foodReview.json").then((res) => res.json())
  //     .then((data) => {
  //         console.log("this data from json: ", data)

  //         this.setState({ jsonReviewData: JSON.stringify(data) }, () => {
  //             alert(this.state.hugeText)
  //         });
  //     })
  // }

  const removeDupes = (arr, key) => {
    const data = [...new Map(arr.map((item) => [item[key], item])).values()];
    return data;
  };

  const findDupes = (arr, key) => {
    arr.filter((keys, index) => arr.indexOf(key) !== index);
  };

  const count = {};
  jsonReviewData.forEach((element) => {
    count[element.Cuisine] = (count[element.Cuisine] || 0) + 1;
  });

  console.log(count);

  const cuisineList = removeDupes(jsonReviewData, "Cuisine");
  const dupies = findDupes(jsonReviewData, "Cuisine");
  //console.log("Poops", dupies)

  cuisineList.sort((a, b) => {
    let textA = a.Cuisine.toUpperCase();
    let textB = b.Cuisine.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  function RestaurantData(props) {
    return (
      <li onClick={(e) => console.log(e.target.value)}>{props.Restaurant}</li>
    );
  }

  function ChooseData() {
    const listItems = jsonReviewData.map((object) => (
      <RestaurantData key={object.Id.toString()} value={object} />
    ));
    return (
      <ul>
        <li>{listItems.Cuisine}</li>
      </ul>
    );
  }

  console.log(jsonReviewData);
  console.log("Cuisine Array", ChooseData());

  function getRestaurants(cuisine) {
    console.log("Passed cuisine", cuisine);
    const arr = [];

    jsonReviewData.forEach((r, i) => {
      if (r.Cuisine === cuisine) {
        arr.push(r);
      }
    });

    console.log("push version", arr);
    setShowRest(true);
    setShowReview(false);
    setRestaurantsSelected(arr);
    // setUrlPage({cuisine})
    // console.log("url page", urlPage)
  }

  function getReview(id) {
    console.log("passed review id", id);
    const array = [];

    jsonReviewData.forEach((a, b) => {
      if (a.Id === id) {
        array.push(a);
      }
    });
    setRestaurantsSelected(array);
    setShowRest(false);
    setShowReview(true);
    console.log("Look at this man", array);
    setReview(array);
  }

  return (
    <>
      <div className="restaurant-content">
        <div className="restaurant-sideBar">
          <ul>
            {cuisineList.map((p, k) => (
              <li key={p.Id}>
                <button
                  className="restaurant-sideBar-buttons"
                  onClick={() => getRestaurants(p.Cuisine)}
                >
                  {p.Cuisine}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="restaurant-page-content">
          {/* <h2>Cuisine: {`${urlPage}`}</h2> */}

          {showReview === false && showRest === false && (
            <div className="restaurant-titles">
              {jsonReviewData.map((r, i) => {
                return (
                  <div
                    key={`restaurant_id_${r.Id}_${i}`}
                    className={`restaurant-titles-items`}
                    onClick={() => getReview(r.Id)}
                  >
                    <Link
                      to="/Reviews"
                      state={{
                        restaurant: r.Restaurant,
                        cuisine: r.Cuisine,
                        city: r.City,
                        id: r.Id,
                        outsidePic: r.ImageOutside,
                        foodPic: r.FoodImages,
                        blogIntro: r.BlogIntro,
                      }}
                    >
                      <div className="rest-img">
                        <img
                          src={r.ImageOutside}
                          alt={`${r.Restaurant}-image`}
                          height={100}
                          width={200}
                        />
                      </div>
                      <div className="rest-stuff">
                        <h1
                          className={`title_of_rest_${r.Id}`}
                          style={{ color: "#002868", marginBottom: "5px" }}
                        >
                          {r.Restaurant}
                        </h1>
                        <hr className="rest-line-divider" />
                        <a>{r.City}</a>
                        <br />
                        <a>{r.Cuisine}</a>
                        <br />
                        {/* </Link> */}
                        <a>{r.BlogIntro}</a>
                        <br />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

          {showReview === true && (
            <div className="restaurant-review">
              <Link to="/Reviews">
                <Reviews vals={review} />
              </Link>
            </div>
          )}
          {showRest === true && (
            <div className="restaurant-titles">
              {restaurantsSelected.map((r, i) => {
                return (
                  <div
                    key={`restaurant_id_${r.id}_${i}`}
                    className={`restaurant-titles-items`}
                    onClick={() => getReview(r.Id)}
                  >
                    <Link
                      // to={`/Reviews/${r.Restaurant}`}
                      to={`/Reviews`}
                      state={{
                        restaurant: r.Restaurant,
                        cuisine: r.Cuisine,
                        city: r.City,
                        id: r.Id,
                        outsidePic: r.ImageOutside,
                        foodPic: r.FoodImages,
                        blogIntro: r.BlogIntro,
                      }}
                    >
                      <div className="rest-img">
                        <img
                          src={r.ImageOutside}
                          alt={`${r.Restaurant}-image`}
                          height={100}
                          width={200}
                        />
                      </div>
                      <div className="rest-stuff">
                        <h1
                          className={`title_of_rest_${r.id}`}
                          style={{ color: "#002868", marginBottom: "5px" }}
                        >
                          {r.Restaurant}
                        </h1>
                        <hr className="rest-line-divider" />
                        <a>{r.City}</a>
                        <br />
                        <a>{r.Cuisine}</a>
                        <br />
                        {/* </Link> */}
                        <a>{r.BlogIntro}</a>
                        <br />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Routes>
        <Route path="/Reviews/*" element={<Reviews />}></Route>
      </Routes>
    </>
  );
};

export default Restaurants;
// export default () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Restaurants />} />
//       <Route path="/Restaurants/:id" element={<Restaurants />} />
//     </Routes>
//   );
// };
