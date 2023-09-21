import React from "react";
import ReactMapGL from "react-map-gl";
import { useState, useEffect, useRef } from "react";
import foodReviewJS from "../Reviews/foodReviewJS";
import { Link } from "react-router-dom";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoibXJhbmRydXM5MCIsImEiOiJjbG1oOW9xc2cyODJiM2VtcjM3ZzZ5eHlvIn0.KW81VDke1TnYvRlmSB93NQ";

function FoodMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-105.0798);
  const [lat, setLat] = useState(40.4776);
  const [zoom, setZoom] = useState(9);
  const [hoverData, setHoverData] = useState(null);
  const [clickData, setClickData] = useState([]);

  useEffect(() => {
    try {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [lng, lat],
        zoom: zoom,
      });

      map.current.on("move", () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        //setHoverData(map.current.)
      });

      // Add markers to the map.
      for (const marker of foodReviewJS) {
        // Create a DOM element for each marker.
        const customMarker = document.createElement("div");
        customMarker.className = "customMarker";

        customMarker.addEventListener("mouseover", () => {
          setHoverData(marker.Restaurant);
        });

        customMarker.addEventListener("click", () => {
          setClickData(marker);
        });

        // const sendLoc = () => {};

        // Add markers to the map.
        new mapboxgl.Marker(customMarker)
          .setLngLat(marker.Geometry?.coordinates)
          .addTo(map.current);
      }
    } catch (error) {
      console.log("here is the mapbox error:", error);
    }
  }, []);
  // });

  return (
    <div>
      <div className="map-heading">
        <h2>Restaurant Locations</h2>
      </div>
      <div className="map-sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        <div>
          <br />
          Restaurant: {hoverData}
        </div>
      </div>
      <div ref={mapContainer} className="map-container">
        <MarkeyMark props="" />
      </div>
      <div className="map-stuff">
        <div className={clickData != "" ? "map-clicked-data" : "map-null"}>
          <Link
            // to={`/Reviews/${r.Restaurant}`}
            to={`/Restaurants/${clickData.Cuisine}/${clickData.Restaurant}`}
            // state={{
            //   restaurant: p.Restaurant,
            //   cuisine: p.Cuisine,
            //   city: p.City,
            //   id: p.Id,
            //   outsidePic: p.ImageOutside,
            //   foodPic: p.FoodImages,
            //   blogIntro: p.BlogIntro,
            //   blogText: p.BlogText,
            // }}
          >
            <h3>{clickData.Restaurant}</h3>
            <img
              src={clickData?.ImageOutside}
              alt={`${clickData?.Restaurant}-food-image${clickData.id}`}
              height={200}
              width={350}
            />
            <p>{clickData.BlogIntro}</p>
          </Link>
        </div>
        <div className="map-stuff-blurb">
          <p>Explore my favorite restuarants across the front range.</p>
        </div>
      </div>
    </div>
  );
}

export default FoodMap;

const MarkeyMark = (props) => {};

// const handleMarkeyMarkHover = (event, data) => {
//   setHoverData(data)
// }
