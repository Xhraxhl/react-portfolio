import React, {Component} from 'react';
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor () {
        super();
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                {id: "Fun", title: "Fun", category: "Fun", slug: "fun"},
                {id: "Commercial" ,title: "Commercial", category: "Commercial", slug: "commercial"},
                {id: "Other" ,title: "Other", category: "Other", slug: "other"},
            ],
        };
        this.handleFilter = this.handleFilter.bind(this);
        this.getPortfolioItems = this.getPortfolioItems.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item =>{
                return item.category == filter;
            })
        })
    }

    getPortfolioItems() {
        axios
            .get("https://aaaaaaaa.devcamp.space/portfolio/portfolio_items")
            .then(response => {
                this.setState({
                    data: response.data.portfolio_items
                });
            })
                .catch(error => {
                console.log(error);
            });
    }
  
    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem key={item.id} item={item}/>;
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if(this.state.isLoading) {
            return(
                <div>Loading...</div>
            )
        }
        return (
            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter('Fun')}>Fun</button>
                <button className="btn" onClick={() => this.handleFilter('Commercial')}>Commercial</button>
                <button className="btn" onClick={() => this.handleFilter('Other')}>Other</button>
                {this.portfolioItems()}
            </div>
        )
    }
}