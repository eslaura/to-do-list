import {default as UUID} from "node-uuid";
import React, { Component } from 'react';

class AddItem extends Component {

  constructor(){
    super();
    this.state = {
      newItem:{

      }
    }
  }

 
  componentWillMount() {
    this.id = UUID.v4();
  }

  handleSubmit(e){
    
    console.log(e);
    e.preventDefault();
  
    this.setState({ newItem:{
      title: this.refs.title.value,
      description: this.refs.description.value,
      id: UUID.v4(),
      date: new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear()
    }}, function(){
      this.props.addItem(this.state.newItem);
      this.refs.title.value = "";
      this.refs.description.value = "";
    });
  }



  render() {
    return (
      <div className="additem">
        <form onSubmit={this.handleSubmit.bind(this)} >
          <div>
            <input className="new-title" type="text" ref="title" placeholder="Add an task" required />
          </div>
          <div>
            <textarea type="textarea" ref="description" className="new-description" placeholder="Add a description for your task" />
          </div>
            <button className="button updatebutton" type="submit" value="Add a new item" > Add </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
