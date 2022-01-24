import Homepage from './pages/homepage/homepage.component';
import './App.css';
import ContactInfo from './components/contact/contact-info.component';
import { Route, Routes } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPortrait, faLaptop, faFolder, faHome } from '@fortawesome/free-solid-svg-icons'
import ProjectPage from './pages/projects/projects.component';
import AboutPage from './pages/about/about.component';
library.add(faPortrait, fab, faLaptop, faFolder, faHome)

function App() {
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

export default App;
