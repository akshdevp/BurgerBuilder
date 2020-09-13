import React from 'react';
import classes from './Button.css';

const button = (props) =>  (

    // eslint-disable-next-line no-unused-expressions
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')} disabled={props.disabled} onClick={props.Clicked}>
        {props.children}
    </button>

)

export default button;