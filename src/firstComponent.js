import React, { Component } from 'react';
import './App.css';

class FirstComponent extends Component {
    constructor() {
        super();
        this.state = {
            names: ['Jake', 'Jon', 'Thruster'],
            condition: false
        }
    }

    conditionnal = (condition) => {
        if (condition) {
            return <p>PROUT</p>
        } else {
            return <p>PAS PROUT</p>
        }
    }

    render() {
        let namesList = this.state.names.map(function (name) {
            return <li>{name}</li>;
        })
        return (
            <div>
                <h1>TITLE</h1>
                <p>First external Component {this.conditionnal(false)}</p>
                <ul>{namesList}</ul>
            </div>
        );
    }
}

export default FirstComponent;