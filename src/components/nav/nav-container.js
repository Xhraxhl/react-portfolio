import React from 'react';
import {NavLink} from 'react-router-dom';

const NavComponent = (props) => {
    return(
        <div className="nav-wrap">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/contact-me" activeClassName="nav-link-active">Contact</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>
                </div>
            </div>
            <div className="right-side">
                REEEEEEEEEEEEEEEEEEEEEEEE
            </div>
        </div>
    )
}