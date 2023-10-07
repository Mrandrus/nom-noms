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
    case 1:
      return <DrunkenNoodles recipe={recipeId.props} />
    case 2:
      return <Gyro />;
    case 3:
      return <Lasagna recipe={recipeId.props} />;
    case 4:
      return <ShrimpScampi />
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
      <h3>Coming Soon</h3>
    </div>
  );
};

const ShrimpScampi = () => {
  return (
    <div>
      <h3>Coming Soon</h3>
    </div>
  )
}

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
        {getArray(
          recipe?.StepImages.map((p, q) => {
            return <img src={p} key={q} alt={NomNomsLogo} />;
          })
        )}
      </div>
    </div>
  );
};

const DrunkenNoodles = ({ recipe }) => {
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
          Heat wok, add sesame oil. Mince 4 cloves of garlic, 4 to 5 thai
          chilis, and ginger. Chop the white ends of the green onion, and add to
          wok with the garlic, chilis, and ginger. Stir constantly until
          fragrant, normally a few minutes. Dice chicken and add to wok. Add
          around a teaspoon of fish sauce.
        </p>
        <p>
          In small mixing bowl, add soy sauce, oyster sauce, sesame oil, and
          brown sugar. Mix well. I like to add some of that liquid to the wok
          and let the sauce thicken and coat the chicken thoroughly.
        </p>
        <p>
          Boil rice noodles in salted water for duration instructed on package.
        </p>
        <p>
          Add noodles, the rest of the soy sauce mixture, the chopped greens of
          the green onion, and the thai basil. I recommend tearing the thai
          basil into small pieces and then tossing them in. Mix everything
          together throughly and serve with squeezed lime over top.
        </p>
      </div>
      <div className="recipe-instructions-images">
        {getArray(
          recipe?.StepImages.map((p, q) => {
            return <img src={p} key={q} alt={NomNomsLogo} />;
          })
        )}
      </div>
    </div>
  );
};
