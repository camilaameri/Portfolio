import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/sushipage1.png";
import projImg2 from "../assets/img/excercisespage.png";
import projImg3 from "../assets/img/project0.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Ordering Food",
      description:
        "A web application that reveals a menu of different varieties of sushi, recommendations, and reviews from people who have ordered.",
      imgUrl: projImg1,
    },
    {
      title: "Exercise App",
      description:
        "Allows you, thanks to an API, to search for the specific body part you want to exercise and provides you with videos on how to perform it.",
      imgUrl: projImg2,
    },
    {
      title: "Future Projects.",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are some of the projects I developed independently to
                    test my knowledge. I am constantly working on different
                    exercises and taking on new challenges.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
