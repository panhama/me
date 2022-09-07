import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Polaroid.css';

import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/4.jpg";
import img5 from "../../assets/img/5.jpg";
import img6 from "../../assets/img/8.jpg";






function Polaroid({img,location,style}) {
  return <Col md={4} className="PolaroidFrame" style={style}>
  <img src={img} alt="sit"></img>
        <h3> {location} </h3>
        </Col>
       
}  
function PolaroidBase() {
    return ( <div className="Dot">
     <h1> A FEW OF MY FAVORITE MOMENTS</h1>
        <Container>
        <Row>
         <Polaroid  img={img3} location="ARIZONA" style={{transform:"rotate(10deg)"}}/>
         <Polaroid  img={img2} location="ARIZONA" style={{transform:"rotate(-10deg)"}}/>
         <Polaroid  img={img4} location="ARIZONA" style={{transform:"rotate(20deg)"}}/>
         <Polaroid  img={img1} location="ARIZONA" style={{transform:"rotate(-20deg)"}}/>
        </Row>
        <Row>
        <Col md={6} style={{paddingTop:"5rem"}}>
        <h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
          </Col>
         <Polaroid  img={img5} location="HAWAII" style={{transform:"rotate(10deg)"}}/>
         <Polaroid  img={img6} location="HAWAII" style={{transform:"rotate(-10deg)"}}/>
        </Row>
      </Container>
      </div>
      );
    }
export {PolaroidBase,Polaroid};