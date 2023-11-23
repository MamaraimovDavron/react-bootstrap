import React from "react";
import "./MyPart5.scss";
import Figure from "react-bootstrap/Figure";

const MyPart5 = () => {
  return (
    <div className="container shadow light MyPart5">
      <div className="textTitle">
        <h2>Trending topics</h2>
        <a href="!#">View all categories</a>
      </div>
      <Figure className="figure">
        <div className="block">
          <Figure.Image
            alt="171x180"
            src="https://blogzine.webestica.com/assets/images/blog/1by1/thumb/01.jpg"
            className="figureImg"
          />
          <h3>Travel</h3>
        </div>
        <div className="block">
          <Figure.Image
            alt="171x180"
            src="https://blogzine.webestica.com/assets/images/blog/1by1/thumb/02.jpg"
            className="figureImg"
          />
          <h3>Business</h3>
        </div>
        <div className="block">
          <Figure.Image
            alt="171x180"
            src="https://blogzine.webestica.com/assets/images/blog/1by1/thumb/03.jpg"
            className="figureImg"
          />
          <h3>Marketing</h3>
        </div>
        <div className="block">
          <Figure.Image
            alt="171x180"
            src="https://blogzine.webestica.com/assets/images/blog/1by1/thumb/04.jpg"
            className="figureImg"
          />
          <h3>Photography</h3>
        </div>
        <div className="block">
          <Figure.Image
            alt="171x180"
            src="https://blogzine.webestica.com/assets/images/blog/1by1/thumb/05.jpg"
            className="figureImg"
          />
          <h3>Sports</h3>
        </div>
      </Figure>
    </div>
  );
};

export default MyPart5;
