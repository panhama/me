import "./Mobile.css";
import { Nav } from "react-bootstrap";
import P1 from "../../assets/img/P1.jpg";
export default function Mobile()
 {
    return (
        <div className="Mobile" >
        <img src={P1} alt="" style={{borderRadius:"50%",width:"200px",display:"inlineBlock", position: "relative",margin:"auto"}} />
        <div  style={{textAlign:"center"}}>
        <h1>Panha Ma</h1>
        <Nav.Link style={{fontWeight:"bold"}} href="#/skills">Website</Nav.Link>
              <Nav.Link style={{fontWeight:"bold"}} href="#/project">Twitter</Nav.Link>
              <Nav.Link style={{fontWeight:"bold"}} href="#/photography">Youtube</Nav.Link>
              <Nav.Link style={{fontWeight:"bold"}} href="#/pricing">Github</Nav.Link>
              <Nav.Link style={{fontWeight:"bold"}} href="#/pricing">linkedin</Nav.Link>
        </div>
        </div>
    );
    }
