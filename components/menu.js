import React, { Component } from 'react';

import MenuButton from './menu-button';

import '../sass/menu.scss';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);
        this.displayMenu = this.displayMenu.bind(this);
    }

    toggleMenu() {
        this.setState(previousState => {
            return Object.assign({}, previousState, {
                isOpen: !previousState.isOpen
            });
        });
    }

    displayMenu() {
        if (!this.state.isOpen)
            return;
        
        return (
            <div>This will be the menu</div>
        );
    }

    render() {
        return (
            <div className='menu-container'>
                <MenuButton
                    onClick={this.toggleMenu}
                />
                {this.displayMenu()}
            </div>
        );
    }
}
