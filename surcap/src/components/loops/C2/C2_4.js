import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../style/loops.css";

export default class C2_4 extends Component {
  render() {
    return (
      <div className="loop-container">
        <Link to="/searchPage1">
          <p>
            A decade of explosive digital growth had failed to mitigate the
            punishing austerity of neoliberal economics
            <br />
            and the extreme inequality that it produced.
          </p>
        </Link>
      </div>
    );
  }
}
