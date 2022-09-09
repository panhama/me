import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../../assets/img/logo-small.png";
import twitter from "..//../assets/img/twitter.svg";
import instagram from "..//../assets/img/instagram.svg";
import linkedin from "..//../assets/img/linkedin.svg";
import Button from ".././Buttons/Button";
export default function Footer () {
  return (
    <footer className="footer" style={{margin:"-150px 0 -100px 0"}}>
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://twitter.com/panha_ma"><img src={twitter} alt="Icon" /></a>
              <a href="https://www.instagram.com/rezoluti0n/"><img src={instagram} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/ma-panha-526417237/"><img src={linkedin} alt="Icon" /></a>
            </div>
            {/* <a> <Button text="CONTACT ME" /> </a>  */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
