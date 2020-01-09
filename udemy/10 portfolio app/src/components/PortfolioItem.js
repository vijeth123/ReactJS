import React from 'react';

const PortfolioItem = (props) => (
                                     <div>
                                          <h3>A Thing I have done</h3>
                                          <p>This page is for the item with id of: {props.match.params.id}</p>
                                     </div>
                                 );

export default PortfolioItem;