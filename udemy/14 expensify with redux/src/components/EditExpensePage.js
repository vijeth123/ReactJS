import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
               <div>
                   <h3>Editing the expense with id of {props.match.params.id}</h3>
               </div>
           );
}

export default EditExpensePage;