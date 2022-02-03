import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
      <div className='container mt-3'>
        <h2>Colored Spinners</h2>
       
        <div className='spinner-border text-muted'></div>
        <div className='spinner-border text-primary'></div>
        <div className='spinner-border text-success'></div>
        <div className='spinner-border text-info'></div>
        <div className='spinner-border text-warning'></div>
        <div className='spinner-border text-danger'></div>
        <div className='spinner-border text-secondary'></div>
        <div className='spinner-border text-dark'></div>
        <div className='spinner-border text-light'></div>
      </div>
    );
  }
}

export default Spinner;
