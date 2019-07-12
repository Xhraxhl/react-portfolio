import React from 'react';

const PortfolioSidebarList = (props) => {
    const portfolioList = props.data.map((portfolioItem, idx) => {
        return (
            <div key={idx} className="portfolio-item-thumb">
                <div className="portfolio-thumb-image">
                    <img src={portfolioItem.thumb_image_url}/>
                </div>
                <h1 className="title">{portfolioItem.name}</h1>
                <h2>{portfolioItem.id}</h2>
            </div>
        );
    })

    return(
        <div className="portfolio-items-list-wrapper">
            {portfolioList}
        </div>
    );
}

export default PortfolioSidebarList;