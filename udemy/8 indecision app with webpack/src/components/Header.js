import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
                              <div>
                                  <h2>{props.title}</h2>
                                  <p>{props.subtitle}</p>
                              </div>
                          );
export default Header;