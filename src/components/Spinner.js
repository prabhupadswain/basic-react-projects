import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
      <div class='container mt-3'>
        <h2>Colored Spinners</h2>
       
        <div class='spinner-border text-muted'></div>
        <div class='spinner-border text-primary'></div>
        <div class='spinner-border text-success'></div>
        <div class='spinner-border text-info'></div>
        <div class='spinner-border text-warning'></div>
        <div class='spinner-border text-danger'></div>
        <div class='spinner-border text-secondary'></div>
        <div class='spinner-border text-dark'></div>
        <div class='spinner-border text-light'></div>
      </div>
    );
  }
}

export default Spinner;
