import "../App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import jsonRecipeData from "../Reviews/foodRecipes.json";

function RecipeText(props) {
  // const location = useLocation();
  // let details = location.state;
  const [recipeId, setRecipeId] = useState({})

  useEffect(() => {
    setRecipeId(props)
  }, [props])

  console.log("recipe data,", props)

  switch (recipeId.props?.Id) {
    case 2:
      return <Gyro />;
    case 3:
      return <Lasagna />;
    default:
      return "";
  }
}

export default RecipeText;

const Gyro = () => {
  return (
    <div>
      <p>I'll have Gyro instruction here</p>
    </div>
  )
}

const Lasagna = () => {
  return (
    <div>
      <p>I'll have Lasagna instruction here</p>
    </div>
  )
}