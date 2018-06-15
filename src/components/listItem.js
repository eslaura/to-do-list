import React, { Component } from 'react';



class ListItem extends Component {

  constructor(props){
    super(props);

    this.state = {

        title: "",
        description: "",
      isEditing : false,
      hover: false,
  }

  this.handleChange = this.handleChange.bind(this);
}
  deleteItem(id){
    this.props.onDelete(id);
  }

 clickEdit(){

  this.setState({
      isEditing: true
    })
 }

  clickCancel(){

  this.setState({
      isEditing: false
    })
 }


 handleChange(event) {
  event.preventDefault();
    this.setState({ title: this.refs.title.value,
      description: this.refs.description.value});
    this.setState({
      isEditing: false,
    })
  }

  hoverOn(){
      this.setState({ hover: true });
    }
    hoverOff(){ 
      this.setState({ hover: false });    
    }

  renderActionsSection(){


    if(this.state.isEditing === true){
      return (

        <form className="item"  onSubmit={ this.handleChange }>
          <div>
            <input className="title" type="text" ref="title" placeholder="Update" required />
          </div>
          <div>
            <textarea type="textarea" ref="description" className="description" placeholder="Update your description" required/>
          </div>
            <button className="button" type="submit" > Save </button>
            <button className="button" type="submit" onClick={this.clickCancel.bind(this)} > Cancel </button>
        </form>

        )

    } else if(this.state.title === "") {

      return(

         <div className="item"
            onMouseEnter={this.hoverOn.bind(this)} 
            onMouseLeave={this.hoverOff.bind(this)}>
            <a  href="#" onClick={this.deleteItem.bind(this, this.props.listItem.id)} className="delete">X</a>

           <p>{this.props.listItem.title}</p>
            <p>{this.props.listItem.description}</p>
            <p className="date"> {this.props.listItem.date} </p>
            <button className="button updatebutton" onClick={this.clickEdit.bind(this)} >Update</button>
          </div >
      )

    } else {
      return(

         <div className="item"
           onMouseEnter={this.hoverOn.bind(this)} 
            onMouseLeave={this.hoverOff.bind(this)}>
            <a  href="#" onClick={this.deleteItem.bind(this, this.props.listItem.id)} className="delete">X</a>
            <p>{this.state.title}</p>
            <p>{this.state.description}</p>
            <p className="date"> {this.props.listItem.date} </p>
            <button className="button updatebutton" onClick={this.clickEdit.bind(this)} >Update</button>
          </div >
      )
    }
  }




  render() {
    return (
            <li className="listItem" className={ this.state.hover ? "listItemHover listItem" : "listItem"}>
            {this.renderActionsSection()}

          </li>
    );
  }
}

export default ListItem;
