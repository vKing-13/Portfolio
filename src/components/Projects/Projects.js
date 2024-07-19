import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mps from "../../Assets/Projects/MPS.png";
import plantlink from "../../Assets/Projects/PlantLink.png";
import aws from "../../Assets/Projects/AWS.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects and certificates I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plantlink}
              isBlog={false}
              title="PlantLink"
              description="A Crop Suggestion IoT System that allows home gardener to get crop suggestion with IoT devices built with Django, bootstrap. This project has a real-time dashboard that uses AWS WebSocket API service."
              ghLink="https://github.com/vKing-13/PlantLink"
              demoLink="https://shiroooo.pythonanywhere.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mps}
              isBlog={false}
              title="Multiperiod Production Smoothing"
              description="Application for manufacturer or company to predict their production in certain range. The mathematical model that we are using are based on undisclosed company's case study. The documentation can be read on 'Multiperiod Production Smoothing Problem.pdf' file. to solve the mathematic model, we ultilized the pulp algorithm from python library which can be used to solve linear programming problems."
              ghLink="https://github.com/vKing-13/multiperiod-production-smoothing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aws}
              isBlog={false}
              title="Microsoft Certified: Azure AI Fundamentals"
              description="Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services."           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
