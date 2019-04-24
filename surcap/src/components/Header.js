import React, { Component } from "react";
import { Link } from "react-router-dom";
import googleBetaLogo from "./../img/google-beta-logo.jpg";
import "./../style/Header.css";

export default class Header extends Component {
  handleKeyPress = event => {
    //Array of all possible searchs
    var searchStrings = [
      "Who are surveillance capitalists?",
      "Am I being surveilled?",
      "Is surveillance capitalism legal?"
    ];
    var firstSearchString = "What is surveillance capitalism?";
    //Converts firstSearchString into an array of its members (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
    var searchStringArray = Array.from(firstSearchString);
    //Gets length of current sting in the search bar
    var i = document.getElementById("search-bar").value.length;
    //Does search if enter pressed
    if (event.key === "Enter") {
      this.handleSearch();
      //Limits length of characters entered to the dictated query
    } else if (i < 32) {
      //Append the current vaule insode the search bar with the next letter in the search query
      document.getElementById("search-bar").value += searchStringArray[i];
      console.log(searchStringArray[i]);
      i++;
    } else {
      console.log("STOP TYPING FOOL");
    }
  };

  render() {
    return (
      <header>
        <a href="./../">
          <img
            src={googleBetaLogo}
            id="logo"
            max-width="351"
            max-height="113"
            alt="Google!"
          />
        </a>
        <form id="header-form">
          <input
            className="header-input"
            maxLength="256"
            name="q"
            size="31"
            type="text"
            onKeyPress={this.handleKeyPress}
            id="search-bar"
            readOnly="readonly"
            placeholder="Just keep searching!"
          />
          <input className="header-input" type="button" value="Google Search" />
          <input
            className="header-input"
            type="button"
            value="I'm feeling lucky"
          />
        </form>
        <hr />
        <p id="search-meta">
          Showing results <strong>1-10</strong> of approximately{" "}
          <strong>234,000</strong> for <strong>google</strong>. Search took{" "}
          <strong>0.06</strong> seconds.
        </p>
      </header>
    );
  }
}
