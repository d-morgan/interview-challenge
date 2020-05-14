import React from 'react';
import './App.css';
import FullMenu from './components/FullMenu';
import SubMenu from './components/SubMenu';
import DietryBreakdownMenu from './components/DietryBreakdownMenu';
import TotalCount from './components/TotalCount';

import items from './items';


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedItems: []};
  }

  addItem = (item) => {
    this.setState(state => {
      const selectedItems = state.selectedItems.concat(item);
      return {
        selectedItems
      };
    })
  }

  removeItem = (id) => {
    this.setState(state => {
      const selectedItems = state.selectedItems.filter(item => item.id !== id);
      return {
        selectedItems
      };
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="menu-summary">
          <div className="container">
            <div className="row">
              <TotalCount selectedItems={this.state.selectedItems} />
              <DietryBreakdownMenu selectedItems={this.state.selectedItems} />
            </div>
          </div>
        </div>
        <div className="container menu-builder">
          <div className="row">
          <FullMenu items={items} addItem={this.addItem} /> 
          <SubMenu selectedItems={this.state.selectedItems} removeItem={this.removeItem} />
          </div>
        </div>
      </div>
    )}
};
