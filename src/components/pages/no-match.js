import React from 'react';
import {Link} from 'react-router-dom';

export default function() {
    return(
        <div>
            <h2>That doesn't exist</h2>
            <Link to="/">Back to homepage</Link>
        </div>
    )
}