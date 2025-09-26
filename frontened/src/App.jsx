import React from "react";
import { ToastContainer,  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "../src/component/Navbar";
import Hero from "../src/component/Hero";
import WorkoutSessions from "../src/component/WorkoutSessions";
import Gallery from "../src/component/Gallery";
import Pricing from "../src/component/Pricing";
import Contact from "../src/component/Contact";
import BMICalculator from "../src/component/BMICalculator";
import Footer from "../src/component/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;