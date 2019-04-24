import React, { Component } from "react";
import Header3 from "../headers/Header3";
import Summary2 from "../results/Summary2";
import Result from "../results/Result";
import Result1 from "../results/Result1";

export default class SearchPage2 extends Component {
  render() {
    return (
      <div style={{ padding: 8 + "px" }}>
        <Header3 />
        <Summary2 />
      </div>
    );
  }
}
