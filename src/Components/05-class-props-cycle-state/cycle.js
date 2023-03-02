import React from "react";

class Cycle extends React.Component{
  
  state = {
    title: "Jurassic Park 🦕"
  }

  componentDidMount(){
    console.log("DidMount => 0");
  }
  
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate => 1");
    return true
  }

  handleChange = () => {
  this.setState({title: "Le livre de la Jungle 🐻"})
  }

  componentDidUpdate(){
    console.log("componentDidUpdate => 2");
  }




  render(){
    const {title} = this.state
    return(
      <>
        {title} <br /><br />
        <button onClick={this.handleChange}>Change Title</button>
      </>
    )
  }
}

export default Cycle;