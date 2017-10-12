import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './sass/app.scss';

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <h3>Hi electron! How is all of the things!</h3>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
