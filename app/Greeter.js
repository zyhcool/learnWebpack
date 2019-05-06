import * as config from "../config/config.json";
import * as React from "react";
import "./Greeter.css";

export default class Greeter extends React.Component {
  render() {
    return (
      <div className="greeter">
        {config.greetText}
      </div>
    )
  }
}