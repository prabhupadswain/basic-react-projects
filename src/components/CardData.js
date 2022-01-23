import React, { Component } from 'react';

class CardData extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>React</h5>
          <h6 className='card-subtitle mb-2 text-muted'>A JavaScript UI library </h6>
          <p className='card-text'>
            It is developed and maintained by Facebook.
          </p>
        </div>
      </div>
    );
  }
}

export default CardData;
