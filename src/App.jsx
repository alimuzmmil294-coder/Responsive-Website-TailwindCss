import React from "react";
import Basic from "./Components/Basic/Basic";
import Advance from "./Components/Advnace/Advance";
import Intermediate from "./Components/Intermediate/Intermediate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import RefHook from "./Components/RefHook/RefHook";
import ReducerHook from "./Components/useReducer/ReducerHook";

const App = () => {
  return (
    <div className="App">
      {/* <RefHook /> */}
      <ReducerHook />
      {/* <Basic /> */}
      {/* <Intermediate /> */}
      {/* <Advance /> */}

      {/* <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </div>
  );
};

export default App;
