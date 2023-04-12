import RestaurantReview from "./RestaurantReview"
import jsonReviewData from "../Reviews/foodReview.json"
import "../App.css"
//import rev from "../Reviews/HenrysReview.html";
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Restaurants from "./Restaurants"
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom"
import { ImageArray } from "./Image"
import $ from 'jquery'

function Reviews(props) {
  //================= Figure out how to set a default state so page doesn't break =================//
  const [restReview, setRestReview] = useState([])
  const [reviewId, setReviewId] = useState("")
  const location = useLocation()
  let details = location.state
  //setRestReview(Restaurant)
  // let Cuisine = 'scerpy'
  //let Restaurant = ''
  let Cuisine = ""
  let City = ""
  let id = ""

  //================= Recieves state values when passed via link just fine and page loads  =================//
  //================= Research '&&' operator here, become more knowledgeable dude =================//
  console.log({details})



  return (
    <>
      <div className="review">
        <h2>{details?.restaurant}</h2>
        <p>{details?.city}</p>
        <p>{details?.blogText}</p>
        <img
          src={details?.outsidePic}
          alt={`${details?.restaurant}-image`}
          height={200}
          width={350}
        />
        <p>{details?.blogIntro}</p>
        <div>
          {details?.foodPic?.map((x, i) => {
            {
              console.log({ test: x })
              $(document).ready(function(){$(".allFoodImages").click(function(){this.requestFullscreen()})});

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
              )
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
    </>
  )
}

export default Reviews
