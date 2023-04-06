import { useState } from 'react'
import '../App.css'

const RestaurantReview = (props) => {
    const [restaurant, setRestaurant] = useState([])
    const [cuisine, setCuisine] = useState([])
    const [review, setReview] = useState([])

    function fetchReview() {
     //Maybe do something here 
     setReview(props.detes)
  
    }
    
    return (
        <div>
            <p></p>
            <p>this is a test of </p>
        </div>
    )
}

export default RestaurantReview