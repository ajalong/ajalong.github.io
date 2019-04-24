import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header1 from "../headers/Header1";
import Summary from "../results/Summary";
import Result from "../results/Result";
import Result1 from "../results/Result1";
import ResultC2 from "../results/ResultC2";
import ResultSM from "../results/ResultSM";

class SearchPage1 extends Component {
  render() {
    return (
      <div style={{ padding: 8 + "px" }}>
        <Header1 />
        <Summary />
        <Result1 />
        <ResultC2 />
        <Result />
        <ResultSM />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </div>
    );
  }
}

export default withRouter(SearchPage1);
