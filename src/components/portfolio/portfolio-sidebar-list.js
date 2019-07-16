import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioSidebarList = (props) => {
    const portfolioList = props.data.map((portfolioItem, idx) => {
        return (
            <div key={idx} className="portfolio-item-thumb">
                <div className="portfolio-thumb-image">
                    <img src={portfolioItem.thumb_image_url}/>
                </div>
                <div className="text-content">
                    <div className="title">{portfolioItem.name}</div>
                    <a onClick={() => props.handleDeleteClick(portfolioItem)}>
                        <FontAwesomeIcon icon="trash" />
                    </a>
                </div>
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