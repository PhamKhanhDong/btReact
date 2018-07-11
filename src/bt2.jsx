import React from "react";
export default class bt2 extends React.Component {

  constructor() {
    super();
    this.state = {hinh: 1}
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    // this.state.hinh=(this.state.hinh===7)?7:this.state.hinh+1;
    this.setState({hinh: (this.state.hinh===7)?7:this.state.hinh+1});
    // console.log(this.state.hinh);
  }

  prev() {
    // this.state.hinh=(this.state.hinh===1)?1:this.state.hinh-1;
    this.setState({hinh: (this.state.hinh===1)?1:this.state.hinh-1});
  }

  render() {
    return(
      <div className="bt2">
        <button onClick={this.prev}>prev</button>
        <button onClick={this.next}>next</button>
        <hr/>
        <img alt="test" src={"images/"+ this.state.hinh +".jpg"}/>
      </div>
    );
  }
}
