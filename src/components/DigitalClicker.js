// Code DigitalClicker Component Here

import React from 'react';

export default class DigitalClicker extends React.Component {
<<<<<<< HEAD
=======

>>>>>>> 9d180be7768299f5751d08c675e97841caa319af
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

<<<<<<< HEAD
  clicker = (prevState) => {
    this.setState(prevState => {
      return {timesClicked: prevState.timesClicked + 1}
    })
  }

  render() {
    return (
      <button onClick={this.clicker}>{this.state.timesClicked}</button>
    );
  }
=======
  render() {
    return (
      <button onClick={this.clicker()}>{this.state.timesClicked}</button>
    )
  }

  clicker(pState) {
    this.state.timesClicked++
  }

>>>>>>> 9d180be7768299f5751d08c675e97841caa319af
}
