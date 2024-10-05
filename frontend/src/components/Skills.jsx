import React from "react";
import { Carousel } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaReact } from "react-icons/fa";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                  pariatur dolorum quasi soluta nisi minus distinctio quo
                  ratione eaque eveniet provident itaque, rerum rem quidem.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <FaReact size={50} color="#61DBFB" /> {/* Use React icon */}
                    <h5>React.js</h5>
                  </div>
                  <div className="item">
                    <img src={""} alt="image" />
                    <h5>MySQL</h5>
                  </div>
                  <div className="item">
                    <img src={""} alt="image" />
                    <h5>Express</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Skills;
