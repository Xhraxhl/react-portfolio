import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorText: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Submit button responses for login
    handleSubmit(event) {
        // Push info to api
        axios.post("https://api.devcamp.space/sessions",
        {
            client: {
                email: this.state.email,
                password: this.state.password,
            }
        },
        // IF true log in else return not accessed
        {withCredentials: true},
        ).then(response => {
            if(response.data.status === "created") {
                console.log("accessed");
                this.props.handleSuccessfulAuth();
            } else {
                console.log("rejected");
                this.setState({
                    errorText: "Wrong credentials",
                    email: "",
                    password: ""
                });
                this.props.handleUnSuccessfulAuth();
            }
        })
        .catch(error => {
            console.log(error);
            this.props.handleUnSuccessfulAuth();
        });
        // Prevents page from reloading
        event.preventDefault();
    }

    // For when values in the inputs are changed
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        });
    }

    // Render the component
    render() {
        return(
            <div>
                <h1>LOGIN TO ACCESS THE APPLES</h1>
                <h3>{this.state.errorText}</h3>

                <form onSubmit={this.handleSubmit}>
                    {/* Email input */}
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.handleChange} />
                    {/* Password input */}
                    <input type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={this.state.password}
                        onChange={this.handleChange} />
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}