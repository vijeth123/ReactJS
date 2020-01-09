import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore.js';
import { addExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch(addExpense({
                              description : 'Water bill', amount: 4500, createdAt: 100
                          }));

store.dispatch(addExpense({
                              description : 'Gas bill', amount: 5000, createdAt: 50
                          }));

store.dispatch(addExpense({
                              description : 'Rent', amount: 5500, createdAt: 75
                          }));

store.dispatch(setTextFilter(''));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('abc'));