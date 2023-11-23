import React from "react";
import "../MyPart4.scss";
import Button from "react-bootstrap/esm/Button";

export default function CardImg({
  imgUrl,
  btnStyle,
  btnVariant,
  title,
  avatar,
  byWhoom,
  date,
}) {
  return (
    <div className="box">
      <div className="imgBox">
        <img src={imgUrl} alt="" />
      </div>
      <div className="textBox">
        <Button variant={btnVariant} className="btn">
          <i class="bi bi-circle-fill"></i>
          {btnStyle}
        </Button>
        <h3>{title}</h3>
        <span className="avatarText">
          <img src={avatar} alt="" />
          <ul>
            <li>
              <a href="!#">{byWhoom}</a>
            </li>

            <li>
              <a href="!#">{date}</a>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
}
