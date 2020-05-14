import React from 'react';

export default (props) => (
    <li className="item">
        <h2>{props.item.name}</h2>
        <p>
        {
            props.item.dietaries.map(dietry => <span key={dietry} className="dietary">{dietry}</span>)
        }
        </p>
        <button onClick={() => {props.removeItem(props.item.id)}} className="remove-item">x</button>
    </li>
);