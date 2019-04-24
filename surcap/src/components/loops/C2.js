import React, { Component } from "react";
import "../../style/loops.css";

export default class C2 extends Component {
  render() {
    return (
      <div id="loop-container">
        <a href="#">
          <img src={require("../../img/aapl-xom.png")} />
          <p>
            Silicon Valley pioneer Apple […] finally surpassed Exxon Mobil as
            the world’s most highly capitalised corporation.
          </p>
        </a>

        {/* Link to source */}
        <a href="#" className="source">
          <p>Source</p>
        </a>
      </div>
    );
  }
}
