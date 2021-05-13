import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Projects from "./pages/Projects";
import About from "./pages/About";
// import Resume from "./pages/Resume";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

