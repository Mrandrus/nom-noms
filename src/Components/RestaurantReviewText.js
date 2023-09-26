import { useEffect, useState } from "react";
import "../App.css";
import { useParams, Routes, Router } from "react-router-dom";
// import mammoth from "mammoth";

const RestaurantReviewText = (props) => {
  const [reviewId, setReviewId] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const param = useParams();

  useEffect(() => {
    setReviewId(props);
  }, [props]);

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

  console.log("Passed review id", reviewId);

  switch (reviewId.props?.Id) {
    case 1:
      return <Regional />;
    case 2:
      return <Henrys />;
    default:
      return "";
  }
};

export default RestaurantReviewText;

const Regional = () => {
  return (
    <div>
      <p>
        Everything I've had from the Regional has been a culinary work of art, I
        highly recommend their happy hour special of a burger, beer, and a shot
        with a slew of oysters to start. The atmosphere is a nicely lit, cozy,
        rustic environment nestled right next to the train tracks in downtown
        Fort Collins.{" "}
      </p>
      <br />
      <p>
        <strong>Personal Testimony:</strong> My first time at the regional was a
        top tier dining experience. In the middle of the pandemic, I was eager
        to accept the invitation from a friend to try out one of his favorite
        places in Fort Collins. Their happy hour special of a burger, beer, and
        a shot was a warm embrace amid what felt like the end of the world. I
        nervously slurped down my first oyster and my tastebuds were sent on a
        mini vacation to the ocean. We ordered twelve more. The conversation was
        flowing, and we began to work our way down through the appetizers list
        and split a few more entrees. It was a pricey food excursion but only
        due to our over consumption and eagerness to explore the food variety.
        Their happy hour is incredibly worth it for what you get, and anytime
        you go, their entrées are aptly priced and well worth it. It is one of
        the best, if not the best, Fort Collins has to offer.
      </p>
    </div>
  );
};

const Henrys = () => {
  return (
    <div>
      <p>
        Henry's Pub is an absolute must try if you ever find yourself in
        downtown Loveland. I've explored the menu here not to an extensive
        amount largely due to the chicken fried chicken. Everything I've tried
        has been very good, but I don't think I've had better chicken fried
        chicken. They have a thick house gravy that they pour over four
        generously sized fried chicken pieces, chicken that holds a perfect
        crunch and flavor apart from the gravy. Their menu is impressive and has
        a bevy of delicious options that have never disappointed me, but my
        heart, as long as still beats, belongs to the chicken fried chicken.
      </p>
      <br />
      <p>
        <strong>Personal Testimony:</strong> Earlier in the year, my parents
        came into town for a visit. Without hesitation, I suggested Henry's Pub,
        and to downtown Loveland we drove. If you decide to take a trip to
        Henry's I do recommend making a reservation in advance, as you could
        find your party being pushed onto an hour wait list, like we did. We
        decided to mosey around, and Unbeknownst to me, the Sweetheart Festival
        was taking over the square in downtown Loveland because of Valentine's
        day. There was live music, concessions, games, and it seemed everyone in
        Loveland came out for it. As my parents enjoyed the live music, I made a
        straight line to the tent that served alcohol. I got a craft brewed
        libation and making my way back to my parents, ran into an old friend of
        mine who was there on a date. We exchanged pleasantries before he
        stifled a laugh and asked if I was here by myself. I laughed loudly and
        explained that I was actually here with my parents, we all laughed and
        parted ways. As I stood in the cold alone with my beer, I watched my
        parents enjoy the live music and a thought overtook me, I can't wait to
        order the chicken fried chicken.
      </p>
    </div>
  );
};

const BambooExpress = () => {
  return <div></div>;
};
