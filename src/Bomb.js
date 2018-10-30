import React, {Component} from 'react'

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = { secondsLeft: props.initialCount }
  }

  timerText = secs =>
    secs === 0 ? 'Boom!': `${secs} seconds left before I go boom!`

  render() {
      return (<h3>{this.timerText(this.state.secondsLeft)}</h3>)
  }
}
