import React, { Component } from "react";
import Iframe from "react-iframe";

export default class ExternalPage extends Component {
  render() {
    return (
      <Iframe
        url="https://ajalong.com/"
        width="100%"
        height="817vh"
        display="initial"
        position="relative"
      />
    );
  }
}
