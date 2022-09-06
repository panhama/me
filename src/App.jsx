import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import {Navigation} from "./components/Navbar/Navbar";
import {Banner} from "./components/Body/Banner";
import Carousels from "./components/Body/Carousel";
import Skills from "./components/Body/Skills";
import PolaroidBase from "./components/Polaroid/PolaroidBase";
import Photography from "./components/Body/Photography";
import Footer from './components/Footer/Footer';
import Portfolio from "./components/Body/Portfolio";
import "./App.css";



function App() {
    return (
    <Router basename="/rezoluti0n/">
        <Routes>
    <Route exact path="/" element={<div>  <Navigation/> <Banner/> <Skills/> <PolaroidBase/> <Photography/>  <Carousels/> <Footer/>  </div>}/>
  
    <Route exact path="/photography" element={<div>  <Photography/> <Carousels/> <Footer/>  </div>}/>

    <Route exact path="/portfolio" element={<Portfolio/>}/>
    </Routes>
    </Router>
    );
}


export default App;