import { useState,useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ButtonGlow from "../../components/Buttons/Button";
import logo from "../../assets/img/logo-small.png";
import twitter from "..//../assets/img/twitter.svg";
import instagram from "..//../assets/img/instagram.svg";
import linkedin from "..//../assets/img/linkedin.svg";
import github from "..//../assets/img/github.svg";
import discord from "..//../assets/img/discord.svg";
import "./Navbar.css";


export const Navigation = ()=>{

  const [activeLink, setActiveLink] = useState('home');
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     }

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, [])
//  <Navbar expand="md" className={scrolled ? "scrolled" : ""}> 
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (<Navbar expand="md">

        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#/skills" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Skills</Nav.Link>
              <Nav.Link href="#/project" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Projects</Nav.Link>
              <Nav.Link href="#/photography" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Photography</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {/* <a href="https://twitter.com/panha_ma"><img src={twitter} alt=""/></a> */}
                <a href=""><img src={github} alt=""/></a>
                <a href=""><img src={discord} alt=""/></a>
                <a href="https://www.instagram.com/rezoluti0n/"><img src={instagram} alt=""/></a>
                <a href="https://www.linkedin.com/in/ma-panha-526417237/"><img src={linkedin} alt=""/></a>
               
              </div>
              {/* <button className="vvd"><span>Let’s Connect</span></button> */}
            </span>
              <a href="#/contactme"> <ButtonGlow text={"CONTACT ME"}></ButtonGlow> </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )};


