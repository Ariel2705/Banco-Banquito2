import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import TabTransaction from '../../components/TabTransaction';

class Transaction extends Component {

  constructor() {
    super();
  } 

  render() {
    return (
    <div>
      <form  noValidate autoComplete="off">
        <TabTransaction />
      </form>
    </div>
    );
  }
}
export default Transaction;

/*
this.state = {
      sender: "",
      receiver: "",
      date: "",
      type: "",
      description: ""
    };
  }

  addTransaction() {
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
*/