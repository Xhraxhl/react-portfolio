import React, {Component} from 'react';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor () {
        super();
        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Quick", category: "Speedy"},
                {title: "Magic", category: "Spells"},
                {title: "Apples", category: "Food"},
                {title: "H", category: "Its H"},
            ],
            isLoading: false,
        };
        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item =>{
                return item.category == filter;
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        })
    }
    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Don't say it"
        })
    }
    render() {
        if(this.state.isLoading) {
            return(
                <div>Loading...</div>
            )
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                
                <button onClick={this.handlePageTitleUpdate}>Change Title</button>

                {this.portfolioItems()}

                <hr/>

                <button onClick={() => this.handleFilter('Speedy')}>Speedy</button>
                <button onClick={() => this.handleFilter('Spells')}>Spells</button>
                <button onClick={() => this.handleFilter('Food')}>Food</button>
                <button onClick={() => this.handleFilter('Its H')}>Its H</button>
            </div>
        )
    }
}