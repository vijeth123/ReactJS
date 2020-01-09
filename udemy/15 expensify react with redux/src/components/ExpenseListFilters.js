import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input type = 'text' value = {props.filtersList.text} onChange = {(e) => {
            const newFilterText = e.target.value;
            props.dispatch(setTextFilter(newFilterText));
        }}/>

        <select onChange = {(e) => {
            const selectedOption = e.target.value;
            console.log(selectedOption);
            if(selectedOption == 'date'){
                props.dispatch(sortByDate());
            } else if(selectedOption == 'amount'){
                props.dispatch(sortByAmount());
            }
        }}>
            <option value = 'date'>Date</option>
            <option value = 'amount'>Amount</option>
        </select>

    </div>
);

const mapStateToProps = (state) => {
    return {
        filtersList: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);