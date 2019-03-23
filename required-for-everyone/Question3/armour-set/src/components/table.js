import React, { Component } from 'react';

class InventoryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableVals: props.inventory,
        }
    }
  render() {
    return (
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Armor Type</th>   
            <th scope="col">Name</th>
            <th scope="col">Cost in Crowns</th>
            <th scope="col">Armor value</th>
          </tr>
        </thead>
        <tbody>
        {this.state.tableVals.map(({armourType, name, costInCrowns, armourValue}, i) => (
            <tr key={i}>
            <th scope="row">{armourType}</th>
            <td>{name}</td>
            <td>{costInCrowns}</td>
            <td>{armourValue}</td>
          </tr>
        ))}
        </tbody>
      </table>
    );
  }
}

export default InventoryTable;
