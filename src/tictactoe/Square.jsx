import React from 'react';
import './styles.css';
//the square..

export default function Square(props){
    return(
        <button className="Square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}