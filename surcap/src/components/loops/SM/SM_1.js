import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../style/loops.css";

export default class SM_1 extends Component {
  render() {
    return (
      <div>
        <div className="loop-container dual">
          <Link to="/sm_3">
            <img
              src={require("../../../img/ford-assembly-line.jpg")}
              className="center large"
            />
          </Link>
          <Link to="/sm_3">
            <p>
              Henry Ford reduced the price of an automobile
              <br />
              by 60 percent with a revolutionary industrial logic
              <br />
              that combined high volume and low unit cost.
              <br />
              He called it "mass production"
            </p>
          </Link>
        </div>
        <div className="loop-container dual">
          <Link to="/sm_3">
            <img
              src={require("../../../img/ipod-newsweek.jpg")}
              className="center"
            />
          </Link>
          <Link to="/sm_3">
            <p>
              The iPod/iTunes innovations flipped this century-old industrial
              logic,
              <br />
              leveraging the new capabilities of digital technology
              <br />
              to invert the consumption experience.
            </p>
          </Link>

          {/* Link to source */}
          <a
            href="https://www.nytimes.com/2011/08/10/world/europe/10spain.html"
            target="_blank"
            className="source"
          >
            <p>Source</p>
          </a>
        </div>
      </div>
    );
  }
}
