import React, { Component } from 'react';
//import logo from './logo.svg';
import Appointments from './Appointments';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);



    this.state = {
      title: 'Appointments',
      show: true,
      data: [
        {
          "petName": "Buffy",
          "ownerName": "Hassum Harrod",
          "aptDate": "2016-06-20 15:30",
          "aptNotes": "This Chihuahua has not eaten for three days and is lethargic"
        },
        {
          "petName": "Spot",
          "ownerName": "Constance Smith",
          "aptDate": "2016-06-24 08:30",
          "aptNotes": "This German Shepherd is having some back pain"
        },
        {
          "petName": "Goldie",
          "ownerName": "Barot Bellingham",
          "aptDate": "2016-06-22 15:50",
          "aptNotes": "This Goldfish has some weird spots in the belly"
        },
        {
          "petName": "Mitten",
          "ownerName": "Hillary Goldwyn",
          "aptDate": "2016-06-21 9:15",
          "aptNotes": "Cat has excessive hairballs"
        }
      ]
    };
  };

  render() {
    var showTitle;
    if (this.state.show) {
      showTitle = "New";
    }

    var displayList = {
      display: this.state.show ? 'block' : 'none',
      color: 'red'
    }

    return (
      <div className="App">
        <h1>{showTitle} {this.state.title}</h1>
        
        <Appointments displayList={displayList} data={this.state.data} />

       
      </div>
    );
  }
}

export default App;