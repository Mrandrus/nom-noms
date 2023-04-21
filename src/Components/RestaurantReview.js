import { useState } from 'react'
import '../App.css'
import { useParams, Routes, Router } from 'react-router-dom'

const RestaurantReview = (props) => {
    const [restaurant, setRestaurant] = useState([])
    const [cuisine, setCuisine] = useState([])
    const [review, setReview] = useState([])
    const param = useParams()

    function fetchReview() {
     //Maybe do something here 
     //setReview(props.detes)
  
    }
    
    return (
        <div>
            <p></p>
            <p>this is a test of {param}</p>
        </div>
    )
}

export default RestaurantReview