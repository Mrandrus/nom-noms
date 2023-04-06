import jsonReviewData from "../Reviews/foodReview.json";
import React, { Component, useEffect, useState } from "react";
import "../App.css";
import RestaurantReview from "./RestaurantReview";
import Reviews from "./Reviews";
import { Link, useAsyncError, useLocation } from "react-router-dom";
import defaultPhoto from "../images/coNomNomsLogo.png"

const CuisineSidebar = () => {
  //const defaultDatas = [...jsonReviewData.Restaurant]
  //console.log("cheese", defaultDatas)

  const [restaurantsSelected, setRestaurantsSelected] = useState([]);
  const [review, setReview] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const [showRest, setShowRest] = useState(false);

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
      if (r.Cuisine == cuisine) {
        arr.push(r);
      }
    });

    console.log("push version", arr);
    setShowRest(true);
    setShowReview(false);
    setRestaurantsSelected(arr);
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
    <div className="restaurant-content">
      <div className="restaurant-sideBar">
        <ul>
          {cuisineList.map((p) => (
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
        {showReview === true && (
          <div className="restaurant-review">
            {review.map((r, i) => {
              return <p>{r.Restaurant}</p>;
            })}
            <p>Peen</p>
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
                  {/* <Link
                          to="/Reviews"
                          state={{
                            restaurant: r.Restaurant,
                            cuisine: r.Cuisine,
                            city: r.City,
                            id: r.Id,
                          }}
                        > */}
                  <div className="rest-img">
                    <img
                      src={r.Image}
                      alt={`${r.Restaurant}-image`}
                      height={100}
                      width={200}
                    />
                  </div>
                  <div className="rest-stuff">
                    <h1
                      className={`title_of_rest_${r.id}`}
                      style={{color: '#002868', marginBottom: '5px' }}
                    >
                      {r.Restaurant}
                    </h1>
                    <hr className="rest-line-divider"/>
                    <a>{r.City}</a><br />
                    <a>{r.Cuisine}</a><br />
                    {/* </Link> */}
                    <a>{r.City}</a><br />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* <Link to="/Reviews">Reviews</Link> */}
    </div>
  );
};

export default CuisineSidebar;
