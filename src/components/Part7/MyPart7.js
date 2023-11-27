import React from "react";
import "./MyPart7.scss";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
// import CardImg from "../Part4/CardImg/CardImg";
import "../Part4/MyPart4.scss";
import Part7Card from "./Part7Card/Part7Card";

const MyPart7 = (props) => {
  return (
    <Container className="MyPart7">
      <Row className="rowTop">
        <Col className="rowTopCol">
          <h2>
            <i class="bi bi-megaphone"></i> Sponsored news
          </h2>
        </Col>
        <Col className="rowTopCol next">
          <a href="!#">Content by: Bootstrap</a>
        </Col>
      </Row>
      <Row className="rowBottom">
        <Col>
          <Part7Card
            imgUrl="https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg"
            variant="outline-danger"
            btnText="Lifestyle"
            h3Text="The pros and cons of business agency"
            avatar="https://blogzine.webestica.com/assets/images/avatar/01.jpg"
            by="by Samuel"
            date="Jan 22, 2022"
          />
        </Col>
        <Col>
          <Part7Card
            imgUrl="https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg"
            variant="outline-warning"
            btnText="Technology"
            h3Text="Around the web: 20 fabulous infographics about business"
            avatar="https://blogzine.webestica.com/assets/images/avatar/05.jpg"
            by="by Jacqueline"
            date="Oct 11, 2022"
          />
        </Col>
      </Row>
      <Row className="rowBottom">
        <Col className="col">
          <Part7Card
            imgUrl="https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg"
            variant="outline-primary"
            btnText="Sports"
            h3Text="5 reasons why you shoudn`t startup"
            avatar="https://blogzine.webestica.com/assets/images/avatar/02.jpg"
            by="by Dennis"
            date="Mar 07, 2022"
          />
        </Col>
        <Col>
          <Part7Card
            imgUrl="https://blogzine.webestica.com/assets/images/blog/4by3/05.jpg"
            variant="outline-primary"
            btnText="Marketing"
            h3Text="7 common mistakes everyone makes while traveling"
            avatar="https://thumbs.dreamstime.com/b/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-%D0%BA%D1%80%D1%83%D0%B3%D0%B0-%D0%B1%D1%83%D0%BA%D0%B2%D1%8B-o-w-%D1%87%D0%B0%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%BE-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%BE%D0%B1%D1%80%D0%B0%D0%B7-%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%D0%B0-%D0%BC%D0%BE%D0%B4%D1%8B-196726097.jpg"
            by="by Dennis"
            date="Mar 07, 2022"
          />
        </Col>
      </Row>
      <Row className="rowBottom">
        <Col>
          <Part7Card
            imgUrl="https://blogzine.webestica.com/assets/images/blog/4by3/03.jpg"
            variant="outline-success"
            btnText="Business"
            h3Text="Five unbelievable facts about money"
            avatar="https://blogzine.webestica.com/assets/images/avatar/03.jpg"
            by="by Bryan"
            date="Jun 17, 2022"
          />
        </Col>
        <Col>
          <Part7Card
            imgUrl="https://blogzine.webestica.com/assets/images/blog/4by3/06.jpg"
            variant="outline-danger"
            btnText="Photography"
            h3Text="5 investment doubts you should clarify"
            avatar="https://blogzine.webestica.com/assets/images/avatar/07.jpg"
            by="by Judy"
            date="Sep 30, 2022"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MyPart7;
