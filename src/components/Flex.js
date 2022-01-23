import React, { Component } from 'react';

class Flex extends Component {
  render() {
    return (
      <div className='container mt-3'>
        <div className='d-inline-flex p-3 bg-secondary text-white'>
          <div className='p-2 bg-info'>
            <button type='button' className='btn btn-primary'>
              Angular
            </button>
          </div>
          <div className='p-2 bg-warning'>
            <button type='button' className='btn btn-success'>
              React
            </button>
          </div>
          <div className='p-2 bg-primary'>
            <button type='button' className='btn btn-warning'>
              Vue
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Flex;
