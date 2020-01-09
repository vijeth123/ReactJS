import React from 'react';
import ReactDOM from 'react-dom';
import Option from './Option.js'

const Options = (props) => (
                               <div>
                                   <ol>{props.options.map(o => <li key = {o}><Option key = {o} option = {o}/></li>)}</ol>
                               </div>
                           );
export default Options;