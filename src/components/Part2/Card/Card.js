import React from "react";
import "../MyPart2.scss";
import Button from "react-bootstrap/esm/Button";

export default function Card({
  urlImg,
  text,
  avatar,
  byWhome,
  date,
  variant,
  textBtn,
}) {
  return (
    <div className="imgBox">
      <img src={urlImg} alt="" className="mainImg" />
      <p className="text">{text}</p>
      <Button variant={variant} className="btn">
        <i class="bi bi-circle-fill"></i>
        {textBtn}
      </Button>
      <div className="author-date">
        <img src={avatar} alt="" />

        <ul>
          <li>
            <a href="!#">{byWhome}</a>
          </li>
          <li>
            <a href="!#">{date}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
