import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../style/loops.css";

export default class C2_1 extends Component {
  render() {
    return (
      <div className="loop-container">
        <Link to="/c2_2">
          <img src={require("../../../img/aapl-xom.png")} className="center" />
        </Link>
        <Link to="/c2_2">
          <p>
            Silicon Valley pioneer Apple finally surpassed Exxon Mobil
            <br /> as the world’s most highly capitalised corporation.
          </p>
        </Link>

        {/* Link to source */}
        <a
          href="https://seekingalpha.com/article/457861-apple-vs-exxon-mobil-market-cap-comparison"
          target="_blank"
          className="source"
        >
          <p>Source</p>
        </a>
      </div>
    );
  }
}
