import React from 'react'
import styles from './Restaurants.module.css'
import { useParams, Link } from 'react-router-dom'
/* == IMPORT RAW DATA == */
import jsonReviewData from '../Reviews/foodReviewJS'

const baseUrlRestaurants = '/Restaurants'

const Restaurants = () => {
  const params = useParams()

  return (
    <div className={styles.restaurantsContainer}>
      <RestaurantCuisineFilter
        cuisineList={removeDuplicatesByKey(jsonReviewData, 'Cuisine')}
        cuisine={params?.cuisine}
      />
      {!params.restaurant ? (
        <RestaurantListByCuisine
          restaurantListByCuisine={jsonReviewData.filter(p => p.Cuisine === params.cuisine)}
          cuisine={params?.cuisine}
        />
      ) : (
        <RestaurantReview
          restaurant={jsonReviewData.find(p => p.Restaurant === params.restaurant)}
        />
      )}
    </div>
  )
}

export default Restaurants

/* === DUMB CHILD COMPONENTS === */

const RestaurantCuisineFilter = ({ cuisineList, cuisine }) => {
  return (
    <div className="restaurant-sideBar">
      <ul>
        {getArray(cuisineList).map((p, i) => (
          <Link to={`${baseUrlRestaurants}/${p.Cuisine}`} key={i}>
            <li
              key={p.Id}
              className={`restaurant-sideBar-buttons ${
                cuisine === p.Cuisine ? styles.activeCuisine : ''
              }`}
            >
              {p.Cuisine}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

const RestaurantListByCuisine = ({ restaurantListByCuisine, cuisine }) => {
  return (
    <div>
      <h1>RestaurantListByCuisine</h1>
      <div className="restaurant-list">
        {getArray(restaurantListByCuisine).map((p, i) => {
          return (
            <Link key={i} to={`${baseUrlRestaurants}/${cuisine}/${p.Restaurant}`}>
              <h2>{p.Restaurant}</h2>
              <p>{p.BlogIntro}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

const RestaurantReview = ({ restaurant }) => {
  return (
    <div>
      <h1>Restaurant Review</h1>
      <h2>{restaurant?.Restaurant}</h2>
      <p>{restaurant?.BlogIntro}</p>
    </div>
  )
}

/* === JS HELPERS === */
function getArray(data) {
  return Array.isArray(data) === true ? data : []
}

function removeDuplicatesByKey(arr, key) {
  const data = [...new Map(arr.map(item => [item[key], item])).values()]
  return data
}
