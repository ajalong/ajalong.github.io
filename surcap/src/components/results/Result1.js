import React, { Component } from "react";

export default class Result extends Component {
  render() {
    return (
      <div className="result">
        <a
          href="https://www.theguardian.com/technology/2010/jan/11/facebook-privacy"
          className="resultName"
          target="_blank"
        >
          Privacy no longer a social norm, says Facebook founder
        </a>
        <p className="resultSmall">
          The rise of social networking online means that people no longer have
          an expectation of privacy, according to Facebook founder Mark
          Zuckerberg.
        </p>
        <p className="resultURL resultSmall">
          https://www.theguardian.com/technology/2010/jan/11/facebook-privacy
        </p>
      </div>
    );
  }
}
