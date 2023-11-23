import React from "react";
import "./MyPart2.scss";
import Card from "./Card/Card";

const MyPart2 = ({ urlImg, text, avatar, byWhome, date, ...props }) => {
  return (
    <div className="container myPart2">
      <div className="top">
        <h2>
          <i class="bi bi-megaphone"></i>Today's top highlights
        </h2>
        <p>Latest breaking news, pictures, videos, and special reports</p>
      </div>
      <div className="bottom">
        <Card
          urlImg="https://blogzine.webestica.com/assets/images/blog/4by3/10.jpg"
          text="This is why this year will be the year of startups"
          avatar="https://blogzine.webestica.com/assets/images/avatar/10.jpg"
          byWhome="by Samuel"
          date="Dec 07.2022"
          textBtn="Photography"
          variant="primary"
        />

        <Card
          urlImg="https://blogzine.webestica.com/assets/images/blog/4by3/11.jpg"
          text="Best Pinterest Boards for learning about business"
          avatar="https://d2xqcz296oofyv.cloudfront.net/wp-content/uploads/2020/12/Education-scaled.jpg"
          byWhome="by Dennis"
          date="Sep 07.2022"
          textBtn="Technology"
          variant="warning"
        />

        <Card
          urlImg="https://blogzine.webestica.com/assets/images/blog/4by3/09.jpg"
          text="This is why this year will be the year of startups"
          avatar="https://ae04.alicdn.com/kf/S153d0ec69f3346ecb4f67d0ee46f5aedN.jpg"
          byWhome="by Joan"
          date="Jun 07.2022"
          textBtn="Marketing"
          variant="success"
        />

        <Card
          urlImg="https://blogzine.webestica.com/assets/images/blog/4by3/07.jpg"
          text="This is why this year will be the year of startups"
          avatar="https://clever-lady.ru/wp-content/uploads/2023/07/1638462530_68-uhd-name-p-shapka-magistra-devushka-krasivo-foto-84-scaled.jpg"
          byWhome="by Lori"
          date="Mar 07.2022"
          textBtn="Sport"
          variant="danger"
        />

        {/* <div className="imgBox">
          <img src={urlImg} alt="" className="mainImg" />
          <p className="text">{text}</p>
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
        <div className="imgBox">
          <img src={urlImg} alt="" className="mainImg" />
          <p className="text">{text}</p>
          <div className="author-date">
            <img
              src="https://blogzine.webestica.com/assets/images/avatar/10.jpg"
              alt=""
            />

            <ul>
              <li>
                <a href="!#">by Samuel</a>
              </li>
              <li>
                <a href="!#">Dec 07.2022</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="imgBox">
          <img src={urlImg} alt="" className="mainImg" />
          <p className="text">{text}</p>
          <div className="author-date">
            <img
              src="https://blogzine.webestica.com/assets/images/avatar/10.jpg"
              alt=""
            />

            <ul>
              <li>
                <a href="!#">by Samuel</a>
              </li>
              <li>
                <a href="!#">Dec 07.2022</a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MyPart2;
