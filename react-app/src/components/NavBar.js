import React, {Component} from 'react';
import '../App.css';

export default class NavBar extends Component {
    state = {};

    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href=".">
                        Mad Muzzic
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">Home</a>
                        <a className="navbar-item">About</a>
                    </div>
                </div>
            </nav>
        );
    }
}
