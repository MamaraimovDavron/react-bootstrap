import React from "react";
import "./MyPart1.scss";
import Image from "react-bootstrap/esm/Image";

export default function MyPart1() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <Image
            src="https://blogzine.webestica.com/assets/images/blog/16by9/big/02.jpg"
            className="img"
          />
        </div>

        <div className="colAbove">
          <div className="left-side">
            <span className="lifestyle">
              <a href="!#">
                <i class="bi bi-circle-fill"></i> Lifestyle
              </a>
            </span>
            <h1>10 tell-tale signs you need to get a new startup.</h1>
            <p>
              No visited raising gravity outward subject my cottage Mr be. Hold
              do at tore in park feet near my case.
            </p>
            <div className="block">
              <img
                src="https://blogzine.webestica.com/assets/images/avatar/11.jpg"
                alt=""
              />
              <ul>
                <li>
                  <a href="!#">by Louis</a>
                </li>
                <li>
                  <a href="!#">Jan 01.2022</a>
                </li>
                <li>
                  <a href="!#">5 min read</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-side">
            <div className="imgText">
              <img
                src="https://blogzine.webestica.com/assets/images/blog/16by9/big/02.jpg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
                quia?
              </p>
            </div>
            <div className="imgText">
              <img
                src="https://blogzine.webestica.com/assets/images/blog/16by9/big/01.jpg"
                alt=""
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
                maxime?
              </p>
            </div>
            <div className="imgText">
              <img
                src="https://blogzine.webestica.com/assets/images/blog/16by9/big/03.jpg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                illo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
