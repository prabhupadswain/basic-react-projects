import React, { Fragment, Component } from 'react';

class ProgressBars extends Component {
  render() {
    return (
      
      <div className='container mt-3 mb-3 pt-1 pb-1'>
        <div className='progress'>
          <div className='progress-bar bg-info' style={{ width: '50%' }}>HTML - 50%</div>
        </div> 
        <div className='progress'>
          <div
            className='progress-bar bg-danger'
            style={{ width: '30%' }}
          >CSS - 30%</div>
        </div>
        <div className='progress'>
          <div
            className='progress-bar bg-warning'
            style={{ width: '70%' }}
          >JavaScript - 70%</div>
        </div>
        <div className='progress'>
          <div
            className='progress-bar bg-success'
            style={{ width: '80%' }}
          >Bootstrap - 80%</div>
        </div>
      </div>
    );
  }
}

export default ProgressBars;
