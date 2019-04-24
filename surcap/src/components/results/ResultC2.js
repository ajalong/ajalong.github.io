import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ResultC2 extends Component {
  render() {
    return (
      <div className="result">
        <Link to="/c2_1">August 9, 2011</Link>
        <p className="resultSmall">
          A decade of explosive digital growth had failed to mitigate the
          punishing austerity of neoliberal economics and the extreme inequality
          that it produced.
        </p>
        <p className="resultURL resultSmall">/c2</p>
      </div>
    );
  }
}
