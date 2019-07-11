import React, { Component } from 'react';
import loginImg from "../../../static/assets/images/login.jpg";
import Login from "../auth/login";

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth=this.handleSuccessfulAuth.bind(this);
        this.handleUnSuccessfulAuth=this.handleUnSuccessfulAuth.bind(this);
    }

    // Successful login
    handleSuccessfulAuth() {
        console.log("successful auth");
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
    }

    // Unsuccessful login
    handleUnSuccessfulAuth() {
        this.props.handleUnSuccessfulLogin();
    }

    // Render the form
    render() {
        return(
            <div className="auth-page-wrapper">
                <div className="left-side" style={{backgroundImage: `url(${loginImg})`}}/>
                <div className="right-side">
                    <Login
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        handleUnSuccessfulAuth={this.handleUnSuccessfulAuth}
                    />
                </div>
            </div>
        );
    }
}