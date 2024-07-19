import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi peeps, please meet <span className="purple">Vico King </span>
            from <span className="purple"> Tanjungpinang, Indonesia.</span>
            <br />
            I am a fresh graduate from Universiti Teknologi Malaysia {"(UTM)"} majoring in Computer Science {"(Software Engineering)"} with Honours.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Valorant
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore new languages
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel and culinary
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "To the better world!"{" "}
          </p>
          <footer className="blockquote-footer">Vico</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
