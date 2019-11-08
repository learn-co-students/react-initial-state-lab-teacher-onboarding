// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsLeft: this.props.initialCount
        };
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    tick() {
        this.setState({
            secondsLeft: this.state.secondsLeft - 1
        })
    };



    render() {
        return <div>
            { this.state.secondsLeft < 1 ? 
                "Boom!" : 
                `${this.state.secondsLeft} seconds left before I go boom!` }
        </div>
    };
};