import React from 'react';

export default (props) => (
    <li className="item" onClick={() => {props.addItem(props.item)}}>
        <h2>{props.item.name}</h2>
        <p>
        {
            props.item.dietaries.map(dietry => <span key={dietry} className="dietary">{dietry}</span>)
        }
        </p>
    </li>
);