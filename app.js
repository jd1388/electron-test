import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';

import './sass/app.scss';

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <Menu/>
                <h3>Hi electron! How is all of the things!</h3>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
