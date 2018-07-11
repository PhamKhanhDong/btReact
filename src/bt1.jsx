import React from "react";
export default class Com extends React.Component {

  constructor() {
    super();
    this.state = {num: 0};
    this.increase = this.increase.bind(this);
  }

  increase() {
    // this.state.num = this.state.num + 1;
    this.setState({num: this.state.num + 1});
  }

  render() {
    return(<input type="button" value={"hello " + this.state.num} onClick={this.increase} />);
  }
}
