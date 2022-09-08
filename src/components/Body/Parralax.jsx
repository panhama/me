import "../../App.css";
import logo from "../../assets/img/logo-hover.png";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
// import glass from "../../assets/img/Glass.png";

const Container = styled.div`
position: absolute; 
`;

const Card = styled.div`
  border-radius: 10px;
  background-color: rgba(255,255,255,0.1);
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(10px);
  height: 300px;
  width: 450px;
  padding: 1rem;
`;

const CardImage = styled.img`
  transform: translateZ(25px);
  max-width: 50%;
`;

export default function Parallax({S,glass}) {
  return (
    <div>
      <Container style={S}>
        <Tilt
          className="tilt"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.2}
          gyroscope={true}
        >
        <Card>
            <CardImage src={glass} alt="glass" />
          </Card>
        </Tilt>
      </Container>
    </div>
  );
}
