import React from 'react';

function Button(props) {
  return <button onClick={props.onClick}>{props.buttonText}</button>;
}

export default Button;
