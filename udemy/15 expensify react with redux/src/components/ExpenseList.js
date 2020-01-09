import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>{props.expenseList.length}</h1>

        <ol>{props.expenseList.map(e => (
            <li key = {e.id}><ExpenseListItem key = {e.id} value = {e}/></li>
        ))}</ol>

    </div>
);

const mapStateToProps = (state) => {
    return {
        expenseList: selectedExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);
