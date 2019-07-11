import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const NavComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return(
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">{linkText}</NavLink>
            </div>
        );
    }

    // Signout function that doesnt seem to work because of the <a> tag that is unclickable
    const handleSignOut = () => {
        axios.delete("https://api.devcamp.space/logout", {withCredentials:true});
        if (Response.status === 200) {
            props.history.push("/");
            props.handleSuccessfulLogout();
        }
        return Response.data;
    }
    
    // html part of the navbar
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
                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/portfoliomanager","Portfolio Manager") : null}
                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/blogmanager","Blog Manager") : null}
            </div>
            <div className="right-side">
                REEEEEEEEEEEEEEEEEEEEEEEE  
                {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut()}>Sign Out</a> : null}
            </div>
        </div>
    );
};

export default withRouter(NavComponent);