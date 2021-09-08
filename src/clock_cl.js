
import React, { Component } from "react";

export default class Clock_cl extends Component {
    componentWillMount() {
        console.log('component will mount')
    }
    constructor() {
        super();
        this.state = { date: new Date() }
        console.log('constructor')
    }
    tick() {
        this.setState({ date: new Date() })
    }
    componentDidMount() {
        console.log('did mount')
        setInterval(() => this.tick(), 1000);
    }
    render() {
        console.log('render')
        return (
            <div>
                <p>clock in class</p>
                <p>{this.state.date.toLocaleTimeString()}</p>         
            </div>
        )}
}