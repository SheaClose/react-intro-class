import React, { Component } from 'react';
import calculatorImg from '../../calculator.png';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Calculator',
      display: '0',
      operator: '',
      temp: 0,
      resetDisplay: false
    };
  }
  updateHeader(val) {
    this.setState({ header: val });
  }
  setDisplay(num) {
    if (this.state.display.length === 13 || this.state.display === 'ERROR') {
      return this.setState({ display: 'ERROR' });
    }
    if (this.state.display[0] === '0') {
      return this.setState({ display: num });
    } else {
      return this.setState({ display: this.state.display + num });
    }
  }
  clearDisplay() {
    this.setState({ display: '0', temp: 0, operator: '', resetDisplay: false });
  }
  calculate() {
    if (this.state.operator === '') return;
    var result;
    switch (this.state.operator) {
      case '+':
        result =
          parseInt(this.state.temp, 10) + parseInt(this.state.display, 10);
        break;
      case '-':
        result =
          parseInt(this.state.temp, 10) - parseInt(this.state.display, 10);
        break;
      case '*':
        result =
          parseInt(this.state.temp, 10) * parseInt(this.state.display, 10);
        break;
      case '/':
        result =
          parseInt(this.state.temp, 10) / parseInt(this.state.display, 10);
        break;
      default:
        break;
    }
    this.setState({ display: String(result) });
  }
  setOperator(operator) {
    if (!this.state.operator) {
      this.setState({
        display: '0',
        temp: this.state.display,
        operator: operator
      });
    }
  }
  render() {
    return (
      <div id="calculator-container">
        <input
          id="header-input"
          onChange={e => this.updateHeader(e.target.value)}
        />
        <h1 id="header"> {this.state.header} </h1>
        <img
          className="remove-highlight"
          src={calculatorImg}
          alt="calculator"
        />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total">{this.state.display}</span>
          </div>

          <div onClick={() => this.clearDisplay()} className="btn clear" />

          <div onClick={() => this.setDisplay('0')} className="btn zero" />
          <div onClick={() => this.setDisplay('1')} className="btn one" />
          <div onClick={() => this.setDisplay('2')} className="btn two" />
          <div onClick={() => this.setDisplay('3')} className="btn three" />
          <div onClick={() => this.setDisplay('4')} className="btn four" />
          <div onClick={() => this.setDisplay('5')} className="btn five" />
          <div onClick={() => this.setDisplay('6')} className="btn six" />
          <div onClick={() => this.setDisplay('7')} className="btn seven" />
          <div onClick={() => this.setDisplay('8')} className="btn eight" />
          <div onClick={() => this.setDisplay('9')} className="btn nine" />

          <div onClick={() => this.calculate()} className="btn equal" />
          <div onClick={() => this.setOperator('*')} className="btn multiply" />
          <div onClick={() => this.setOperator('/')} className="btn divide" />
          <div onClick={() => this.setOperator('-')} className="btn subtract" />
          <div onClick={() => this.setOperator('+')} className="btn add" />
        </div>
      </div>
    );
  }
}
