import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router basename="react_portfolio">
      <div>
        <Header />
        <Wrapper>
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

