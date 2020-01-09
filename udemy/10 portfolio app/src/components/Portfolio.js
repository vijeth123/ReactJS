import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h3>My Work</h3>
        <p>Check out the following things I have done..</p>
        <p><Link to = "/portfolio/1">Item One</Link></p>
        <p><Link to = "/portfolio/2">Item Two</Link></p>
    </div>
);

export default Portfolio;