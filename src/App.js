import React, { useEffect, Component } from "react";
import Nav from "./pages/nav/nav.component";
import Footer from "./components/footer/footer.component";
import ContactPage from "./pages/contact/contact.component";

import "./App.css";
import ContactInfo from "./components/contact/contact-info.component";
import { Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCircle,
  faLaptop,
  faFolder,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import ProjectPage from "./pages/projects/projects.component";
import AboutPage from "./pages/about/about.component";
import ReactGA from "react-ga";
library.add(faCircle, fab, faLaptop, faFolder, faHome);

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-223100036-1");

    //to report page view
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <div className="page">
        <Nav />
        <ContactInfo />
        <Routes>
          <Route exact path="/" element={<ProjectPage />} />
          <Route exact path="/projects" element={<ProjectPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
