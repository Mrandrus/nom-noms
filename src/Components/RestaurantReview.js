import { useEffect, useState } from "react";
import "../App.css";
import { useParams, Routes, Router } from "react-router-dom";
// import mammoth from "mammoth";

const RestaurantReview = (id) => {
  const [review, setReview] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const param = useParams();
  const docs = [
    {
      id: 1,
      path: "/Reviews/ReviewTexts/RegionalReview.docx",
    },
    {
      id: 2,
      path: "/Reviews/ReviewTexts/where i belong chords.docx",
    },
  ];

  function fetchReview() {
    //Maybe do something here
    //setReview(props.detes)
  }

//   useEffect(() => {
//     fetch(docs[id])
//       .then((response) => response.arrayBuffer())
//       .then((data) => {
//         // Convert the DOCX content to HTML using mammoth
//         mammoth
//           .extractRawText({ arrayBuffer: data })
//           .then((result) => {
//             // Split the converted text into individual reviews (assuming one review per line)
//             const reviewsArray = result.value.split("\n");

//             // Set the reviews in the component's state
//             setReview(reviewsArray);
//           })
//           .catch((error) => {
//             console.error("Error converting DOCX to HTML:", error);
//           });
//       })
//       .catch((error) => {
//         console.error("Error fetching DOCX file:", error);
//       });
//   });

  return (
    <div>
      <p>{review}</p>
      <p>this is a test of {param}</p>
      {/* <iframe src="/Reviews/ReviewTexts/RegionalReview.docx"></iframe> */}

    </div>
  );
};

export default RestaurantReview;
