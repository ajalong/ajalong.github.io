import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../style/loops.css";

export default class C2_2 extends Component {
  render() {
    return (
      <div className="loop-container">
        <Link to="/c2_3">
          <img
            src={require("../../../img/london-riots-2011.jpg")}
            className="center"
          />
        </Link>
        <Link to="/c2_3">
          <p>
            A fatal police shooting in London sparked extensive rioting across
            the city,
            <br /> engulfing the country in a wave of violent protests
          </p>
        </Link>

        {/* Link to source */}
        <a
          href="https://www.bbc.co.uk/news/uk-14436499"
          target="_blank"
          className="source"
        >
          <p>Source</p>
        </a>
      </div>
    );
  }
}
