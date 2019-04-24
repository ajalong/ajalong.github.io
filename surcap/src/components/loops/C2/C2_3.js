import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../style/loops.css";

export default class C2_3 extends Component {
  render() {
    return (
      <div className="loop-container">
        <Link to="/c2_4">
          <img
            src={require("../../../img/spain-right-forgotten.jpg")}
            className="center"
          />
        </Link>
        <Link to="/c2_4">
          <p>
            Spanish citizens asserted their rights to a human future when they
            challenged Google
            <br />
            by demanding “the right to be forgotten.”
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
    );
  }
}
