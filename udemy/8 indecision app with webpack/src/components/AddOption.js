import React from 'react';
import ReactDOM from 'react-dom';

const AddOption = (props) => (
                                 <div>
                                     <form onSubmit = {props.formSubmit}>
                                         <input type = 'text' name = 'option'/>
                                         <button>Add Option</button>
                                     </form>
                                 </div>
                             );
export default AddOption;