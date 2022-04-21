import React, { useEffect, Component } from "react";
import Homepage from "./pages/homepage/homepage.component";
import Background from "./components/background/background.component";

import "./App.css";
import ContactInfo from "./components/contact/contact-info.component";
import { Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPortrait,
  faLaptop,
  faFolder,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import ProjectPage from "./pages/projects/projects.component";
import AboutPage from "./pages/about/about.component";
import ReactGA from "react-ga";
library.add(faPortrait, fab, faLaptop, faFolder, faHome);

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-223100036-1");

    //to report page view
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <div>
      <Background className="background"/>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/projects" element={<ProjectPage />} />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
