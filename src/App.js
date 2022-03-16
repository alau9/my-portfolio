import { Component } from "react";
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import ContactInfo from './components/contact/contact-info.component';
import { Route, Routes } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPortrait, faLaptop, faFolder, faHome } from '@fortawesome/free-solid-svg-icons'
import ProjectPage from './pages/projects/projects.component';
import AboutPage from './pages/about/about.component';
import ReactGA from 'react-ga';
library.add(faPortrait, fab, faLaptop, faFolder, faHome)

class App extends Component {
  setGA = () => {
    ReactGA.initialize('G-2T9G4184DV');
    ReactGA.pageview('Init page view');
  };
  componentDidMount(){
    this.setGA();
  }
  render() {
    return (
      <div>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/projects' element={<ProjectPage/>} />
        <Route exact path='/about' element={<AboutPage/>} />
      </Routes>
      <ContactInfo />
    </div>
    );
  }
}

export default App;
