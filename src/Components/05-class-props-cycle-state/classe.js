import React, { Component } from 'react';
import Enfant from './enfantDeClasse';

class Parent extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Le roi lion 🦁"
    }
  }

  handleChange = (childData) => {
    this.setState({title: childData})
  }

  render() {
    const {title} = this.state
    return (
      <>
        <h1>{title}</h1>
        <Enfant
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

export default Parent;