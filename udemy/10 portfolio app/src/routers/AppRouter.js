import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomePage from '../components/HomePage.js';
import ContactPage from '../components/ContactPage.js';
import Portfolio from '../components/Portfolio.js';
import PortfolioItem from '../components/PortfolioItem.js'

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <p><Link to = "/">Home</Link></p>
        <p><Link to = "/portfolio">Portfolio</Link></p>
        <p><Link to = "/contact">Contact</Link></p>
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path = "/" component = {HomePage} exact = {true}/>
                <Route path = "/portfolio" component = {Portfolio} exact = {true}/>
                <Route path = "/portfolio/:id" component = {PortfolioItem}/>
                <Route path = "/contact" component = {ContactPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;