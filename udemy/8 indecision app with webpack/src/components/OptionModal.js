import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => (
                              <Modal isOpen = {!!props.selectedOption} contentLabel = 'Selected Option' onRequestClose = {props.clearSelectedOption}>
                                <h3>Selected Option</h3>
                                <p>{props.selectedOption}</p>
                                <button onClick = {props.clearSelectedOption}>Okay</button>
                              </Modal>
                          );

export default OptionModal;