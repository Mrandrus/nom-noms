import React from 'react'
import styles from './Restaurants.module.css'
import { useParams, Link } from 'react-router-dom'
/* == IMPORT RAW DATA (mimicking fetch to DB)== */
import jsonReviewData from '../Reviews/foodReviewJS'

/**
 * @baseUrlRestaurants is needed to maintain correct structure of url in <Link to={} />
 * note: the `/` in front is necessary otherwise Link to{} will just keep elongating the URL
 */
const baseUrlRestaurants = '/Restaurants'

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

/** == DUMB CHILD COMPONENTS ===
 * They Only receive props. There is no state inside them
 */

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
  return [...new Map(arr.map(item => [item[key], item])).values()]
}
