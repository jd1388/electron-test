import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    render() {
        return (
            <div class='app'>
                <p>Hi electron! How stuf!</p>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
