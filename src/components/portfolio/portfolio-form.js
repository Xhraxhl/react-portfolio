import React, { Component } from 'react';
import axios from 'axios';
import DropzoneComponent from 'react-dropzone-component';

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default class PortfolioForm extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            description: "",
            category: "Fun",
            position: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentConfig = this.componentConfig.bind(this);
        this.djsconfig = this.djsConfig.bind(this);
        this.handleThumbDrop = this.handleThumbDrop.bind(this);
    }

    handleThumbDrop() {
        return {
            addedFile: file => this.setState({ thumb_image: file })
        }
    }

    componentConfig() {
        return {
            iconFiletypes: [".jpg",".png"],
            showFiletypeIcon: true,
            postUrl: "http://httpbin.org/post",
        }
    }

    djsConfig() {
        return {
            addRemoveLinks: true,
            maxFiles: 1,
        }
    }

    buildForm() {
        let formData = new FormData();

        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[category]", this.state.category);
        formData.append("portfolio_item[position]", this.state.position);
        formData.append("portfolio_item[url]", this.state.url);

        if (this.state.thumb_image) {
            formData.append("portfolio_item[thumb_image]", this.state.thumb_image);
        }
        
        return formData;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {

        axios.post("https://aaaaaaaa.devcamp.space/portfolio/portfolio_items", this.buildForm(), { withCredentials: true})
        .then(response => {
            this.props.handleSuccessfulFormSubmission(response.data.portfolio_item);
            console.log("response", response);
        })
        .catch(error => {
            console.log("portfolio form error", error);
        });
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
                    <select name="category" value={this.state.category} onChange={this.handleChange}>
                        <option value="Fun">Fun</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Other">Other</option>
                    </select>
                    </div>
                    <div>
                        <textarea type="text" name="description" placeholder="Item Description" value={this.state.description} onChange={this.handleChange} />
                    </div>
                    <div className="image-uploaders">
                        <DropzoneComponent config={this.componentConfig()} djsconfig={this.djsConfig()} eventHandlers={this.handleThumbDrop()}>

                        </DropzoneComponent>
                    </div>
                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}