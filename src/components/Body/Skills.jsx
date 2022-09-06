import "./Skills.css";
import CardStack from "../Buttons/CardStack";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UX2 from "../../assets/img/UX2.png";
import UX3 from "../../assets/img/UX3.png";
import UX4 from "../../assets/img/UX4.png";
import UX5 from "../../assets/img/UX5.png";
import UX6 from "../../assets/img/UX6.png";
import HiFi from "../../assets/img/HIGH FI.png";
import { Container } from "react-bootstrap";

export default function Skills(params) {
    return <div className="skills">
    <Container>
    {/* style={{position:"absolute",bottom:"-14rem"}} */}
    <Row>
    <h3 > COFFEESHOP UX UI DESIGN PROTOTYPE</h3>
    <Col md={2}>
    <img src={UX2} style={{width:"75%",marginTop:"10rem"}} alt=""></img>
    </Col>
    <Col md={2}>
    <img src={UX3} style={{width:"78%",marginTop:"10rem"}}  alt=""></img>
    </Col>
    <Col md={2}>
    <img src={UX4} style={{width:"76%",marginTop:"10rem"}} alt=""></img>
    </Col>
    <Col md={3}>
    <img src={UX5} style={{width:"75%"}} alt=""></img>
    </Col>
    <Col md={3}>
    <img src={UX6} style={{width:"83%",marginTop:"-9px"}} alt=""></img>
    </Col>
      </Row> 
      <Row>
      <Col>
      <h4> REACT TO THE PROTOYPE VERSION HERE</h4>
      <iframe title="Figma" style={{border:"1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNyzuMnvOmegJfpVBeBwzwX%2FHIGH-FI%3Fpage-id%3D0%253A1%26node-id%3D2%253A282%26viewport%3D398%252C250%252C0.27%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A282" allowFullScreen></iframe>
    {/* <iframe title="Figma" style={{border:"1px solid rgba(0, 0, 0, 0.1)"}} width="1240" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNyzuMnvOmegJfpVBeBwzwX%2FHIGH-FI%3Fpage-id%3D0%253A1%26node-id%3D2%253A282%26viewport%3D540%252C259%252C0.38%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A282" allowFullScreen></iframe> */}
    </Col>
      </Row>
      </Container>  
    </div>
}