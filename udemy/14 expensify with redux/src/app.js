import { createStore, combineReducers } from 'redux';
import { addExpense, editExpense, removeExpense } from './actions/expenses.js';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters.js';




store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 200,
    createdAt: 160
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 300,
    createdAt: 159
}));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 555 }));
store.dispatch(setStartDate(125));
store.dispatch(setEndDate(225));
store.dispatch(sortByDate());
store.dispatch(sortByAmount());

const demoState = {
    expenses: [{
        id: '243512wfdsaf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};