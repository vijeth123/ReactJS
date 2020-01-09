import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = (props) => {
    return (
        <div>
            <h3>{props.value.description}</h3>
             <p>{props.value.id} - {props.value.amount} - {props.value.createdAt}</p>
             <button onClick = {() => {
                console.log(props.value.id);
                props.dispatch(removeExpense({ id:   props.value.id }));
             }}>Remove</button>
        </div>

    )
};

const mapStateToProps = (state) => ({
    expensesList: state.expenses
});

export default connect(mapStateToProps)(ExpenseListItem);