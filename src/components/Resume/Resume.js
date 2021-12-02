import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Cv _HoudaBoukhobza_UPDATED.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="End of year Project [ENETCOM]"
              date="March 2021 - May 2021"
              content={[
                "Design and development of an application for the control and supervision of an industrial process via a web server.",
                " Technologies : Angular, SpringBoot, MySQL "
              ]}
            />
            <Resumecontent
              title="WEB Developer Intern  [T&M Consulting  ]"
              date="July 2021 - September 2021"
              content={[
                "Analyze, design and development of an Admin dashboard for maintaining and controlling a mobile application within T&M Consulting.",
                " Technologies : ReactJs, Redux,Hooks, ChartJs, Firebase ,Cloud-Firestore "
              ]}
            />
              <Resumecontent
              title="Internship  [STT]"
              date="July 2021 - September 2021"
              content={[
                "Design and development of a web application for services and products management within the STT",
                " Technologies : Html5 ,Css3 ,Bootstrap,Php,MySQL "
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Preparatory Cycle for engineering studies PC "
            
              content={[`"2016- 2019"`]}
            />
            <Resumecontent
              title="Engineering diploma in Industrial Computer Science "
            
              content={[`"2019 - Present"`]}
            />
            

<h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              
              content={[
                "Membre actif au club ENACTUS Enet’com",
                " Membre actif à l’association JID à Djerba",
                "Membre au croissant rouge Tunisien  - Midoun Djerba "
              ]}
            />

            
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
