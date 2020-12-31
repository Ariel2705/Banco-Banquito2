import React, { Component } from 'react';


class Transfer extends Component {

  constructor() {
    super();
    this.state = {
      sender: "a",
      receiver: "b",
      date: "c",
      type: "d",
      description: "e"
    };
  }

  addTransfer() {
    fetch('/api/transaction', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      }
    })
      .then( res => console.log(res))
      .catch( err => console.log(err));
  }

  render() {
    return (
    <div className="App">
      <h1>Transfer {this.addTransfer()}</h1>
    </div>
    );
  }
}
export default Transfer;