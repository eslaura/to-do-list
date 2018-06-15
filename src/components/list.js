import React, { Component } from 'react';
import ListItem from './listItem'

class List extends Component {

  
  constructor(props) {
  super(props);
    this.state = {
    list: []
    }
 
  }

  deleteItem(id){
    this.props.onDelete(id);  
  }
  
 updateItem(id){
  this.props.onUpdate(id);
 }

  order(){
    this.list.reverse();
  }

  updateItem(id){
 
  this.props.onUpdate(id);
 
  }


  render() {

    let listItems

    <button onClick={this.order.bind(this)}></button>

    if(this.props.list){
      listItems = this.props.list.map(listItem => {
      return (
          <ListItem onDelete={this.deleteItem.bind(this)} key={listItem.id} listItem={listItem}/>
        )
    });
  }

    return (
      <div>
        <ul className="list">
          {listItems}
        </ul>
      </div>
    );
  }
}

export default List;
