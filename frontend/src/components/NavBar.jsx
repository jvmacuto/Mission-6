import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import cat from "../assets/cat.png";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onsScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onsScroll);

    return () => {
      window.removeEventListener("scroll", onsScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand>
            <img
              src={cat}
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "project"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>

            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/john-vincent-macuto-178337273/">
                  <FaLinkedin size={20} className="icon-white" />
                </a>
                <a href="https://www.facebook.com/jeeeeeeybiiiii/">
                  <FaFacebook size={20} className="icon-white" />
                </a>
                <a href="https://github.com/jvmacuto">
                  <FaGithub size={20} className="icon-white" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default NavBar;
