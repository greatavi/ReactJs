import React, { Component } from 'react';
import ReactDOM from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    count:0
  };
  }
  increment(value){
    this.setState({
      count: this.state.count + value
    })
  }

  render() {
    return (
      <div className="App">
        <div className = "container">
        <h1>COUNTS {this.state.count}</h1>
        <button className = "button" onClick = {this.increment.bind(this, 1)}> Add 1</button>
        <button className = "button" onClick = {this.increment.bind(this, 5)}> Add 5</button>
        <button className = "button" onClick = {this.increment.bind(this, 10)}> Add 10</button>
        </div>  
      </div>
    );
  }
}


export default App


