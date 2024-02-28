import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Websites from "./pages/Websites";
import WebApplications from "./pages/WebApplications";
import Designs3D from "./pages/Designs3D";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="about" element={<About />} />

          <Route exact path="portfolio" element={<Portfolio />}>
            <Route path="websites" element={<Websites />} />
            <Route path="applications" element={<WebApplications />} />
            <Route path="designs" element={<Designs3D />} />
          </Route>

          <Route exact path="services" element={<Services />} />
          <Route exact path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
