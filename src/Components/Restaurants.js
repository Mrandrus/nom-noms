import React from 'react'
import styles from './Restaurants.module.css'

/* == IMPORT RAW DATA == */
import jsonReviewData from '../Reviews/foodReviewJS'

const Restaurants = () => {
  return (
    <div className={styles.restaurantsContainer}>
      <RestaurantCuisineFilter />
      <RestaurantListByCuisine />
    </div>
  )
}

export default Restaurants

const RestaurantCuisineFilter = props => {
  const { cuisines, activeCuisine } = props
  return (
    <div>
      <h1>RestaurantCuisineFilter</h1>
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
