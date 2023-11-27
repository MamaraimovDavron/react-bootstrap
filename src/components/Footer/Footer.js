import React from "react";
import "./Footer.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";

export default function Footer() {
  let socialMedias = ["Facebook", "Twitter", "Linkedin", "YouTube"];
  let icons = [
    "bi bi-facebook",
    "bi bi-twitter",
    "bi bi-linkedin",
    "bi bi-youtube",
  ];

  return (
    <Container className="container Footer">
      <Row className="row">
        <Col className="part-one">
          <img
            src="https://blogzine.webestica.com/assets/images/logo.svg"
            alt=""
          />
          <p>
            The next-generation blog, news, and magazine theme for you to start
            sharing your stories today! This Bootstrap 5 based theme is ideal
            for all types of sites that deliver the news.
          </p>
          <span>©2023 Webestica. All rights reserved</span>
        </Col>
        <Col className="part-two">
          <h3>Navigation</h3>
          <div className="box">
            {/* first */}
            <ul className="firstUl">
              <li>
                <a href="!#">Features</a>
              </li>
              <li>
                <a href="!#">Style Guide</a>
              </li>
              <li>
                <a href="!#">Contact us</a>
              </li>
              <li>
                <a href="!#">Get Theme</a>
              </li>
              <li>
                <a href="!#">Support</a>
              </li>
            </ul>
            {/* second */}
            <ul className="secondtUl">
              <li>
                <a href="!#">News</a>
              </li>
              <li>
                <a href="!#">
                  Career{" "}
                  <Button variant="danger" id="btnDanger">
                    2 Job
                  </Button>
                </a>
              </li>
              <li>
                <a href="!#">Technology</a>
              </li>
              <li>
                <a href="!#">Startups</a>
              </li>
              <li>
                <a href="!#">Gadgets</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="part-three">
          <h3>Browse by Tag</h3>
          <div className="btns">
            <Button variant="outline-primary" className="btn">
              Travel
            </Button>
            <Button variant="outline-warning" className="btn">
              Business
            </Button>
            <Button variant="outline-success" className="btn">
              Tech
            </Button>
            <Button variant="outline-danger" className="btn">
              Gadgets
            </Button>
            <Button variant="outline-primary" className="btn">
              Lifestyle
            </Button>
            <Button variant="outline-primary" className="btn">
              Vaccine
            </Button>
            <Button variant="outline-warning" className="btn">
              Marketing
            </Button>
            <Button variant="outline-success" className="btn">
              Sports
            </Button>
            <Button variant="outline-danger" className="btn">
              Covid-19
            </Button>
            <Button variant="outline-primary" className="btn">
              Politics
            </Button>
          </div>
        </Col>
        <Col className="part-four">
          <h3>Our Social handles</h3>
          <ul>
            {socialMedias.map((item, index) => {
              return (
                <li>
                  <a href="!#">
                    <i class="bi bi-youtube"></i>
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
