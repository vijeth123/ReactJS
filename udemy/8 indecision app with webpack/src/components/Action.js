import React from 'react';
import ReactDOM from 'react-dom';

const Action = (props) =>
                     (
                         <div>
                             <button disabled = {!props.isAnyOptionPresent} onClick = {props.pickOption}>What should I do?</button>
                             <button disabled = {!props.isAnyOptionPresent} onClick = {props.removeAllOptions}>Remove All</button>
                         </div>
                     );

export default Action;