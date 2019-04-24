import React, { Component } from "react";

export default class Result extends Component {
  render() {
    return (
      <div className="result">
        <a href="/" className="resultName">
          Name
        </a>
        <p className="resultSmall">
          ...the web using Google Try our special searches: Uncle Sam Search
          millions... ...web's Linux resources ©1998 Google Inc....
        </p>
        <p className="resultURL resultSmall">www.google.com/</p>
      </div>
    );
  }
}
