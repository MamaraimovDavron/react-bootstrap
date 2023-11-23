import React from "react";
// import CardImg from "./CardImg/CardImg";
import "./MyPart4.scss";
import Button from "react-bootstrap/esm/Button";
import CardImg from "./CardImg/CardImg";

export default function MyPart4() {
  return (
    <div className="container MyPart4">
      <div className="top">
        <h2>
          <i class="bi bi-bookmark-star"></i>
          Last week top highlights
        </h2>
        <p>Check last weeks top highlights, news, stories and headline news</p>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src="https://ink-project.ru/sites/1-ink-project/photoalbums/17699.jpg"
            alt="airBallon"
          />
          <div className="toTheTop">
            <div className="btns">
              <Button variant="primary" className="button">
                <i class="bi bi-circle-fill"></i>Business
              </Button>
              <Button variant="dark" className="button">
                <i class="bi bi-info-circle-fill"></i>Sponsored
              </Button>
            </div>
            <h1>Never underestimate the influence of social media</h1>
            <div className="imgText">
              <img
                src="https://blogzine.webestica.com/assets/images/avatar/01.jpg"
                alt=""
              />
              <ul>
                <li>
                  <a href="!#">by Carolyn</a>
                </li>
                <li>
                  <a href="!#">Jan 26, 2022</a>
                </li>
                <li>
                  <a href="!#">3 min read</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <CardImg
            imgUrl="https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg"
            btnStyle="Lifestyle"
            btnVariant="outline-danger"
            title="The pros and cons of business agency"
            avatar="https://blogzine.webestica.com/assets/images/avatar/02.jpg"
            byWhoom="by Samuel"
            date="Jan 22, 2022"
          />

          <CardImg
            imgUrl="https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg"
            btnStyle="Sports"
            btnVariant="outline-primary"
            title="5 reasons why you shouldn'n startup"
            avatar="https://blogzine.webestica.com/assets/images/avatar/02.jpg"
            byWhoom="by Dennis"
            date="Mar 22, 2022"
          />

          <CardImg
            imgUrl="https://blogzine.webestica.com/assets/images/blog/4by3/03.jpg"
            btnStyle="Business"
            btnVariant="outline-success"
            title="Five unbelievable facts about money"
            avatar="https://blogzine.webestica.com/assets/images/avatar/03.jpg"
            byWhoom="by Bryan"
            date="Jan 17, 2022"
          />
          <CardImg
            imgUrl="https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg"
            btnStyle="Technology"
            btnVariant="outline-warning"
            title="Around the web: 20 fabulous infographics about business"
            avatar="https://blogzine.webestica.com/assets/images/avatar/05.jpg"
            byWhoom="by Jacqueline"
            date="Nov 11, 2022"
          />
        </div>
      </div>
    </div>
  );
}
