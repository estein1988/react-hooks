import React, {Component} from 'react'
import './App.css';

class App extends Component {

  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState({count: this.state.count + 1})
  }

  decrementCount = () => {
    this.setState({count: this.state.count - 1})
  }

  render(){
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
      );
  }
}

export default App;
