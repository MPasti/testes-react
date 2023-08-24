import { Component } from "react";

export class Button extends Component {
  render() {
    const { text } = this.props;
    return <button onclick>{text}</button>;
  }
}
