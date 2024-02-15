const foodRecipesJS = [
  {
    Recipe: "Drunken Noodles",
    Cuisine: "Thai",
    Id: 1,
    Image: "/images/drunken-noodles-dish.jpg",
    IngredientsImage: ["/images/drunken-noodles-ingredients.jpg"],
    Ingredients: [
      "Rice noodles",
      "Thai basil",
      "Chicken thighs",
      "Thai chiles/seranos",
      "Green onion",
      "Ginger",
      "Garlic",
      "Fish sauce",
      "Sesame oil",
      "Soy sauce",
      "Oyster sauce",
    ],
    Description: "One of my favorite Thai dishes that truly slaps.",
    StepImages: [
      "/images/drunken-noodles-step-1.jpg",
      "/images/drunken-noodles-step-2.jpg",
      "/images/drunken-noodles-dish.jpg",
    ],
  },
  {
    Recipe: "Spaghetti and Meat Sauce",
    Cuisine: "Italian",
    Id: 2,
    Image: "/images/spaghetti_plate.jpg",
    IngredientsImage: ["/images/spaghetti_ingredients.jpg"],
    Ingredients: [
      "1 lb Italian Sausage",
      "Chicken stock",
      "2 cans crushed tomatoes",
      "Parmesan cheese",
      "White wine",
      "1-2 stocks celery",
      "1 yellow onion",
      "Olive oil",
      "4-5 garlic cloves",
      "Tomato paste",
      "Salt",
      "Pepper",
      "Italian Season",
      "Fresh parsley",
    ],
    Description:
      "A timeless dinner. I've gone through many recipe iterations to find my favorite version, I hope you enjoy.",
    StepImages: [
      "/images/spaghetti_prep_1.jpg",
      "/images/spaghetti_prep_1.1.jpg",
      "/images/spaghetti_prep_2.jpg",
      "/images/spaghetti_prep_3.jpg",
      "/images/spaghetti_prep_4.jpg",
      "/images/spaghetti_prep_5.jpg",
    ],
  },
  {
    Recipe: "Lasagna",
    Cuisine: "Italian",
    Id: 3,
    Image: "/images/lasagna-slice.jpg",
    IngredientsImage: ["/images/lasagna-ingredients.jpg"],
    Ingredients: [
      "Two cans Tomato sauce",
      "Ground beef",
      "Ground Italian sausage",
      "Yellow onion",
      "Garlic",
      "One egg",
      "Italian Parsley",
      "Ricotta Cheese",
      "Fresh Mozzarella",
      "Parmesan cheese",
      "Basil",
      "Lasagna noodles",
    ],
    Description: "Inject it into my veins.",
    StepImages: [
      "/images/lasagna-beef-pork-1.jpg",
      "/images/lasagna-cooking-1.jpg",
      "/images/lasagna-uncooked.jpg",
      "/images/lasagna-cooked.jpg",
    ],
  },
  {
    Recipe: "Roasted Tomatillo Salsa Version One",
    Cuisine: "Mexican",
    Id: 6,
    Image: "/images/tomatillo_salsa_v1.jpg",
    IngredientsImage: ["/images/tomatillo_salsa_ingredients.jpg"],
    Ingredients: [
      "5-6 Tomatillos",
      "2-3 Jalapenos",
      "Quarter of an Onion",
      "4-5 Garlic cloves",
      "Cilantro",
      "Canola oil",
    ],
    Description:
      "Roasting all the ingredients under the broiler for a thicker salsa.",
    StepImages: ["/images/tomatillo_salsa_v1_step.jpg"],
  },
  {
    Recipe: "Roasted Tomatillo Salsa Version Two",
    Cuisine: "Mexican",
    Id: 7,
    Image: "/images/tomatillo_salsa_v2.jpg",
    IngredientsImage: ["/images/tomatillo_salsa_ingredients.jpg"],
    Ingredients: [
      "5-6 Tomatillos",
      "2-3 Jalapenos",
      "Quarter of an Onion",
      "4-5 Garlic cloves",
      "Cilantro",
      "Canola oil",
    ],
    Description:
      "Roasted tomatillo salsa where you roast the tomatillos under the broiler and pan fry the jalapenos, garlic, and onion.",
    StepImages: [
      "/images/tomatillo_salsa_v2_step1.jpg",
      "/images/tomatillo_salsa_v2_step2.jpg",
      "/images/tomatillo_salsa_v2_step3.jpg",
      "/images/tomatillo_salsa_v2_step4.jpg",
    ],
  },
  {
    Recipe: "Chicken Gyro",
    Cuisine: "Mediterranean",
    Id: 5,
    Image: "/images/chicken_gyro_plate.jpg",
    IngredientsImage: ["/images/chicken_gyro_ingredients.jpg"],
    Ingredients: [
      "Chicken thighs",
      "Mayo",
      "Plain greek yogurt",
      "Lemon",
      "Olive oil",
      "Garlic powder",
      "Ground cinnamon",
      "Ground cumin",
      "Salt",
      "Pepper",
      "Smoked paprika",
      "Onion powder",
      "Ground coriander",
      "Oregano",
      "Lettuce",
      "Tomato",
      "Cucumber",
      "Pita or gyro",
      "Basmati rice",
      "Onion",
      "Tumeric",
      "Bay leaves",
      "Ground ginger",
      "Butter",
      "Garlic",
      "Chicken Stock",
      "Salt",
      "Plain greek yogurt",
      "Mayo",
      "Olive oil",
      "Lemon",
      "Salt",
      "Garlic",
      "Oregano",
      "Dill",
    ],
    Description: "One of the best recipes for chicken ever.",
    StepImages: [
      "/images/chicken_gyro_step1.jpg",
      "/images/chicken_gyro_step2.jpg",
      "/images/chicken_gyro_step3.jpg",
      "/images/chicken_gyro_step4.jpg",
      "/images/chicken_gyro_step5.jpg",
      "/images/chicken_gyro_rice_step1.jpg",
      "/images/chicken_gyro_rice_step2.jpg",
      "/images/chicken_gyro_veg.jpg",
      "/images/chicken_gyro_sauce.jpg",
      "/images/chicken_gyro_plate2.jpg",
    ],
  },
  {
    Recipe: "Fried Chicken",
    Cuisine: "American",
    Id: 8,
    Image: "/images/fried_chicken_plate.jpg",
    IngredientsImage: [""],
    Ingredients: [
      "Chicken tenders",
      "Buttermilk",
      "Mustard",
      "Pickle juice",
      "1 egg",
      "Flour",
      "Chili powder",
      "Smoked paprika",
      "Garlic powder",
      "Salt",
      "Pepper",
      "Canola oil",
    ],
    Description:
      "Fried chicken tenders to rival that of your favorite chicken joint.",
    StepImages: [
      "/images/fried_chicken_step1.jpg",
      "/images/fried_chicken_step2.jpg",
      "/images/fried_chicken_step3.jpg",
      "/images/fried_chicken_step4.jpg",
    ],
  },
  {
    Recipe: "Sundubu-Jjigae",
    Cuisine: "Korean",
    Id: 9,
    Image: "/images/sundubu_step_four.jpg",
    IngredientsImage: ["/images/sundubu_ingredients.jpg"],
    Ingredients: [
      "2 tbsp gochujang paste",
      "1 cup gochugaru(Korean red chili pepper flakes)",
      "Sesame oil",
      "3 tbsp soy sauce",
      "1 ib ground pork",
      "1/2 cup scallions",
      "1 cup yellow onion",
      "7-9 garlic cloves",
      "1 & 1/2 tbsp minced ginger",
      "1 tbsp ground pepper",
      "3 tbsp salt",
      "2 tbsp sugar",
      "Silken tofu",
      "Chicken stock",
      "Eggs",
      "Jasmine rice",
      "Coconut oil, or coconut milk"
    ],
    Description:
      "A classic spicy Korean stew served over rice, perfect dish for a cold day.",
    StepImages: [
      "/images/sundubu_step_one.jpg",
      "/images/sundubu_step_two.jpg",
      "/images/sundubu_step_three.jpg",
      "/images/sundubu_step_four.jpg",
      "/images/sundubu_plate.jpg"
    ],
  },
];

export default foodRecipesJS;
