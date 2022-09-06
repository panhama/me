
import "./Polaroid.css";
import Col from 'react-bootstrap/Col';

export default function Polaroid({img,location,style}) {
    return <Col md={4} className="PolaroidFrame" style={style}>
    <img src={img} alt="sit"></img>
          <h3> {location} </h3>
          </Col>
         
}  