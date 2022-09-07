import "./Portfolio.css";
import { Container, Row, Col } from "react-bootstrap";
import google from "../../assets/img/googleLogo.png";
import facebook from "../../assets/img/metaLogo.png";
import uta from "../../assets/img/utaLogo.png";
import udemy from "../../assets/img/udemy.png";
export default function Portfolio(props) {
    return <div className={props.class}>
    <Container> 
    <Row>        
        <Col>              
            <div > 
                    <h1> HERE ARE MY SKILLS </h1>
                    <h2> HTML CSS JAVASCRIPT REACT </h2>
                    <img src={uta} alt="google logo" width={50} style={{display:"inline"}}></img> 
                     <a href="https://coursera.org/share/011439ca9cc0b7b64a7650bd0dbf09b4"> <img src={google} alt="google logo" width={50} style={{display:"inline"}}></img> </a>
                     <a href="https://www.coursera.org/account/accomplishments/verify/B6LQ6P7NWS4E"> <img src={facebook} alt="google logo" width={70} style={{display:"inline"}}></img> </a>
                     <a href="https://www.udemy.com/certificate/UC-ebbb55b0-0604-45a2-b606-b1f8c2d0a135"> <img src={udemy} alt="google logo" width={80} style={{display:"inline",marginLeft:"-22px"}}></img> </a>
                     <h2> C# ASP.NET CORE NODE JS MONGO DB  </h2>
            </div>         
        </Col>     
    </Row> 
</Container> 
</div> ; 
}