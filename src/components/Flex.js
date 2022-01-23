import React, { Component } from 'react';

class Flex extends Component {
  render() {
    return (
      <div class='container mt-3'>
        <div class='d-inline-flex p-3 bg-secondary text-white'>
          <div class='p-2 bg-info'>Flex item 1</div>
          <div class='p-2 bg-warning'>Flex item 2</div>
          <div class='p-2 bg-primary'>Flex item 3</div>
        </div>
      </div>
    );
  }
}
export default Flex;
