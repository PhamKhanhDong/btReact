import React from "react"
import ReactDOM from "react-dom";
import $ from "jquery";

var list;

export default class ListNote extends React.Component {

  addDiv() {
    ReactDOM.render(<InputDiv/>, document.getElementById("div-add"));
  }

  constructor() {
    super();
    this.state = {mang: []}
    list = this;
  }

  render() {
    return(
      <div className="list_note">
        <div id="div-add"></div>
        <input type="button" value="them" onClick={this.addDiv}/>
        {
          this.state.mang.map(function(note, index){
            return(
              <Note key={index} id={index}>{note}</Note>
            );
          })
        }
      </div>
    );
  }

  componentDidMount() {
    var that = this;
    // $.post("http://localhost:8888/list-note", function(data){
    //   console.log(data);
    //   that.setState({mang: data});
    // });

    $.ajax({
      url: "http://localhost:8888/list-note",
      type: "POST",
      success: function(data) {
        that.setState({mang: data});
      }
    });
  }
}


class Note extends React.Component {

  constructor() {
    super();
    this.state = ({onEdit: false});
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.save = this.save.bind(this);
  }

  save() {
    $.ajax({
      url: "http://localhost:8888/edit",
      type: "POST",
      data: {id: this.props.id, value: this.refs.txtNote.value},
      success: function(data) {
        list.setState({mang: data});
      }
    });
    this.setState({onEdit: false});
  }

  cancel() {
    this.setState({onEdit: false});
  }

  edit() {
    this.setState({onEdit: true});
  }

  delete() {
    $.ajax({
      url: "http://localhost:8888/delete",
      type: "POST",
      data: {id: this.props.id},
      success: function(data) {
        list.setState({mang: data});
      }
    });
  }

  render() {
    if (this.state.onEdit) {
      return(
      <div className="note">
        <input type="text" defaultValue={this.props.children} ref="txtNote"/>
        <input type="button" value="luu" onClick={this.save} />
        <input type="button" value="huy" onClick={this.cancel} />
      </div>);
    } else {
      return(
      <div className="note">
        {this.props.children}
        <input type="button" value="delete" onClick={this.delete} />
        <input type="button" value="edit" onClick={this.edit} />
      </div>);
    }
  }
}

class InputDiv extends React.Component  {
  constructor() {
    super();
    this.send = this.send.bind(this);
  }


  send() {
    $.ajax({
      url: "http://localhost:8888/add",
      type: "POST",
      data: {note: this.refs.txt.value},
      success: function(data) {
        list.setState({mang: data});
      }
    });

    // list.state.mang.push(this.refs.txt.value);
    ReactDOM.unmountComponentAtNode(document.getElementById("div-add"));
    // console.log(list.state.mang);
  }

  render() {
    return(
      <div>
        <input type="text" ref="txt" placeholder="Enter your note..."/>
        <input type="button" value="save" onClick={this.send}/>
      </div>
    );
  }
}
