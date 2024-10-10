import "./App.css";
import Home from "./components/home/home";
import { Routes, Route, useLocation } from "react-router-dom";
import Whyus from "./components/whyus/whyus";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/common/Header";
import './index.css';  // Import the CSS styles here
import Footer from "./components/common/Footer";
import Faq from "./components/faq/faq";

function App() {
  const location = useLocation();

  return (
    <div className="App">
        <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Routes  location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/whyus" element={<Whyus />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer/>
    </div>
  );
}

export default App;
