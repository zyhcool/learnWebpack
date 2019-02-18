import * as config from "../config/config.json";
import * as React from "react";

export default class Greeter extends React.Component {
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    )
  }
}