import React, { Component } from 'react';

import '../sass/menu-button.scss';

export default class MenuButton extends Component {
    render() {
        const { onClick } = this.props;
        
        return (
            <div>
                <div 
                    className='menu-button-container button1'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button2'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button3'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button4'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button5'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button6'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button7'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button8'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button9'
                    onClick={onClick}
                ></div>
                <p></p>
                <div 
                    className='menu-button-container button1p'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button2p'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button3p'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button4p'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button5p'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button6p'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button7p'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button8p'
                    onClick={onClick}
                ></div>
                <div 
                    className='menu-button-container button9p'
                    onClick={onClick}
                ></div>
            </div>
        );
    }
}
