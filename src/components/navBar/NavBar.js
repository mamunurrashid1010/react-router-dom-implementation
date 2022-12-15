import React, { Component } from 'react';
import {Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/About">ABOUT</Link></li>
                    <li><Link to="/Contact">CONTACT</Link></li>
                    <li><Link to="/UrlParamPassValue/1">Pass Value</Link></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;