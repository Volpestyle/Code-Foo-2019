import React, { Component } from 'react';
import './App.css';
import InventoryTable from './components/table';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      rawData: props.inventoryData,
      crownsBudget: 300, //initial value
      inventory: [],
      armourSet: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      inventory: this.populateNewInventory(this.state.rawData),
    },() => {
      this.getArmourSet(this.state.inventory, this.state.crownsBudget);
    })
  }

  //Only allow numbers
  handleChange = (e) => {
    const re = /^[0-9\b]+$/; //restrict to numbers
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({
        crownsBudget: e.target.value
      }, () => {
        this.getArmourSet(this.state.inventory, this.state.crownsBudget);
      })
    }
  }

  //Turn raw copy-pasted data from table into armour objects
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
  
  //
  // Main Logic
  //
  getArmourSet(inventory, budget) {
    inventory = removeDups(inventory);
    
    var boots = inventory.filter(item => item.armourType === "Boots");
    var leggings = inventory.filter(item => item.armourType === "Leggings");
    var helmets = inventory.filter(item => item.armourType === "Helmet");
    var chests = inventory.filter(item => item.armourType === "Chest");
    
    var sets = [boots, leggings, helmets, chests];
    var armourSet = [];
    var maxValue = -1;
    recurseHelper([], 0);
    //console.log(armourSet);
    //console.log(maxValue);
    
    this.setState({
      armourSet: armourSet[0]
    })

    //Recursively create all sets of armour and save the one with highest value
    function recurseHelper(arr, depth) {
      for (var i=0, l=sets[depth].length; i<l; i++) {
        var a = arr.slice(0); // clone array

        var spent = a.reduce((prev, cur) => prev + cur.costInCrowns, 0); //the total cost of current set

        //We should only recurse on a number if: 
        //let x = the highest cost s.t. x + (the other set's max cost items) + current spent amount < budget, the number is equal to x, or is greater than x.
        var constraint = Math.max.apply(Math, 
          (sets[depth].filter((item) => ( item.costInCrowns + spent + maxCostOfOtherSets(sets[depth]) < budget)))
            .map(item => item.costInCrowns));
        if (sets[depth][i] < constraint) 
          continue;    

        a.push(sets[depth][i]);
        if (depth === sets.length - 1) {
          if (spent < budget) { 
            var val = a.reduce((prev, cur) => prev + cur.armourValue, 0); //the total value of current set
            if (val > maxValue) {
              maxValue = val;
              armourSet.shift();
              armourSet.push(a);
            }
          }
        } 
        else
          recurseHelper(a, depth+1);
      }
    }

    //Return the max cost item of every set except 'thisArr'
    function maxCostOfOtherSets(thisArr) {
      var res;
      for (let i of sets) {
        res += Math.max.apply(Math, i.map((item) => item.costInCrowns ));
      }
      res -= Math.max.apply(Math, thisArr.map((item) => item.costInCrowns )); 
      return res;
    }
    
    //Remove any items that are strictly lower in value, array does not have to be sorted by costInCrowns
    function removeDups(inventory) {
      var temp = []
      for(let i of inventory) {
        let j = temp.filter(item => item.costInCrowns === i.costInCrowns && item.name === i.name)
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
        <form className="my-5" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Available Currency in Crowns:</label>
            <input type="text" className="form-control" id="currencyInput" value={this.state.crownsBudget} onChange={this.handleChange}/>
            <small className="form-text text-muted">{"Please enter only a numerical value."}</small>
          </div>
        </form>
        <div className="mt-4 mb-5">
          <h4>{"Armour Set:"}</h4>
          {this.state.armourSet ? this.state.armourSet.map(({armourType, name, costInCrowns, armourValue}, i) => (
            <p key={i}>
              <strong> Type: </strong>{armourType} 
              <strong> Name: </strong>{name} 
              <strong> Cost: </strong>{costInCrowns} 
              <strong> Value: </strong>{armourValue}
            </p>
          )) : <p>{"Insufficient funds for full suit of armour!"}</p> }
        </div>
        <h3>Inventory:</h3>
        <InventoryTable inventory={this.state.inventory}/>
      </div>
    );
  }
}

export default App;
