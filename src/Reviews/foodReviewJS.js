import Image from "../Components/Image";

const foodReviewJS = [
  {
    Restaurant: "The Regional",
    Cuisine: "American",
    State: "Colorado",
    City: "Fort Collins",
    Cost: "$$-$$$",
    Content: "",
    Id: 1,
    ImageOutside: "/images/regional_outside.jpg",
    // ImageOutside: Image("regional_outside_img"),
    FoodImages: [""],
    BlogIntro:
      "Possibly my favorite dining experience in Northern Colorado, always amazing food, a great atmosphere, and great service.",
    Date: "2023-03-12T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Henry's Pub",
    Cuisine: "American, Pub",
    State: "Colorado",
    City: "Loveland",
    Cost: "$$-$$$",
    Content: "",
    Id: 2,
    ImageOutside: "/images/coNomNomsLogo.png",
    FoodImages: [""],
    BlogIntro:
      "One of the best if not the best that Loveland has to offer.  Everything I've tried on the menu has been stellar, but their chicken fried chicken is some of the best I've ever had.",
    Date: "2023-02-12T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Bowl Izakaya",
    Cuisine: "Japanese",
    State: "Colorado",
    City: "Loveland",
    Cost: "$$",
    Content: "",
    Id: 3,
    ImageOutside: "/images/coNomNomsLogo.png",
    FoodImages: [""],
    BlogIntro:
      "A true gem in Loveland, I have spent many a cold winter night slurping down a hot bowl of pork tonkatsu ramen.",
    Date: "2023-03-11T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Young's Cafe",
    Cuisine: "Vietnamese",
    State: "Colorado",
    City: "Fort Collins",
    Cost: "$-$$",
    Content: "",
    Id: 4,
    ImageOutside: "/images/coNomNomsLogo.png",
    FoodImages: [""],
    BlogIntro: "The best Vietnamese in Fort Collins with easily the best pho.",
    Date: "2023-03-10T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Lucile's",
    Cuisine: "Cajun",
    State: "Colorado",
    City: "Fort Collins",
    Cost: "$-$$",
    Content: "",
    Id: 5,
    ImageOutside: "/images/coNomNomsLogo.png",
    FoodImages: [""],
    BlogIntro:
      "With locations in Longmont and Boulder as well, I highly recommend this cajun inspired breakfast joint.  Get there early though, it's always packed.",
    Date: "2023-03-09T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Pizza Casbah",
    Cuisine: "Italian",
    State: "Colorado",
    City: "Fort Collins",
    Cost: "$-$$",
    Content: "",
    Id: 6,
    ImageOutside: "/images/coNomNomsLogo.png",
    FoodImages: [""],
    BlogIntro:
      "This New York pizza style joint was a regular lunch spot for their delicious cheese pizza by the slice.",
    Date: "2023-03-08T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Krazy Karl's",
    Cuisine: "Italian",
    State: "Colorado",
    City: "Fort Collins",
    Cost: "$$",
    Content: "",
    Id: 7,
    ImageOutside: "/images/krazy_karls_outside.jpg",
    FoodImages: [""],
    BlogIntro:
      "Krazy Karl's has been a staple in my diet since moving to Fort Collins, The Krazy Hawaiian pizza, Wednesday's grinders, Thursday's big ass beers, all have shaped me into who I am today.",
    Date: "2023-04-08T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Smokin Fins",
    Cuisine: "American, Sea Food",
    State: "Colorado",
    City: "Fort Collins",
    Cost: "$$",
    Content: "",
    Id: 16,
    ImageOutside: "/images/coNomNomsLogo.png",
    FoodImages: [""],
    BlogIntro:
      "A chain restaurant, but a worthwhile weekend excursion for the warm atmosphere and lobster mac and cheese. ",
    Date: "2023-03-07T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Origins",
    Cuisine: "Italian",
    State: "Colorado",
    City: "Loveland",
    Cost: "$$",
    Content: "",
    Id: 8,
    ImageOutside: "/images/coNomNomsLogo.png",
    FoodImages: [""],
    BlogIntro:
      "Best pizza in Loveland with a great dining atmosphere.  The Physical location is unfortunately (hopefully temporarily) closed right now.",
    Date: "2023-03-06T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Bai Tong",
    Cuisine: "Thai",
    State: "Colorado",
    City: "Loveland",
    Cost: "$$",
    Content: "",
    Id: 9,
    ImageOutside: "/images/coNomNomsLogo.png",
    FoodImages: [""],
    BlogIntro:
      "A truly unique dining experience with fantastic food and plentiful portions.",
    Date: "2023-03-06T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Choice City",
    Cuisine: "American, Sandwiches",
    State: "Colorado",
    City: "Fort Collins",
    Cost: "$$",
    Content: "",
    Id: 10,
    ImageOutside: "/images/coNomNomsLogo.png",
    FoodImages: [""],
    BlogIntro:
      "Home of some of the best burgers and sandwiches in Fort Collins.",
    Date: "2023-04-03T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Himalayan Curry & Kebob",
    Cuisine: "Indian & Nepalese",
    State: "Colorado",
    City: "Loveland",
    Cost: "$$",
    Content: "",
    Id: 11,
    ImageOutside: "/images/curry_kabob_outside.jpg",
    FoodImages: ["/images/curry_kabob_plate.jpg"],
    BlogIntro: "A must go for the buttered chicken alone.",
    Date: "2023-04-09T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Mt. Everest Cafe",
    Cuisine: "Indian & Nepalese",
    State: "Colorado",
    City: "Fort Collins",
    Cost: "$$",
    Content: "",
    Id: 12,
    ImageOutside: "/images/mt_everest_outside.jpg",
    //FoodImages: [Image("mt_everest_plate_one_img")],
    FoodImages: ["/images/mt_everest_plate_one.jpg", "/images/mt_everest_plate_two.jpg"],
    BlogIntro:
      "A Nepalese buffet in Fort Collins with a medley of delicious curries, tikka masala, and near perfect naan bread.",
    Date: "2023-04-10T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "The Original Pancake House",
    Cuisine: "American",
    State: "Colorado",
    City: "Fort Collins",
    Cost: "$$",
    Content: "",
    Id: 13,
    ImageOutside: "/images/coNomNomsLogo.png",
    FoodImages: [""],
    BlogIntro:
      "I know this is a chain, but there aren't many places I'd rather go to on a Sunday morning.",
    Date: "2023-03-23T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "El Pueblito",
    Cuisine: "Mexican",
    State: "Colorado",
    City: "Loveland",
    Cost: "$$",
    Content: "",
    Id: 14,
    ImageOutside: "/images/coNomNomsLogo.png",
    FoodImages: [""],
    BlogIntro:
      "El Pueblito has a Fort Collins and a Loveland location, but having only been to the Loveland location, I can make the recommendation for one of Loveland's best Mexican joints.",
    Date: "2023-03-22T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Jim's Wings",
    Cuisine: "American, Pub",
    State: "Colorado",
    City: "Fort Collins",
    Cost: "$-$$",
    Content: "",
    Id: 15,
    ImageOutside: "/images/jims_wings_outside.jpg",
    FoodImages: [""],
    BlogIntro:
      "The best wings in Fort Collins consisting of the perfect texture, size, and taste.",
    Date: "2023-03-20T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Music City Hot Chicken",
    Cuisine: "American",
    State: "Colorado",
    City: "Fort Collins",
    Cost: "$-$$",
    Content: "",
    Id: 17,
    ImageOutside: "/images/coNomNomsLogo.png",
    FoodImages: [""],
    BlogIntro:
      "Great place for some Nashville hot chicken and a side of mac and cheese.",
    Date: "2023-03-27T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Mo' Betta Gumbo",
    Cuisine: "Cajun",
    State: "Colorado",
    City: "Loveland",
    Cost: "$$",
    Content: "",
    Id: 18,
    ImageOutside: "/images/coNomNomsLogo.png",
    FoodImages: [""],
    BlogIntro:
      "A fun cajun joint in the heart of downtown Loveland, Betta Gumbo welcomes you with a colorful atmosphere, extensive drink menu, and great classic cajun dishes.",
    Date: "2023-02-12T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "DGT (Originally Damn Good Tacos)",
    Cuisine: "Mexican",
    State: "Colorado",
    City: "Fort Collins",
    Cost: "$-$$",
    Content: "",
    Id: 19,
    ImageOutside: "/images/coNomNomsLogo.png",
    FoodImages: [""],
    BlogIntro:
      "DGT, originally known as Damn Good Tacos (but Torchies got mad), is a great taco stop with a creative variety.",
    Date: "2023-02-13T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Cafe de Bangkok",
    Cuisine: "Thai",
    State: "Colorado",
    City: "Fort Collins",
    Cost: "$-$$",
    Content: "",
    Id: 20,
    ImageOutside: "/images/cafe_de_bangkok.jpg",
    FoodImages: [""],
    BlogIntro:
      "A cosy little restaurant near CSU's campus with the best pad thai and drunken noodles in Fort Collins.",
    Date: "2023-02-23T05:39:14.551Z",
    BlogText: "",
  },
  {
    Restaurant: "Dae Gee",
    Cuisine: "Korean",
    State: "Colorado",
    City: "Denver, Fort Collins",
    Cost: "$$-$$$",
    Content: "",
    Id: 21,
    ImageOutside: "/images/dae_gee_outside.jpg",
    FoodImages: ["/images/dae_gee_grill.jpg"],
    BlogIntro:
      "With multiple locations around the Denver area including one in Fort Collins, this is one of my favorite eating experiences where you can choose the all you can eat option and grill the various meats at your table.",
    Date: "2023-04-12T05:39:14.551Z",
    BlogText: "Perp"
  },
  {
    Restaurant: "Bamboo Express",
    Cuisine: "Chinese",
    State: "Colorado",
    City: "Loveland",
    Cost: "$-$$",
    Content: "",
    Id: 22,
    ImageOutside: "/images/bamboo_outside.jpg",
    FoodImages: ["/images/bamboo_plate.jpg"],
    BlogIntro:
      "Bamboo Express > Panda Express",
    Date: "2023-04-17T05:39:14.551Z",
    BlogText: "Perp"
  },
];

export default foodReviewJS;
