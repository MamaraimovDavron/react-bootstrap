import React from "react";
import "./MyPart8.scss";
import Button from "react-bootstrap/esm/Button";

const MyPart8 = () => {
  return (
    <div className="container MyPart8">
      <h1>Never miss a story!</h1>
      <p>
        Get the freshest headlines and updates sent uninterrupted to your inbox.
      </p>

      <div className="box">
        <input type="text" placeholder="Enter your email address" />
        <Button className="btn">Subscribe</Button>
      </div>
      <span>
        By subscribing you agree to our <a href="!#">Privacy Policy</a>
      </span>
    </div>
  );
};

export default MyPart8;
