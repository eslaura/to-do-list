import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import AddItem from './components/addItem'
import List from './components/list'


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
       list: [
        
      ]
    }
  }


  componentWillMount(){

    // This is where you should put api - call

    this.setState({
      list: [
        {
          id: 1,
          date: '11-6-18',
          title: "Washing",
          description: "Clean up my clothes"
        },
        {
          id: 2,
          date: '11-6-18',
          title: "Hoover",
          description: "Hoover the house"
        },
        {
          id: 3,
          date: '9-6-18',
          title: "Ironing",
          description: "Iron all my clothes"
        }
      ]
    })
  }



  handleUpdateItem(item){
    console.log(item);
  }




  handleAddItem(item){
    let list = this.state.list;
    list.push(item);
    this.setState({list: list});

 
  }



  handleDeleteItem(id){
    let list = this.state.list;
    let index = list.findIndex(x => x.id === id);
    list.splice(index, 1);
    this.setState({list: list});

  }

 

  render() {
    return (
      <div className="container">
        <Header title="header"/>
        <div className="wrapper">
          <AddItem addItem={this.handleAddItem.bind(this)}/>
          <List list={this.state.list} onDelete={this.handleDeleteItem.bind(this)} onUpdate={this.handleUpdateItem.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;


