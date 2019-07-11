import React, { Component } from 'react';

export default class PortfolioForm extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            description: "",
            category: "",
            position: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log("event",event);

        event.preventDefault();
    }

    render() {
        return(
            <div>
                <h1>Portfolio Form</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="name" placeholder="Item name" value={this.state.name} onChange={this.handleChange} />
                        <input type="text" name="url" placeholder="Item url" value={this.state.url} onChange={this.handleChange} />
                    </div>
                    <div>
                    <input type="text" name="position" placeholder="Item position" value={this.state.position} onChange={this.handleChange} />
                    <input type="text" name="category" placeholder="Item category" value={this.state.category} onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="text" name="description" placeholder="Item Description" value={this.state.description} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}