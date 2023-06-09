import React, { useState } from 'react'
import styles from './Restaurants.module.css'
/* == REACT ROUTER DOM == */
import { BrowserRouter, Router, Routes, Route, Link, useNavigate } from 'react-router-dom'

/* == IMPORT RAW DATA == */
import jsonReviewData from '../Reviews/foodReviewJS'

const Restaurants = () => {
  const [activeCuisine, setActiveCuisine] = useState(null)
  const cuisineList = removeDuplicatesByKey(jsonReviewData, 'Cuisine')
  return (
    <div className={styles.restaurantsContainer}>
      <RestaurantCuisineFilter {...{ cuisineList, activeCuisine, setActiveCuisine }} />
      <RestaurantListByCuisine />
    </div>
  )
}

export default Restaurants

/**
 *
 *
 * ===================== CHILD COMPONENTS =====================
 */

const RestaurantCuisineFilter = props => {
  const { cuisineList, activeCuisine, setActiveCuisine } = props
  return (
    <div className="restaurant-sideBar">
      <ul>
        {getArray(cuisineList).map((p, i) => (
          <Link to="/Restaurants" key={i}>
            <li
              key={p.Id}
              className={`${activeCuisine === p.Cuisine ? styles.activeCuisine : ''}`}
            >
              <button
                className="restaurant-sideBar-buttons"
                onClick={() => setActiveCuisine(p.Cuisine)}
              >
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
  const { restaurantListh, activeCuisine } = props
  return (
    <div>
      <h1>RestaurantListByCuisine</h1>
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
