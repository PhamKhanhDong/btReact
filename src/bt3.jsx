import React from "react";

export default class Bt3 extends React.Component {

  constructor() {
    super();
    this.state = {hinh: 1};
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage() {
    // this.state.hinh = (this.state.hinh%7) + 1;
    this.setState({hinh: (this.state.hinh%7) + 1});
  }

  render() {
    return(
      <div className="bt2">
        <img alt="test" src={"images/"+ this.state.hinh +".jpg"}/>
      </div>
    );
  }

  componentWillMount() {
    // console.log("componentDidMount");
    // setInterval(this.changeImage, 1000);
  }

  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
}
