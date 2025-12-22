import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";

import Nav from "./pages/nav/nav.component";
import Footer from "./components/footer/footer.component";
import ContactInfo from "./components/contact/contact-info.component";

import ProjectPage from "./pages/projects/projects.component";
import ProjectDetail from "./pages/project-detail/project-detail.page";
import AboutPage from "./pages/about/about.component";
import ContactPage from "./pages/contact/contact.component";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCircle, faLaptop, faFolder, faHome } from "@fortawesome/free-solid-svg-icons";

library.add(faCircle, fab, faLaptop, faFolder, faHome);

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-223100036-1");
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <div className="page">
        <Nav />
        <ContactInfo />

        <Routes>
          <Route path="/" element={<ProjectPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
