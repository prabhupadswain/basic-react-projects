import React, { Component } from 'react';

class Flex extends Component {
  render() {
    return (
      <div className='container mt-3'>
          <h2>JavaScript frameworks/libraries</h2>
        <div className='d-inline-flex p-3 bg-secondary text-white'>
          <div className='p-2 bg-info'>
            <p>Angular</p>
          </div>
          <div className='p-2 bg-warning'>
            <p>React</p>
          </div>
          <div className='p-2 bg-primary'>
            <p>Vue</p>
          </div>
          <div className='p-2 bg-danger'>
            <p>Node</p>
          </div>
          <div className='p-2 bg-dark'>
            <p>Express</p>
          </div>
          <div className='p-2 bg-success'>
            <p>Polymer</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Flex;
