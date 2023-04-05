import React from "react";
import { Routes, Route} from "react-router-dom";
import { useLocation } from "react-router-dom";


import "./App.css";
import Header from "./Components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import { Container } from "react-bootstrap";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Container>
       
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        
      </Container>
    </>
  );
}

export default App;