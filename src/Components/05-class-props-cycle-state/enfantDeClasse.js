import React, { Component } from 'react';
import Parent from './classe';

class Enfant extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    this.props.handleChange(title)
  
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name='title' placeholder='New title'/>
          <button type="submit">Valider</button>
        </form>  
      </>
    );
  }
}

export default Enfant;