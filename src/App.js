import logo from './images/logo.svg';
import "./App.css";
import Header from "./Components/Header.js";
import Footer from './Components/Footer.js';
import GradingScale from './Components/GradingScale.js';
import UpperContent from './Components/UpperContent.js';
import Restaurants from './Components/Restaurants.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';


function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <About />;
      break;
    case "/Restaurants":
      component = <Restaurants />;
      break;
    case "/GradingScale":
      component = <GradingScale />;
      break;
    case "/About":
      component = <About />;
      break;
    case "/Contact":
      component = <Contact />
      break;
    default:
      component = App;
    break;
  }

  return (
    <div className="App">
      <Header />
      <UpperContent />
      {component}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
