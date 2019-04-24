import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../style/loops.css";

export default class SM_3 extends Component {
  render() {
    return (
      <div className="loop-container">
        <Link to="/searchPage1">
          <p>
            No longer content to be anonymous members of the mass,
            <br />
            we feel our entitlement to self-determination.
            <br />
            <br />
            <br />
            This mentality is an extraordinary achievement of the human spirit,
            <br />
            even as it can be a life sentence to uncertainty, anxiety, and
            stress.
          </p>
        </Link>
      </div>
    );
  }
}
