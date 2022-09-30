// import "./Portfolio.css";
import { Container, Row, Col } from "react-bootstrap";
import google from "../../assets/img/googleLogo.png";
import facebook from "../../assets/img/metaLogo.png";
import uta from "../../assets/img/utaLogo.png";
import udemy from "../../assets/img/udemy.png";
import P1 from "../../assets/img/P1.jpg";
export default function Portfolio(props) {
    return <div >
    <Container> 
    <Row>        
            <Col md={6} lg={true}> 
                    <img src={P1} alt="" width="60%" style={{marginTop:"-75px",position:"relative",display:"inline"}}/>
                      </Col> 
                      <Col md={6} lg={true}>              
            <div  className="mx-auto" > 
            <h2>Meet Panha  <span> Ma</span> </h2> 
            <p>Hello there i'm Pan, i am a developer and UX/UI designer from Dallas, Fort Worth. 
             I have a passion for creating beautiful and functional websites and applications.
             I am currently a student at the University of Texas at Arlington, pursuing a Bachelors in Computer Science. 
           I am also a self taught UX/UI designer, i have a google certification in UX/UI designing. </p>
            <div>
            <h1>HERE ARE MY SKILLS</h1>
                    <h2> HTML CSS JAVASCRIPT REACT </h2>
                    <h2> C# ASP.NET CORE NODE JS MONGO DB  </h2>
                    <img src={uta} alt="google logo" width={50} style={{display:"inline"}}></img> 
                     <img src={google} alt="google logo" width={50} type="button" onClick={()=>{window.location.href="https://coursera.org/share/011439ca9cc0b7b64a7650bd0dbf09b4"}}  style={{display:"inline"}}/>
                     <img src={facebook} alt="google logo" width={75} type="button" onClick={()=>{window.location.href="https://www.coursera.org/account/accomplishments/verify/B6LQ6P7NWS4E"}}  style={{display:"inline"}}/>
                     <img src={udemy} alt="google logo" width={76} type="button" onClick={()=>{window.location.href="https://www.udemy.com/certificate/UC-ebbb55b0-0604-45a2-b606-b1f8c2d0a135"}}  style={{display:"inline",marginLeft:"-25px"}}/>
                      </div> 
            </div>
            </Col>  
    </Row> 
</Container> 
</div> ; 
}