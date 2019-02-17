import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FizzBuzzCalculations from './Calculations';


class FizzBuzzInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { input: ''};
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleClick() {
    
  }

  render() {
    let valueIn = this.props.value;
    valueIn = this.state.input;
    return (
      <fieldset>
        <legend>Enter input value:</legend>
        <input className="fizzbuzzinput" onChange={this.handleChange} value={valueIn}/>
        <button className="submitBtn" onClick={this.handleClick}>Submit</button>
      </fieldset>
    );
  }
}

class FizzBuzzMessage extends React.Component {
  
  render() {
    const valueOut = this.props.valueOut

    if (!valueOut) {
      return (
        <div className="fizzBuzzMessage"> 
          <h2>Waiting for input...</h2>
        </div>
      );
    }
    
    return (
      <div className="fizzBuzzMessage">
        <h2>{valueOut}</h2>
      </div>);
  };
}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleFizzBuzzChange = this.handleFizzBuzzChange.bind(this);
    this.handleFizzBuzzClick = this.handleFizzBuzzClick.bind(this);
    this.state = {valueIn: 1};
  }

  handleFizzBuzzChange(value) {
    this.setState({valueIn: value})
  }

  handleFizzBuzzClick(){
    console.log(this.valueIn);
  }

  render() {
    const calc = new FizzBuzzCalculations();

    const input = this.state.valueIn;
    const output = calc.getValue(input)

    return (
      <div>
        <FizzBuzzInput value={input}
          onClick={this.handleFizzBuzzChange} />
          <hr/>
        <FizzBuzzMessage valueOut={output}/>
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