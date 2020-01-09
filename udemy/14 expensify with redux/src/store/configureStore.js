import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses.js';
import filtersReducer from '../reducers/filters.js';

export default createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
