import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { HashRouter } from 'react-router-dom'; 
import {Navigation} from "./components/Navbar/Navbar";
import {Banner} from "./components/Body/Banner";
import Carousels from "./components/Body/Carousel";
import Skills from "./components/Body/Skills";
import {PolaroidBase} from "./components/Polaroid/PolaroidBase";
import Photography from "./components/Body/Photography";
import ContactMe from './components/Body/ContactMe';
import Footer from './components/Footer/Footer';
import Portfolio from "./components/Body/Portfolio";
import "./App.css";
import Error from './components/Body/Error';
import { StickyNote } from './components/StickyNote/StickyNote';
import Mobile from './components/Body/Mobile';

function App() {
    return (
    // <Router basename={process.env.PUBLIC_URL}>
    <HashRouter >
            <Routes>
                <Route path="/mobile" element={<div><Mobile/></div> } />
            <Route exact path="/beta" element={<div>  <Navigation/><Banner/> <Skills/> <PolaroidBase/> <Photography/> <Carousels/> <ContactMe/> <Footer/>  </div>}/>
                <Route exact path="/stickynote" element={<div>   <StickyNote/>  </div>}/>
    {/* <Route exact path="/" element={<div>  <Navigation/> <Banner/> <Skills/> <PolaroidBase/> <Photography/> <Carousels/> <ContactMe/> <Footer/>  </div>}/> */}

    <Route exact path="/photography" element={<div>  <Photography/> <Carousels/> <Footer/>  </div>}/>

    <Route exact path="/portfolio" element={<div>  <Portfolio/> <Footer/>  </div>}/>
    <Route exact path="/contactme" element={<div>   <Navigation/> <ContactMe/> <Footer/>   </div>}></Route>

<Route exact path="*" element={<Error/> }> </Route>
  


            </Routes>
    </HashRouter>
    // </Router>
    );
}


export default App;