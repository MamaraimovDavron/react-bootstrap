import React from "react";
import { Button } from "react-bootstrap";
import "./Part7Card.scss";

const Part7Card = ({ imgUrl, variant, btnText, h3Text, avatar, by, date }) => {
  return (
    <div className="container Part7Card">
      <div className="card">
        <div className="cardImg">
          <img src={imgUrl} alt="" />
        </div>

        <div className="cardText">
          <Button variant={variant} className="btnCard">
            <i class="bi bi-circle"></i> {btnText}
          </Button>
          <h3>{h3Text}</h3>
          <div className="avatar">
            <img src={avatar} alt="" />
            <ul>
              <li>
                <a href="!#">{by}</a>
              </li>
              <li>
                <a href="!#">{date}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part7Card;
