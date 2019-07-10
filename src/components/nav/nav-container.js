import React from 'react';
import {NavLink} from 'react-router-dom';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

const NavComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return(
            <div className="nav-link-wrapper">
                <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>
            </div>
        );
    }

    const handleSignOut = () => {
        Axios.delete("https://api.devcamp.space/logout", {withCredentials:true});
        if (Response.status === 200) {
            props.history.push("/");
            props.handleSuccessfulLogout();
        }
        return Response.data;
    }
    
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
                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/blog","blog") : null}
            </div>
            <div className="right-side">
                REEEEEEEEEEEEEEEEEEEEEEEE
                {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut}>Sign Out</a> : null}
            </div>
        </div>
    );
};

export default withRouter(NavComponent);