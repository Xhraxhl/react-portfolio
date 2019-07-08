import React from 'react';

export default function(props) {
    return(
        <div>
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>
            <h2>Portfolio Detail for {props.match.params.slug}</h2>
        </div>
    );
}