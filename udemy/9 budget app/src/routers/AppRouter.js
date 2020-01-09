import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';

const ExpensifyHeader = () => (
    <header>
        <h1>Expensify</h1>
        <p><Link to = "/">Home</Link></p>
        <p><Link to = "/create">Create</Link></p>
        <p><Link to = "/edit/987">Edit</Link></p>
        <p><Link to = "/help">Help</Link></p>
    </header>
);

const AppRouter = () => (
        <BrowserRouter>
            <div>
                <ExpensifyHeader/>
                <Switch>
                    <Route path = "/" component = {ExpenseDashboardPage} exact = {true}/>
                    <Route path = "/create" component = {AddExpensePage}/>
                    <Route path = "/edit/:id" component = {EditExpensePage}/>
                    <Route path = "/help" component = {HelpPage}/>
                    <Route component = {NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
);

export default AppRouter;