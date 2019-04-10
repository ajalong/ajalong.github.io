import React, { Component } from "react";
//Helmet used to manage <head> (https://www.npmjs.com/package/react-helmet)
import { Helmet } from "react-helmet";
import "./App.css";
import googleBetaLogo from "./img/google-beta-logo.jpg";

class App extends Component {
  //Dictates what is typed in the search bar (https://stackoverflow.com/questions/27827234/how-to-handle-the-onkeypress-event-in-reactjs)
  handleKeyPress = event => {
    var firstSearchString = "Surveillance Capitalism";
    //Converts firstSearchString into an array of its members (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
    var searchStringArray = Array.from(firstSearchString);
    //Gets length of current sting in the search bar
    var i = document.getElementById("search-bar").value.length;
    //Limits length of characters entered to the dictated query
    if (i < 23) {
      //
      document.getElementById("search-bar").value += searchStringArray[i];
      i++;
    }
  };

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Surveillance Capitalism</title>
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
            max-width="351"
            max-height="113"
            alt="Google!"
          />
          <div id="search-container">
            <p id="search-pre-text">Search the web using Google!</p>
            <input
              id="search-bar"
              type="text"
              onKeyPress={this.handleKeyPress}
              readonly="readonly"
            />
            <br />
            <input type="submit" value="Google Search" />
            <input type="submit" value="I'm feeling lucky" />
          </div>
          <div id="container">
            <div id="left" className="grid">
              <ul id="first-list" className="list">
                <li>Special Searches</li>
                <li>
                  <a
                    href="http://web.archive.org/web/19990427131732/http://www.google.com/stanford"
                    target="_blank"
                  >
                    Standford Search
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
          <p class="small">Copyright ©1999 Google Inc.</p>
        </header>
      </div>
    );
  }
}

export default App;
