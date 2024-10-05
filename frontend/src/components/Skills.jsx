import React from "react";
import "react-multi-carousel/lib/styles.css";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import Carousel from "react-multi-carousel";
import gradientbackground from "../assets/gradient-background.jpg";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                tempora, est culpa optio mollitia alias ut ipsa commodi quis
                sint?
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <FaReact size={200} color="#61DBFB" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <SiMysql size={200} color="#4479A1" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <SiMongodb size={200} color="#47A248" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <FaJsSquare size={200} color="#F7DF1E" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <FaNodeJs size={200} color="#68A063" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <SiExpress size={200} color="#fff" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <FaHtml5 size={200} color="#E34F26" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <FaCss3Alt size={200} color="#1572B6" />
                  <h5>CSS3</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={gradientbackground}
        alt="Image"
      />
    </section>
  );
}

export default Skills;
