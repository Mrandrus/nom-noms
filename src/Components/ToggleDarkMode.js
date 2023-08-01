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

const ToggleDarkMode = () => {
  const [toggleDark, setToggleDark] = useToggle(false);

  const darkModeStyles = {
    backgroundColor: toggleDark ? "#333" : "#fff",
    color: toggleDark ? "#fff" : "#333",
  };

  return (
    <div className="toggle-dark" style={darkModeStyles}>
      <button onClick={setToggleDark}>Toggle Dark/Light</button>
    </div>
  );
};

export default ToggleDarkMode;

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState((prevState) => !prevState);
  };

  return [state, toggle];
};
