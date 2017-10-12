import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    render() {
        return (
            <p>Hi electron! How stuf!</p>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
