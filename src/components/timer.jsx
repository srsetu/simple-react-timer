import React from 'react';
import Button from './button';
import '../index.css';

class App extends React.Component {
  state = {
    count: 0,
  };

  intervalId = null;

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  startTimer = () => {
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert('Timer Finished');
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  resetTimer = () => {
    if (!this.intervalId) {
      this.setState({ count: 0 });
    }
  };

  render() {
    return (
      <div className="App">
        <Button onClick={this.decrementCount} buttonText="-" />
        <span>{this.state.count}</span>
        <Button onClick={this.incrementCount} buttonText="+" />
        <div>
          <Button onClick={this.startTimer} buttonText="Start" />
          <Button onClick={this.stopTimer} buttonText="Stop" />
          <Button onClick={this.resetTimer} buttonText="Reset" />
        </div>
      </div>
    );
  }
}

export default App;
