import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../style/loops.css";

export default class SM_2 extends Component {
  render() {
    return (
      <div>
        <div className="loop-container dual">
          <Link to="/c2_4">
            <img
              src={require("../../../img/fords.jpg")}
              className="center large"
            />
          </Link>
          <Link to="/sm1_2">
            <p>"You can have any colour you want so long as it's black"</p>
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
        <div className="loop-container dual">
          <Link to="/c2_4">
            <img
              src={require("../../../img/ipod_nano_3rd.jpg")}
              className="center large"
            />
          </Link>
          <Link to="/sm1_2">
            <p>
              The iPod device made it possible for listeners to continuously
              reconfigure their songs at will.
              <br />
              No two iPods were the same. [...] It was exactly what the new
              listeners wanted.
            </p>
          </Link>
        </div>
      </div>
    );
  }
}
