import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import AddOption from './AddOption.js';
import OptionModal from './OptionModal.js'


class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.clearSelectedOption = this.clearSelectedOption.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            options: ['Thing One', 'Thing Two', 'Thing Three'],
            selectedOption: undefined
        };
    }

    removeAll() {
        this.setState(
            () => ({options: []})
        );
    }

    pickOption() {
        const index = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[index];
        this.setState(
            () => ({
                selectedOption: option
            })
        );
    }

    clearSelectedOption() {
        this.setState(
            () => ({
                selectedOption: undefined
            })
        );
    }

    onFormSubmit(e) {
        e.preventDefault();
        const option = e.target.option.value.trim();
        if(option) {
            e.target.option.value = '';
            this.setState(
                (previousState) => {
                    return {options: previousState.options.concat(option)};
                }
            );
        }
    }

    render() {
        return (
            <div>
                <Header title = 'Indecision App' subtitle = 'Life in the hands of a computer'/>
                <Action pickOption = {this.pickOption} isAnyOptionPresent = {this.state.options.length > 0} removeAllOptions = {this.removeAll}/>
                <Options options = {this.state.options}/>
                <AddOption formSubmit = {this.onFormSubmit}/>
                <OptionModal clearSelectedOption = {this.clearSelectedOption} selectedOption = {this.state.selectedOption}/>
            </div>
        );
    }
}
export default IndecisionApp;