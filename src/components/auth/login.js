import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errorText: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        axios.post("https://api.devcamp.space/sessions",
        {
            client: {
                username: this.state.username,
                password: this.state.password,
            }
        },
        {withCredentials: true},
        ).then(response => {
            if(response.data.status === "created") {
                console.log("accessed");
            } else {
                this.setState({
                    errorText: "Wrong credentials"
                });
                this.props.handleUnsuccessfulAuth();
            }
        })
        .catch(error => {
            this.setState({
                errorText: "An error occured"
            });
            this.props.handleUnsuccessfulAuth();
        });
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        });
    }

    render() {
        return(
            <div>
                <h1>LOGIN TO ACCESS THE APPLES</h1>
                <h3>{this.state.errorText}</h3>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="username" 
                        name="username" 
                        placeholder="Username" 
                        value={this.state.username} 
                        onChange={this.handleChange} />
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