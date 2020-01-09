import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h3>404 Not Found page!</h3>
        <Link to = "/">Go Home</Link>
    </div>
);

export default NotFoundPage;