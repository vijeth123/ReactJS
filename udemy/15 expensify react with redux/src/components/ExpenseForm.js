import React from 'react';

export default class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: '',
        error: ''
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState( () => ({ description }) );
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        this.setState(() => ({ amount }));
    }

    formSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            console.log("setting error");
            this.setState(() => ({error: 'Please provide both description and amount.'}));
            console.log(this.state.error)
        } else {
            console.log("No error");
            this.setState(() => ({error: ''}));
            this.props.onSubmit(
                {
                    description : this.state.description,
                    note : this.state.note,
                    amount : this.state.amount,
                    createdAt : this.state.createdAt
                }
            );
        }
    }

    render() {
        return (
            <div>
                <h3>Expense Form</h3>

                {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit = {this.formSubmit}>
                    <input type = 'text'
                        placeholder = 'Description'
                        name = 'description'
                        autoFocus
                        value = {this.state.description}
                        onChange = {this.onDescriptionChange}
                    />

                    <input type = 'number'
                           placeholder = 'Amount'
                           onChange = {this.onAmountChange}
                           value = {this.state.amount}/>

                    <textarea
                        placeholder = 'Add a note for your expense (Optional)'
                        onChange = {this.onNoteChange}
                        value = {this.state.note}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>

                <p>Your entered description is: {this.state.description}</p>
                <p>Your entered note is: {this.state.note}</p>
                <p>Your entered amount is: {this.state.amount}</p>

            </div>
        );
    }
}