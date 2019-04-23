import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FizzBuzzCalculations from './Calculations';


class FizzBuzzInput extends React.Component {
  constructor(props) {
    super(props);
    var nothing=8;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onValueChange(e.target.value);
  }

  render() {
    const value = this.props.value;
    return (
      <fieldset>
        <legend>Enter input value:</legend>
        <input className="fizzbuzzinput" value={value}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class FizzBuzzMessage extends React.Component {
  
  render() {
    const value = this.props.value
    
    return (
      <div className="fizzBuzzMessage">
        <h2>{value}</h2>
      </div>);
  };
}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleFizzBuzzChange = this.handleFizzBuzzChange.bind(this);
    this.state = {valueIn: ''};
  }

  handleFizzBuzzChange(value) {
    this.setState({valueIn: value})
  }

  render() {
    const calc = new FizzBuzzCalculations();

    const input = this.state.valueIn;
    const output = calc.getValue(input)

    return (
      <div>
        <FizzBuzzInput value={input}
          onValueChange={this.handleFizzBuzzChange} />
          <hr/>
        <FizzBuzzMessage value={output}/>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The FizzBuzz Challenge!</h1>
        </header>
        
        <div className="App-form">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;