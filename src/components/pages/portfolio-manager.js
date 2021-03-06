import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: [],
        }
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick(portfolioItem) {
        axios.delete(`https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem}`, {withCredentials:true})
        .then(response => {
            this.setState({
                portfolioItems: this.state.portfolioItems.filter(item => {
                    return item.id !== portfolioItem.id;
                })
            });
            return response.data;
        })
        .catch(error => {
            console.log("error", error);
        });
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
    }

    handleFormSubmissionError(error) {
        console.log("FormSubmissionError", error);
    }

    getPortfolioItems() {
        axios.get("https://aaaaaaaa.devcamp.space/portfolio/portfolio_items?", {withCredentials: true})
        .then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            })
        })
        .catch(error => {
            console.log("Api call error", error);
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() { 
        return(
            <div>
                <div className="portfolio-manager-wrapper">
                    <div className="form-wrapper">
                        <PortfolioForm
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                        />

                    </div>
                    <div className="go-row">
                        <div className="portfolio-wrapper">
                            <PortfolioSidebarList handleDeleteClick={this.handleDeleteClick} data={this.state.portfolioItems} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}