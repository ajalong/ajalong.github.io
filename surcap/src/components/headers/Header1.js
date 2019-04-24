import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import googleBetaLogo from "./../../img/google-beta-logo.jpg";
import "./../../style/Header.css";
import SearchPage2 from "./../searchPages/SearchPage2";

class Header1 extends Component {
  handleKeyPress = event => {
    //Array of all possible searchs
    var searchStrings = [
      "Who are surveillance capitalists?",
      "Am I being surveilled?",
      "Is surveillance capitalism legal?"
    ];
    var secondSearchString = "Who are surveillance capitalists?";
    //Converts firstSearchString into an array of its members (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
    var searchStringArray = Array.from(secondSearchString);
    //Gets length of current sting in the search bar
    var i = document.getElementById("search-bar").value.length;
    //Does search if enter pressed
    if (event.key === "Enter") {
      this.handleSearch();
      //Limits length of characters entered to the dictated query
    } else if (i < 33) {
      //Append the current vaule insode the search bar with the next letter in the search query
      document.getElementById("search-bar").value += searchStringArray[i];
      console.log(searchStringArray[i]);
      i++;
    } else {
      console.log("STOP TYPING FOOL");
    }
  };

  handleSearch = event => {
    //Gets length of current sting in the search bar
    var i = document.getElementById("search-bar").value.length;
    //Forces user to input full search query
    if (i < 33) {
      console.log("Press more buttons");
    } else {
      //Show SearchPage
      console.log(i);
      this.props.history.push("/searchpage2");
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
        <form id="header-form" onClick={this.handleSearch}>
          <input
            className="header-input"
            type="text"
            onKeyPress={this.handleKeyPress}
            id="search-bar"
            readOnly="readonly"
            placeholder="What is surveillance capitalism?"
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

export default withRouter(Header1);
