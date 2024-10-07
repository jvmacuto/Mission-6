import React from "react";
import image1 from "../assets/z-energy.png";
import { Container, Row, Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import backgroundImage from "../assets/gradient-background.jpg";

function Projects() {
  const projects = [
    {
      title: "Z Energy Project",
      description: "A project for Z Energy",
      imgUrl: image1,
    },
  ];
  return (
    <div>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab three</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCards key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                  <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img src={backgroundImage} alt="" className="background-image-right" />
      </section>
    </div>
  );
}

export default Projects;
