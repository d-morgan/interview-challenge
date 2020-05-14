import React from 'react';
import FullMenuItem from './FullMenuItem';

export default (props) => (
    <div className="col-4">
        <ul className="item-picker">
        {
            props.items.map(item => <FullMenuItem key={item.id} addItem={props.addItem} item={item} />)
        }
        </ul>
    </div>
);