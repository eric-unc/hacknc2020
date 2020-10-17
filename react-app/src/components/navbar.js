import React, {Component} from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import '../App.css';

export default class NavBar extends Component {
    state = {};

    render() {
        return (
            <Navbar>
                <NavBar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                    </Navbar.Item>
                </NavBar.Brand>
            </Navbar>
            /*<nav id="top-nav" className="navbar" aria-label="main-navigation">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <h1 className="title is-1" >TAR HEEL CALENDAR</h1>
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                Sign Up
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>

                    </div>
                </div>

            </nav>*/
        );
    }
}
