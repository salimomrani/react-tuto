import React, {Component} from 'react';
import './App.css';
import Person from "./Person/person";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi , I'm a React App</h1>
                <Person name="salim" age="25">Yes yes yes</Person>
            </div>
        );
    }
}

export default App;
