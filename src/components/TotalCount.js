import React from 'react';

export default (props) => (
    <div className="col-6 menu-summary-left">
        <span>{props.selectedItems.length} items</span>
    </div>
);