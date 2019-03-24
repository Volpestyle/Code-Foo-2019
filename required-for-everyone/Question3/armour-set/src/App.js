import React, { Component } from "react";
import "./App.css";
import InventoryTable from "./components/table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData: props.inventoryData,
      crownsBudget: 300, //initial value
      inventory: [],
      armourSet: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState(
      {
        inventory: this.populateNewInventory(this.state.rawData)
      },
      () => {
        this.setState({
          armourSet: this.getArmourSet(
            this.state.inventory,
            this.state.crownsBudget
          )
        });
      }
    );
  }

  //Only allow numbers to be input
  handleChange = e => {
    const re = /^[0-9\b]+$/; //restrict to numbers
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState(
        {
          crownsBudget: e.target.value
        },
        () => {
          this.setState({
            armourSet: this.getArmourSet(
              this.state.inventory,
              this.state.crownsBudget
            )
          });
        }
      );
    }
  };

  //Turn raw copy-pasted data from table into armour objects
  populateNewInventory(rawData) {
    var res = [];
    var arr = rawData.split("\n");
    for (let i = 0; i < arr.length; i++) {
      var row = arr[i].trim().split(" ");
      var armourType = row[0];
      var name = row.slice(1, row.length - 2).join(" ");
      var costInCrowns = row[row.length - 2];
      var armourValue = row[row.length - 1];
      res.push({
        armourType: armourType,
        name: name,
        costInCrowns: parseInt(costInCrowns),
        armourValue: parseInt(armourValue)
      });
    }
    return res;
  }

  //
  // Main Logic
  //
  getArmourSet(inventory, budget) {
    removeDups();
    var boots = inventory.filter(item => item.armourType === "Boots");
    var leggings = inventory.filter(item => item.armourType === "Leggings");
    var helmets = inventory.filter(item => item.armourType === "Helmet");
    var chests = inventory.filter(item => item.armourType === "Chest");

    var sets = [boots, leggings, helmets, chests, inventory];
    var armourSet = [];
    var maxValue = -1;
    console.time("Recursive Function");
    recurseHelper([], 0);
    console.timeEnd("Recursive Function");
    //console.log(armourSet);
    //console.log(maxValue);
    return armourSet[0];

    //Recursively create all sets of armour and save the one with highest value into 'armourSet'
    function recurseHelper(arr, depth) {
      for (var i = 0, l = sets[depth].length; i < l; i++) {
        var a = arr.slice(0); // clone array
        a.push(sets[depth][i]);
        if (depth === sets.length - 1) {
          if (a.reduce((prev, cur) => prev + cur.costInCrowns, 0) <= budget) {
            //the total cost of current set
            var val = a.reduce((prev, cur) => prev + cur.armourValue, 0); //the total value of current set
            if (val > maxValue) {
              maxValue = val;
              armourSet.shift();
              armourSet.push(a);
            }
          }
        } else recurseHelper(a, depth + 1);
      }
    }

    //Remove any armour pieces that are strictly lower in value, array does not have to be sorted by costInCrowns
    function removeDups() {
      var temp = [];
      for (let i of inventory) {
        let j = temp.filter(
          item =>
            item.costInCrowns === i.costInCrowns &&
            item.armourType === i.armourType
        );
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
      inventory = temp;
    }
  }

  render() {
    return (
      <div className="container">
        <form className="my-5" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">
              Available Currency in Crowns:
            </label>
            <input
              type="text"
              className="form-control"
              id="currencyInput"
              value={this.state.crownsBudget}
              onChange={this.handleChange}
            />
            <small className="form-text text-muted">
              {"Please enter only a numerical value."}
            </small>
          </div>
        </form>
        <div className="mt-4 mb-5">
          <h4>{"Armour Set:"}</h4>
          {this.state.armourSet ? (
            this.state.armourSet.map(
              ({ armourType, name, costInCrowns, armourValue }, i) => (
                <div>
                  {i === 4 ? <span><strong>Extra peice: </strong></span> : <span></span>}
                  <p key={i}>
                    <strong> Type: </strong>
                    {armourType}
                    <strong> Name: </strong>
                    {name}
                    <strong> Cost: </strong>
                    {costInCrowns}
                    <strong> Value: </strong>
                    {armourValue}
                  </p>
                </div>
              )
            )
          ) : (
            <p>{"Insufficient funds for full suit of armour and extra peice!"}</p>
          )}
        </div>
        <h3>Inventory:</h3>
        <InventoryTable inventory={this.state.inventory} />
      </div>
    );
  }
}

export default App;
