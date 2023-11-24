import React from "react";
import "./MyPart6.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";

const MyPart6 = () => {
  return (
    <div className="container MyPart6">
      <Container className="containerComponent">
        <Row className="rowTop">
          <Col className="topCol">
            <h2>
              <i class="bi bi-controller"></i> Sports update
            </h2>
            <p>
              Get the latest sports news and updates from football, tennis,
              formula one, cricket, NBA, and golf with live scores and stats
            </p>
          </Col>
        </Row>
        <Row className="rowBottom">
          <Col className="left">
            <img
              src="https://steamuserimages-a.akamaihd.net/ugc/1674737804623973279/2DD9EE7D451095EF961F4BFE9E6EA0DB47749562/?imw=512&amp;imh=341&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"
              alt="airBallon"
            />
            <div className="toTheTop">
              <div className="btns">
                <Button variant="danger" className="button">
                  <i class="bi bi-circle-fill"></i>Travel
                </Button>
              </div>
              <h1>8 initial problem of startups and their solution</h1>
              <div className="imgText">
                <img
                  src="https://yt3.ggpht.com/ytc/AKedOLStFFTWm8KmIiY6gltHJM9h9hkv5bzsvTYT7DNp=s900-c-k-c0x00ffffff-no-rj"
                  alt="VP"
                />
                <ul>
                  <li>
                    <a href="!#">by Carolyn</a>
                  </li>
                  <li>
                    <a href="!#">Feb 28, 2022</a>
                  </li>
                  <li>
                    <a href="!#">6 min read</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col className="left">
            <img
              src="https://img.sdcexec.com/files/base/acbm/scn/image/2022/07/AdobeStock_170443196.62e4143dc9d8d.png?auto=format%2Ccompress&fit=max&q=70&w=1200"
              alt="airBallon"
            />
            <div className="toTheTop">
              <div className="btns">
                <Button variant="warning" className="button">
                  <i class="bi bi-circle-fill"></i>Technology
                </Button>
              </div>
              <h1>Business ideas that will boom in upcoming year</h1>
              <div className="imgText">
                <img
                  src="https://blogzine.webestica.com/assets/images/avatar/01.jpg"
                  alt=""
                />
                <ul>
                  <li>
                    <a href="!#">by Billy</a>
                  </li>
                  <li>
                    <a href="!#">Jul 19, 2022</a>
                  </li>
                  <li>
                    <a href="!#">2 min read</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyPart6;
