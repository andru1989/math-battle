import React, { Component } from 'react';

export default class Countdown extends Component {
  componentDidMount() {
    this.interval = setInterval(this.props.tick, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div>
        <h4>{this.props.secondsRemaining}</h4>
      </div>
    );
  }
}
