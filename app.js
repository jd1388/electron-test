import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import MainContent from './components/main-content';

import './sass/app.scss';

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <Menu className='app-menu'/>
                <MainContent className='app-main-content'/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
