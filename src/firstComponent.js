import React, { Component } from 'react';
import './App.css';

class FirstComponent extends Component {
    constructor() {
        super();
        this.state = {
            names: ['Jake', 'Jon', 'Thruster'],
            object: { nom: "NOM", prenom: "PRENOM", age: 18 },
            condition: false,
            test: "hgsdfli",
            arrayList: [{id: 0, nom: "NOM2", prenom: "PRENOM2", age: 18 }, 
                        {id: 1, nom: "TEST", prenom: "TEST2", age: 28 }]
        }
    }

    conditionnal = (condition) => {
        if (condition) {
            return <p>PROUT</p>
        } else {
            return <p>PAS PROUT</p>
        }
    }

    rename = (event) => {
        this.setState({
            object: {
                ...this.state.object,
                nom: event.target.value
            }
        })
    }

    rename2 = (event) => {
        this.setState({ test: event.target.value })
    }

    deleteArray = (id) => {
        let newArray = this.state.arrayList.filter(function(el) {
            return el.id !== id;
        });
        this.setState({
            arrayList: newArray
        })
    }

    getArray = () => {
        let arrayList;
        return arrayList = this.state.arrayList.map((myList, i) => {
            return <li key={i}>
            M./Mme {myList.nom} {myList.prenom}, {myList.age} ans <button onClick={() => this.deleteArray(myList.id)}>Delete</button>
            </li>
        })
    }

    render() {
        let namesList = this.state.names.map(function (name, i) {
            return <li key={i}>{name}</li>;
        })
        return (
            <div>
                <h1>TITLE</h1>
                <h2>{this.state.test}</h2>
                <h2>{this.state.object.nom} {this.state.object.prenom.toLocaleLowerCase()}</h2>
                <div>First external Component {this.conditionnal(false)}</div>
                <ul>{namesList}</ul>
                <ul>{this.getArray()}</ul>
                <input id="bite" type="text" value={this.state.object.name} onChange={this.rename} />
                <button onClick={this.rename}>Change name</button>
            </div>
        );
    }
}

export default FirstComponent;