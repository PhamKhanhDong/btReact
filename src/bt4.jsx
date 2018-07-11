import React from "react";

export default class Bt4 extends React.Component {
  render() {
    return (
      <div className="bt2">
        <p>{this.props.children}</p>
        <img src={this.props.src} alt={this.props.children}/>
      </div>
    );
  }
}
