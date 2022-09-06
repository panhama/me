import Carousel from 'react-bootstrap/Carousel';
// import CarouselComponent from "./CarouselComponents.jsx";
import { useRef } from 'react';
import img1 from "../../assets/img/C1.jpg";
import img2 from "../../assets/img/C2.jpg";
import img3 from "../../assets/img/C3.jpg";
import img4 from "../../assets/img/C4.jpg";
import img5 from "../../assets/img/C8.jpg";

 



function Carousels() {



    return <Carousel>
    {/* <CarouselComponents img="img1" title="hello" text="world"/>
    <CarouselComponents img="img3" title="hello" text="world"/> */}
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={img5}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>{"title"}</h3>
      <p>{"text"}</p>
    </Carousel.Caption>
  </Carousel.Item>  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>{"title"}</h3>
      <p>{"text"}</p>
    </Carousel.Caption>
  </Carousel.Item>  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>{"title"}</h3>
      <p>{"text"}</p>
    </Carousel.Caption>
  </Carousel.Item>  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>{"title"}</h3>
      <p>{"text"}</p>
    </Carousel.Caption>
  </Carousel.Item>  

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>{"title"}</h3>
      <p>{"text"}</p>
    </Carousel.Caption>
  </Carousel.Item>  

      </Carousel>
    
    
  }
  
  export default Carousels;