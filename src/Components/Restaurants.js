import React, { useState } from 'react'
import styles from './Restaurants.module.css'
/* == REACT ROUTER DOM == */
import { BrowserRouter, Router, Routes, Route, Link, useNavigate } from 'react-router-dom'

/* == IMPORT RAW DATA == */
import jsonReviewData from '../Reviews/foodReviewJS'
console.log('jsonReviewData', jsonReviewData)
const cuisineList = removeDuplicatesByKey(jsonReviewData, 'Cuisine')

const Restaurants = () => {
  const [activeCuisine, setActiveCuisine] = useState(null)
  const [activeRestaurant, setActiveRestaurant] = useState(null)
  const [history, setHistory] = useState([])
  console.log('history', history)

  const restaurantListByCuisine = jsonReviewData.filter(p => p.Cuisine === activeCuisine)

  return (
    <div className={styles.restaurantsContainer}>
      <RestaurantCuisineFilter {...{ cuisineList, activeCuisine, selectCuisine }} />
      {activeRestaurant ? (
        <RestaurantReview restaurant={jsonReviewData.find(p => p.Restaurant === activeRestaurant)} />
      ) : (
        <RestaurantListByCuisine {...{ restaurantListByCuisine, selectRestaurant }} />
      )}
    </div>
  )

  /* == HELPERS for Restaurants Component ===== */
  function selectCuisine(cuisine) {
    setActiveCuisine(cuisine)
    setActiveRestaurant(null)
    setHistory(previousHistory => [...previousHistory, cuisine])
  }
  function selectRestaurant(restaurant) {
    setActiveRestaurant(restaurant)
    setHistory(prev => [...prev, restaurant])
  }
}

export default Restaurants

/**
 *
 *
 * ===================== CHILD COMPONENTS =====================
 */

const RestaurantCuisineFilter = props => {
  const { cuisineList, activeCuisine, selectCuisine } = props
  return (
    <div className="restaurant-sideBar">
      <ul>
        {getArray(cuisineList).map((p, i) => (
          <Link to="/Restaurants" key={i}>
            <li key={p.Id} className={`${activeCuisine === p.Cuisine ? styles.activeCuisine : ''}`}>
              <button className="restaurant-sideBar-buttons" onClick={() => selectCuisine(p.Cuisine)}>
                {p.Cuisine}
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

const RestaurantListByCuisine = props => {
  const { restaurantListByCuisine, selectRestaurant } = props
  return (
    <div>
      <h1>RestaurantListByCuisine</h1>
      <div className="restaurant-list">
        {getArray(restaurantListByCuisine).map((p, i) => {
          return (
            <button key={i} onClick={() => selectRestaurant(p.Restaurant)}>
              <h2>{p.Restaurant}</h2>
              <p>{p.BlogIntro}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

const RestaurantReview = props => {
  const { restaurant } = props
  return (
    <div>
      <h1>Restaurant Review</h1>
      <p>{restaurant?.BlogIntro}</p>
    </div>
  )
}

/* === HELPERS === */
function getArray(data) {
  return Array.isArray(data) === true ? data : []
}

function removeDuplicatesByKey(arr, key) {
  const data = [...new Map(arr.map(item => [item[key], item])).values()]
  return data
}
