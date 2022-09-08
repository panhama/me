import {useEffect,useState} from "react";
import "./Banner.css";
import { Container, Row, Col } from "react-bootstrap";
import Parallax from "./Parralax";
import Glass from "../../assets/img/Glass.png";
// import TrackVisibility from "react-on-screen";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import CardStack from "../Buttons/CardStack";
// import Button from "../../components/Buttons/Button";
import img1 from "../../assets/img/crop.png";
export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    
return <div className="banner">
<Container>
        <Row>
            <Col md={6}>
   
    <h1 className="panhama">
    PANHA MA
        </h1> 
        <h1>
        <span className="title">FULLSTACK</span> <span className="title-no">DEVELOPER</span> 
        </h1>       
        {/* <img src={img1} style={{display:"inlineFlex",position:"absolute",right:"30rem",bottom:"10px"}} alt="yes"></img> */}
    </Col>
    <Col md={6}>
    <Parallax S={{right:"20%",bottom:"40%"}} glass={Glass}/>
    </Col>
    </Row>
</Container>
</div>
};