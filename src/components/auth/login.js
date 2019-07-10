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

    handleSubmit(event) {
        axios.post("https://api.devcamp.space/sessions",
        {
            client: {
                username: this.state.email,
                password: this.state.password,
            }
        },
        {withCredentials: true},
        ).then(response => {
            if(response.data.status === "created") {
                console.log("accessed");
            } else {
                console.log("not accessed");
                this.setState({
                    errorText: "Wrong credentials"
                });
            }
        })
        .catch(error => {
            console.log(error);
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
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={this.state.email} 
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