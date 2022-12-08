import jsonReviewData from "../Reviews/foodReview.json"
import React, { Component, useState } from "react";
import "../App.css";

const RestaurantsSideBar = () => {

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

  const [blogTitles, setBlogTitles] = useState([""])
  //setBlogTitles = JSON.parse(jsonReviewData.Restaurant)


  const removeDupes = (arr, key) => {
    const data = [...new Map(arr.map(item=> [item[key], item])).values()]
    return data
  }

  const findDupes = (arr, key) => {
    arr.filter((keys, index) => arr.indexOf(key) !== index)
  }


 const count = {}
 jsonReviewData.forEach(element => {
    count[element.Cuisine] = (count[element.Cuisine] || 0) + 1
 });


 console.log(count)

  const arr1 = removeDupes(jsonReviewData, 'Cuisine')
  const dupies = findDupes(jsonReviewData, 'Cuisine')
  //console.log("Poops", dupies)

  arr1.sort((a, b) => {
    let textA = a.Cuisine.toUpperCase()
    let textB = b.Cuisine.toUpperCase()
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
  })
  //const arr2 = logDupes(jsonReviewData, 'Cuisine')
  // for (let i = 0; i < arr1.length; i++) {
  //   arr1[i] = arr1.push(count[i])
  // }

  function RestaurantData(props) {
    return <li onClick={(e) => console.log(e.target.value)}>{props.Restaurant}</li>
  }

  function ChooseData() {
    const listItems = jsonReviewData.map((object) =>
    <RestaurantData key={object.Id.toString()} value={object} />
  )
    return (
      <ul>
        <li>{listItems.Cuisine}</li>
      </ul>
    )
}

function showResties(props) {
  const obby = []
  return (
    <div className="content">
      <ul>
        <li>{props.Cuisine}</li>
      </ul>
    </div>
  ) 
}


  console.log(jsonReviewData)
  console.log("Cuisine Array", ChooseData())

    return (
      <div className="restaurant-content">
        <div className="restaurant-sideBar">
          <ul>
            {arr1.map((p) => (
              <li key={p.Id}>
                <a>{p.Cuisine}</a>
              </li>
            ))}
          </ul>
          <p>here</p>
        </div>
        <div className="restaurant-titles">
          <p>pee</p>
        </div>
      </div>
    );
  
}


export default RestaurantsSideBar;