import React, {Component} from 'react';
import './App.css';
import Person from "./Person/person";

class App extends Component {
    state = {
        persons: [
            {name: 'salim', age: 27},
            {name: 'paul', age: 20},
            {name: 'gen', age: 6},
        ]
    };
    changeNameHandler = ()=>{
        // this.state.persons[0].name = 'omrani'
        this.setState({
            persons : [
                {name: 'df', age: 27},
                {name: 'pasfdful', age: 5},
                {name: 'gesn', age: 6},
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <h1>Hi , I'm a React App</h1>
                <button onClick={this.changeNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Yes yes yes</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Yes yes yes</Person>
            </div>
        );
    }
}

export default App;
