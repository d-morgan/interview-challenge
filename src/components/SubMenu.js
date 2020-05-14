import React from 'react'
import SubMenuItem from './SubMenuItem';

export default (props) => (
    <div className="col-8">
    <h2>Menu preview</h2>
    <ul className="menu-preview">
    {
        props.selectedItems.map(item => <SubMenuItem key={item.id} item={item} removeItem={props.removeItem} />)
    }
      
    </ul>
  </div>  
);