import React from "react";
import Bt4 from "./bt4.jsx";

export default class List extends React.Component {

  constructor() {
    super();
    this.state = {mang: [
        {src: "images/1.jpg", des: "hello"},
        {src: "images/2.jpg", des: "hi"},
        {src: "images/3.jpg", des: "react"}
      ]
    }
    this.add = this.add.bind(this);
  }

  add() {
    this.state.mang.unshift({src: "images/1.jpg", des: "hello"});
    this.setState(this.state.mang);
  }

  render() {
    return(
      <div>
        <button onClick={this.add}>Add</button>
        {
          this.state.mang.map(function(note, index){
            return <Bt4 key={index} src={note.src}>{note.des}</Bt4>
          })
        }
      </div>
    );
  };
}
