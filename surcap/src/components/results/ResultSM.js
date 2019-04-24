import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ResultSM extends Component {
  render() {
    return (
      <div className="result">
        <Link to="/sm_1">Second Modernity</Link>
        <p className="resultSmall">
          The iPod/iTunes innovations flipped this century-old industrial logic,
          leveraging the new capabilities of digital technology to invert the
          consumption experience.
        </p>
        <p className="resultURL resultSmall">/sm</p>
      </div>
    );
  }
}
