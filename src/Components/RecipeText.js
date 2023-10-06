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
import NomNomsLogo from "../images/coNomNomsLogo.png";


function RecipeText(props) {
  // const location = useLocation();
  // let details = location.state;
  const [recipeId, setRecipeId] = useState({});

  useEffect(() => {
    setRecipeId(props);
  }, [props]);

  console.log("recipe data,", props);

  switch (recipeId.props?.Id) {
    // case 2:
    //   return <Gyro />;
    case 3:
      return <Lasagna recipe={recipeId.props} />;
    default:
      return "";
  }
}

export default RecipeText;

////////////////////////// Helpers //////////////////////////
function getArray(data) {
  return Array.isArray(data) === true ? data : [];
}

const Gyro = () => {
  return (
    <div>
      <p>I'll have Gyro instruction here</p>
    </div>
  );
};

const Lasagna = ({ recipe }) => {
  return (
    <div>
      <div className="recipe-ingredients">
        <h3>Ingredients</h3>
        <ul>
          {getArray(recipe?.Ingredients).map((p, q) => {
            return <li key={q}>{p}</li>;
          })}
        </ul>
      </div>
      <div className="recipe-ingredients-image">
        <img src={recipe.IngredientsImage} alt={`${recipe.Recipe}-image`} />
      </div>
      <div className="recipe-instructions">
        <p>
          In dutch oven or pot, cook ground beef and sausage to browning. Remove
          meat. Add chopped yellow onion and garlic. Cook for a couple minutes,
          stirring consistently. Add Tomato sauce, fill one of the empty cans
          with water and add to pot. Add cooked meat back to sauce, and add
          salt, pepper, italian seasoning. Simmer for 2-3 hours.
        </p>
        <p>
          Bring large pot of salted water to boil. Add Lasagna noodles to
          boiling water. Cook noodles for half to three quarters of the allotted
          time so noodles are still somewhat firm.
        </p>
        <p>
          In mixing bowl, add ricotta cheese, egg, chopped basil, and chopped
          Italian parsley. Mix well.
        </p>
        <p>
          In deep baking dish, layer bottom of dish with sauce then layer with
          noodles, followed by sauce, ricotta cheese mixture, and tear off
          clumps of fresh mozzarella, distributing them evenly. Add one more
          layer following this formula until you get to the top layer. Spread
          out the rest of your sauce, add more torn mozzarella, grate parmesan,
          and place covered into 375 degree oven for 30 minutes. After that 30
          minutes, remove covering and cook for another 30 minutes. Remove from
          oven and let sit for 20-30 minutes. Now, you may feast.
        </p>
      </div>
      <div className="recipe-instructions-images">
          {getArray(recipe?.StepImages.map((p,q) => {
            return (
              <img src={p} key={q} alt={NomNomsLogo} />
            )
          }))}
      </div>
    </div>
  );
};
