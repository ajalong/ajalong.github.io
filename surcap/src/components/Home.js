import React, { Component } from "react";
//Helmet used to manage <head> (https://www.npmjs.com/package/react-helmet)
import { Helmet } from "react-helmet";
import "./../style/Launch.css";
import googleBetaLogo from "./../img/google-beta-logo.jpg";
import { withRouter } from "react-router-dom";
import SearchPage1 from "./searchPages/SearchPage1";

class Launch extends Component {
  //Dictates what is typed in the search bar (https://stackoverflow.com/questions/27827234/how-to-handle-the-onkeypress-event-in-reactjs)
  handleKeyPress = event => {
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

  handleSearch = event => {
    //Gets length of current sting in the search bar
    var i = document.getElementById("search-bar").value.length;
    //Forces user to input full search query
    if (i < 32) {
      console.log("Press more buttons");
    } else {
      //Show SearchPage
      console.log(i);
      this.props.history.push("/searchpage1");
    }
  };

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Surveillance Capitalism - Launch</title>
          <meta
            name="description"
            content="Documenting surveillance capitalism"
          />
          <meta
            name="keywords"
            content="surveillance capitalism, surveillance, capitalism, alan long, ajalong, shoshana zuboff"
          />
        </Helmet>
        <header className="App-header">
          <img
            src={googleBetaLogo}
            max-width="238.031"
            max-height="78"
            alt="Google!"
          />
          <form id="search-container" onClick={this.handleSearch}>
            <p id="search-pre-text">Search the web using Google!</p>
            <input
              id="search-bar"
              type="text"
              onKeyPress={this.handleKeyPress}
              readOnly="readonly"
            />
            <br />
            <input type="button" value="Google Search" />
            <input type="button" value="I'm feeling lucky" />
          </form>
          <div id="container">
            <div id="left" className="grid">
              <ul id="first-list" className="list">
                <li>Special Searches</li>
                <li>
                  <a
                    href="http://web.archive.org/web/19990427131732/http://www.google.com/stanford"
                    target="_blank"
                  >
                    Stanford Search
                  </a>
                </li>
                <li>
                  <a
                    href="http://web.archive.org/web/19990423192928/http://www.google.com/linux"
                    target="_blank"
                  >
                    Linux Search
                  </a>
                </li>
              </ul>
            </div>
            <div id="center" className="grid small">
              <ul className="list">
                <li>
                  <a href="">Why use google!</a>
                </li>
                <li>
                  <a href="">Press about google!</a>
                </li>
                <li>
                  <a href="">Help!</a>
                </li>
                <li>
                  <a href="">Company Info</a>
                </li>
                <li>
                  <a href="">Jobs at Google</a>
                </li>
                <li>
                  <a href="">Google! Logos</a>
                </li>
                <li>
                  <a href="">Making Google! the Default</a>
                </li>
              </ul>
            </div>
            <div id="right" className="grid small">
              <p>Get Google! updates monthly:</p>
              <input type="text" value="your e-mail" />
              <br />
              <input type="submit" value="Subscribe" />
              <a href="">Archive</a>
            </div>
          </div>
          <p className="small">Copyright ©1999 Google Inc.</p>
        </header>
      </div>
    );
  }
}

export default withRouter(Launch);
