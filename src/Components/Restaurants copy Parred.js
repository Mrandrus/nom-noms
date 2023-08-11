import jsonReviewData from '../Reviews/foodReviewJS'
import React, { Component, useEffect, useState } from 'react'
import '../App.css'
import RestaurantReview from './RestaurantReview'
import Reviews from './Reviews'
import { Outlet, useAsyncError, useLocation } from 'react-router-dom'
import defaultPhoto from '../images/coNomNomsLogo.png'
import useUrlState from '@ahooksjs/use-url-state'
import { BrowserRouter, Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import UpperContent from './UpperContent'

const Restaurants = () => {
  //const defaultDatas = [...jsonReviewData.Restaurant]
  //console.log("cheese", defaultDatas)
  const loc = useLocation()
  const navigate = useNavigate()

  const [restaurantsSelected, setRestaurantsSelected] = useState([jsonReviewData[0]])
  const [review, setReview] = useState([])
  const [showReview, setShowReview] = useState(false)
  const [showRest, setShowRest] = useState(false)
  // const [urlPage, setUrlPage] = useUrlState(restaurantsSelected.Cuisine);
  const [hist, setHist] = useState([])

  useEffect(() => {
    //getReview(restaurantsSelected)
    setHist(prev => ({ ...prev, restaurantsSelected }))
  }, [restaurantsSelected])

  useEffect(() => {}, [review])

  const removeDupes = (arr, key) => {
    const data = [...new Map(arr.map(item => [item[key], item])).values()]
    return data
  }

  const findDupes = (arr, key) => {
    arr.filter((keys, index) => arr.indexOf(key) !== index)
  }

  const count = {}
  jsonReviewData.forEach(element => {
    count[element.Cuisine] = (count[element.Cuisine] || 0) + 1
  })

  console.log(count)

  const cuisineList = removeDupes(jsonReviewData, 'Cuisine')

  cuisineList.sort((a, b) => {
    let textA = a.Cuisine.toUpperCase()
    let textB = b.Cuisine.toUpperCase()
    return textA < textB ? -1 : textA > textB ? 1 : 0
  })

  function RestaurantData(props) {
    return <li onClick={e => console.log(e.target.value)}>{props.Restaurant}</li>
  }

  function ChooseData() {
    const listItems = jsonReviewData.map(object => (
      <RestaurantData key={object.Id.toString()} value={object} />
    ))
    return (
      <ul>
        <li>{listItems.Cuisine}</li>
      </ul>
    )
  }

  console.log(jsonReviewData)
  console.log('Cuisine Array', ChooseData())

  function getRestaurants(cuisine) {
    console.log('Passed cuisine', cuisine)
    const arr = []

    jsonReviewData.forEach((r, i) => {
      if (r.Cuisine === cuisine) {
        arr.push(r)
      }
    })

    //console.log("push version", arr);
    setShowRest(true)
    setShowReview(false)
    setRestaurantsSelected(arr)

    //updateUrl(cuisine)
  }

  function getReview(id) {
    console.log('passed review id', id)
    const array = []

    jsonReviewData.forEach((a, b) => {
      if (a.Id === id) {
        array.push(a)
      }
    })
    setRestaurantsSelected(array)
    setShowRest(false)
    setShowReview(true)
    console.log('Look at this man', array)
    setReview(array)
  }

  /* == CHILD COMPONENTS == */
  const SpacingLeft = () => <div className="restaurant-space-left" />
  const SpacingRight = () => <div className="restaurant-space-right" />

  const RestaurantCuisineFilter = () => (
    <div className="restaurant-sideBar">
      <ul>
        {cuisineList.map((p, i) => (
          <Link to="/Restaurants" key={i}>
            <li key={p.Id}>
              <button
                className="restaurant-sideBar-buttons"
                onClick={() => getRestaurants(p.Cuisine)}
              >
                {p.Cuisine}
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )

  const RestaurantTitleCard = () => (
    <div className="restaurant-titles">
      {jsonReviewData.map((r, i) => {
        return (
          <div
            key={`restaurant_id_${r.Id}_${i}`}
            className={`restaurant-titles-items`}
            onClick={() => getReview(r.Id)}
          >
            <Link
              className="rest-links"
              to={`/Reviews`}
              state={{
                restaurant: r.Restaurant,
                cuisine: r.Cuisine,
                city: r.City,
                id: r.Id,
                outsidePic: r.ImageOutside,
                foodPic: r.FoodImages,
                blogIntro: r.BlogIntro,
                blogText: r.BlogText,
              }}
            >
              <div className="rest-img">
                <img
                  src={r.ImageOutside}
                  alt={`${r.Restaurant}-image`}
                  height={125}
                  width={225}
                />
              </div>
              <div className="rest-stuff">
                <h1
                  className={`title_of_rest_${r.Id}`}
                  style={{ color: '#002868', marginBottom: '5px' }}
                >
                  {r.Restaurant}
                </h1>
                <hr className="rest-line-divider" />
                <p>{r.City}</p>
                <p>{r.Cuisine}</p>
                <p>{r.BlogIntro}</p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )

  const RestaurantsFilteredbyCuisine = () => (
    <div className="restaurant-titles">
      {restaurantsSelected.map((r, i) => {
        return (
          <div
            key={`restaurant_id_${r.Id}_${i}`}
            className={`restaurant-titles-items`}
            onClick={() => getReview(r.Id)}
          >
            <Link
              className="rest-links"
              to={`/Reviews`}
              state={{
                restaurant: r.Restaurant,
                cuisine: r.Cuisine,
                city: r.City,
                id: r.Id,
                outsidePic: r.ImageOutside,
                foodPic: r.FoodImages,
                blogIntro: r.BlogIntro,
                blogText: r.BlogText,
              }}
            >
              <div className="rest-img">
                <img
                  src={`${r.ImageOutside}`}
                  alt={`${r.Restaurant}-image`}
                  height={125}
                  width={225}
                />
              </div>
              <div className="rest-stuff">
                <h1
                  className={`title_of_rest_${r.id}`}
                  style={{ color: '#002868', marginBottom: '5px' }}
                >
                  {r.Restaurant}
                </h1>
                <hr className="rest-line-divider" />
                <p>{r.City}</p>
                <p>{r.Cuisine}</p>
                <p>{r.BlogIntro}</p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )

  return (
    <>
      <div className="restaurant-content">
        {/* <SpacingLeft /> */}
        <RestaurantCuisineFilter />

        <div className="restaurant-page-content">
          {showReview === false && showRest === false && <RestaurantTitleCard />}

          {showRest === true && <RestaurantsFilteredbyCuisine />}
        </div>
        {/* <SpacingRight /> */}
      </div>
      {/* <Routes>
        <Route path="/Restaurants/*" element={<Reviews />}></Route>
        <Route path="/Restaurants/:id" element={<Reviews />}></Route>
        <Route path="/Reviews/*" element={<Reviews />}></Route>
        <Route path="/Reviews/:id" element={<Reviews />}></Route>
      </Routes> */}
    </>
  )
}

export default Restaurants

const RestaurantReviewDNE = ({ show, review }) => {
  /* Currently does not seem to matter if it ex.  */
  return (
    show === true && (
      <div className="restaurant-review">
        <Link to={`/Reviews/${review}`}>
          <Reviews vals={review} />
        </Link>
      </div>
    )
  )
}
