import React, { Component } from 'react';
import './App.css';
import InventoryTable from './components/table';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      rawData: props.inventoryData,
      inventory: []
    }
  }

  componentWillMount() {
    this.setState({
      inventory: this.populateNewInventory(this.state.rawData),
    },() => {
      this.getArmourSet(this.state.inventory);
    })
  }

  populateNewInventory(rawData) {
    var res = [];
    var arr = rawData.split("\n");
    for (var i = 0; i < arr.length; i++) { 
      let row = arr[i].trim().split(" ");
      let armourType = row[0];
      let name = row.slice(1, row.length - 2).join(" ");
      let costInCrowns = row[row.length - 2];
      let armourValue = row[row.length - 1];
      res.push({armourType: armourType, name: name, costInCrowns: parseInt(costInCrowns), armourValue: parseInt(armourValue)});
    } 
    return res;
  }

  getArmourSet(inventory) {
    inventory = removeDups(inventory);
    var boots = inventory.filter(item => item.armourType === "Boots");
    var leggings = inventory.filter(item => item.armourType === "Leggings");
    var helmets = inventory.filter(item => item.armourType === "Helmet");
    var chests = inventory.filter(item => item.armourType === "Chest");
    var sets = [boots, leggings, helmets, chests];
    var max = recurse(sets, 0);
    console.log(max);

    //Returns max armour val TODO
    function recurse(sets, depth) {
      var max = -1;
      for (var i = 0; i < sets[depth].length; i++) {
        if (depth === sets.length - 1) {
          return sets[depth][i].armourValue;
        } else {
          if ( recurse(sets, depth + 1) + sets[depth][i].armourValue > max ) {
            max = recurse(sets, depth + 1) + sets[depth][i].armourValue;
          }
        }
      }
      return max;
    }

    function removeDups(inventory) {
      //Remove items that are strictly lower in value, array does not have to be sorted by costInCrowns
      var temp = []
      for(let i of inventory) {
        let j = temp.filter(item => item.costInCrowns === i.costInCrowns)
        if (j.length) {
          //j is object in temp array, i is object in real array
          if (j[0].armourValue <= i.armourValue) {
            temp.splice(temp.indexOf(j[0]), 1);
            temp.push(i);
          }
        } else {
          temp.push(i);
        }
      }
      return temp;
    }
  }

  render() {
    return (
      <div className="container">
        <form className="my-5">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Available Currency in Crowns:</label>
            <input type="text" className="form-control" id="currencyInput" value="300" />
            <small id="emailHelp" className="form-text text-muted">{"Please enter only a numerical value."}</small>
          </div>
          <button onClick={this.getArmourSet} type="submit" className="btn btn-primary">Enter</button>
        </form>
        <div className="mt-4 mb-5">
          <h4>{"Armour Set:"}</h4>
        </div>
        <h3>Inventory:</h3>
        <InventoryTable inventory={this.state.inventory}/>
      </div>
    );
  }
}

export default App;
