import logo from "./images/logo.svg";
import "./App.css";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Reviews from "./Components/Reviews.js";
import UpperContent from "./Components/UpperContent.js";
import Home from "./Components/Home.js";
import Restaurants from "./Components/Restaurants.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import { Router, Routes, Route } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import React, { Component, useEffect, useState } from "react";




function App() {

  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
