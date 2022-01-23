import React, { Fragment, Component } from 'react';

class ProgressBars extends Component {
  render() {
    return (
      
      <div className='container mt-3 mb-3 pt-1 pb-1'>
        <div className='progress'>
          <div className='progress-bar bg-info' style={{ width: '50%' }}>HTML</div>
        </div> 
        <div className='progress'>
          <div
            className='progress-bar bg-danger'
            style={{ width: '30%' }}
          >CSS</div>
        </div>
        <div className='progress'>
          <div
            className='progress-bar bg-warning'
            style={{ width: '70%' }}
          >JavaScript</div>
        </div>
        <div className='progress'>
          <div
            className='progress-bar bg-success'
            style={{ width: '80%' }}
          >Bootstrap</div>
        </div>
      </div>
    );
  }
}

export default ProgressBars;
