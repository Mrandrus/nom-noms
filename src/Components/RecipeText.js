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
      return <DrunkenNoodles recipe={recipeId.props} />;
    case 2:
      return <Spaghetti recipe={recipeId.props} />;
    case 3:
      return <Lasagna recipe={recipeId.props} />;
    case 4:
      return <ShrimpScampi />;
    case 5:
      return <ChickenGyro recipe={recipeId.props} />;
    case 6:
      return <TomatilloSalsaV1 recipe={recipeId.props} />;
    case 7:
      return <TomatilloSalsaV2 recipe={recipeId.props} />;
    case 8:
      return <FriedChicken recipe={recipeId.props} />;
    default:
      return "";
  }
}

export default RecipeText;

////////////////////////// Helpers //////////////////////////
function getArray(data) {
  return Array.isArray(data) === true ? data : [];
}

const FriedChicken = ({ recipe }) => {
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
      <div
        className={
          !recipe.IngredientsImage
            ? "recipe-ingredients-image"
            : "recipe-ingredients-image-none img"
        }
      >
        <img src={recipe.IngredientsImage} alt={`${recipe.Recipe}-image`} />
      </div>
      <div className="recipe-instructions">
        <p>
          In a bowl add 2 cups of buttermilk, 1 egg, 1 tbsp mustard, 1 tbsp
          pickle juice, salt, pepper, chili powder, smoked paprika, and garlic
          powder. Mix well then add chicken tenders to liquid mixture. Let sit
          overnight or for at least an hour.
        </p>
        <p>
          In dry mixture add 2 cups of flour, salt, pepper, smoked paprika,
          chili powder, garlic powder, and mix well.
        </p>
        <p>
          Heat oil in dutch oven. When it reaches 350 degrees add tenders to dry
          mixture and coat them thoroughly. Add coated tenders to hot oil, make
          sure not to crowd the pot. Turn chicken after about 3-4 minutes with
          tongs, the chicken will cook in about 7 minutes.
        </p>
        <p>
          Enjoy with your choice of dipping sauce. I enjoy mixing mayo,
          worcestershire sauce, ketchup, garlic, chili powder, smoked paprika,
          salt and pepper, a sauce very similar to Cane's chicken sauce.
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

const ChickenGyro = ({ recipe }) => {
  return (
    <div>
      <div className="recipe-ingredients">
        <h3>Chicken Marinade</h3>
        <ul>
          {getArray(recipe?.Ingredients)
            .slice(0, 18)
            .map((p, q) => {
              return <li key={q}>{p}</li>;
            })}
        </ul>
        <br />
      </div>
      <div className="recipe-ingredients-image">
        <img src={recipe.IngredientsImage} alt={`${recipe.Recipe}-image`} />
      </div>
      <div className="recipe-ingredients">
        <h3>Basmati Rice</h3>
        <ul>
          {getArray(recipe?.Ingredients)
            .slice(18, 27)
            .map((p, q) => {
              return <li key={q}>{p}</li>;
            })}
        </ul>
        <br />
        <h3>White Sauce</h3>
        <ul>
          {getArray(recipe?.Ingredients)
            .slice(27, recipe?.Ingredients.length)
            .map((p, q) => {
              return <li key={q}>{p}</li>;
            })}
        </ul>
      </div>

      <div className="recipe-instructions">
        <h3>Chicken instructions</h3>
        <p>
          In a large bowl mix one part mayo and one part greek yogurt, I used
          about 3 ibs of chicken thighs equating to 1 and one 1/2 cups of mayo
          and yogurt. Add juice of half a lemon, 1 tbsp olive oil, 2 tbsp garlic
          powder, 1 tbsp ground cumin, 2 tbsp salt, 1 tbsp pepper, 1 tbsp smoked
          paprika, 1 tsp onion powder, 1 tsp coriander, and 1 tsp cinnamon. Add
          thighs to bowl and mix thoroughly. Let the thighs rest in the marinade
          for a few hours, overnight is my favorite option.
        </p>
        <p>
          Get your cast iron or your griddle ripping hot, then add your chicken
          thighs. Get a nice char on one side before you flip the thighs.
          Continue cooking and remove when internal temperature reaches 165
          degrees.
        </p>
        <div className="recipe-instructions-images">
          {getArray(
            recipe?.StepImages.slice(0, 5).map((p, q) => {
              return <img src={p} key={q} alt={NomNomsLogo} />;
            })
          )}
        </div>
        <h3>Rice instructions</h3>
        <p>
          In a deep frying pan, add 2 tsp of butter and set stove heat to
          medium. Dice half of an onion and to pan. Add 1 tsp of tumeric, 1 tsp
          ginger, 1 tsp garlic, 2 cups of rice, stir in pan. Add 4 cups of
          chicken stock and bring to boil, then turn heat down to lowest
          setting, cover, and let cook for about 15 to 20 minutes. Check to see
          if rice is done, if it is add another 2 tsp of butter and stir.
        </p>
        <div className="recipe-instructions-images">
          {getArray(
            recipe?.StepImages.slice(5, 7).map((p, q) => {
              return <img src={p} key={q} alt={NomNomsLogo} />;
            })
          )}
        </div>
        <h3>White Sauce instructions</h3>
        <p>
          In a bowl mix 1 cup of mayo, 1 cup of greek yogurt, 1 tbsp salt, 1
          tbsp oregano, juice of half lemon, 1 tsp olive oil, 1 tbsp garlic, 2
          tsp fresh dill, and mix thoroughly.
        </p>
        <p>Dice cucumber, tomato, and lettuce.</p>
        <p>
          Heat up pita/gyro in oven or microwave then fill with rice, veggies,
          diced chicken, and plenty of the sauce. Enjoy.
        </p>
      </div>
      <div className="recipe-instructions-images">
        {getArray(
          recipe?.StepImages.slice(7, recipe.StepImages.length).map((p, q) => {
            return <img src={p} key={q} alt={NomNomsLogo} />;
          })
        )}
      </div>
    </div>
  );
};

const TomatilloSalsaV1 = ({ recipe }) => {
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
          Cut a quarter of an onion into wedges, halve the jalapenos and
          tomatillos, and leave the peels on the garlic.
        </p>
        <p>
          Set the oven broiler on high and place tomatillos, garlic, onion, and
          jalapenos on a baking sheet, and place under broiler on top oven
          shelf.
        </p>
        <p>
          Wait 3-5 minutes or until contents begin to char, then flip and roast
          for another 3-5 minutes.
        </p>
        <p>
          Remove the charred garlic peel and add everything to a blender with
          about a cup of fresh cilantro, 1/4 cup of canola oil, and a tablespoon
          of salt. Blend and add additional salt to taste if necessary. The
          result will be a thicker smokier salsa. Enjoy with chips or add to
          tacos.
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

const TomatilloSalsaV2 = ({ recipe }) => {
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
          Cut a quarter of an onion into wedges, halve the jalapenos and
          tomatillos, and remove the peels from the garlic cloves.
        </p>
        <p>
          Set the oven broiler on high and place tomatillos on a baking sheet,
          and place under broiler on top oven shelf.
        </p>
        <p>
          Wait 3-5 minutes or until tomatillos begin to char, then flip and
          roast for another 3-5 minutes.
        </p>
        <p>
          Pan fry the jalapenos until both sides take on a brownish color.
          Remove jalapenos and add onion and garlic to pan, remove when onion is
          translucent and garlic is browned.
        </p>
        <p>
          Add everything to a blender with about a cup of fresh cilantro, 1/4
          cup of canola oil, and a tablespoon of salt. Blend and add additional
          salt to taste if necessary. The result will be a lighter and runnier
          salsa. Enjoy with chips or add to tacos.
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
const ShrimpScampi = () => {
  return (
    <div>
      <h3>Coming Soon</h3>
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

const Spaghetti = ({ recipe }) => {
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
          A few of the ingredients missed picture day. Apologies from the
          kitchen staff.
        </p>
        <p>
          Heat olive oil in dutch oven. Dice full onion, celery, and mince
          garlic. Add ground italian sausage to dutch oven. Cook, stirring
          periodically until meat is browned. Remove meat from dutch oven. Add
          onion and celery, then garlic. Add around a half cup of white wine and
          stir until liquid mostly evaporates. Stir in one table spoon of tomato
          paste. Add salt, pepper, 1 tablespoon of sugar, and Italian seasoning.
          Pour in 2 cans of crushed tomatoes and quart of chicken stock/broth.
          Add meat back to sauce. Bring to boil then reduce heat and let it
          simmer for two to three hours until sauce thickens.
        </p>
        <p>
          Bring 4 quarts of salted water to a boil. Add spaghetti or linguine
          and follow instructions on box for cook time.
        </p>
        <p>
          Before draining pasta add around one cup of water to sauce mixture.
          Drain noodles. Add fresh or dried parsley to sauce and finely grate
          parmesan cheese into sauce, I like to do around a cup. Add salt and
          pepper to taste. You can let sauce simmer for a little longer if
          necessary in order to thicken, if not serve over noodles with grated
          parmesan.
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
