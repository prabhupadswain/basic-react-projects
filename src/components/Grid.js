import React from 'react';

const Grid = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          Front end technologies are as follows:
          <ul>
            <li>Angular</li>
            <li>React</li>
            <li>Vue</li>
          </ul>
        </div>
        <div className='col'>
          Back end technologies are as follows:
          <ul>
            <li>Python</li>
            <li>Node.JS</li>
            <li>Dot Net</li>
          </ul>
        </div>
        <div className='col'>
          Database technologies are as follows:
          <ul>
            <li>MySql</li>
            <li>Oracle</li>
            <li>Mongo DB</li>
          </ul>
        </div>
        <div className='col'>
          Cloud technologies are as follows:
          <ul>
            <li>AWS</li>
            <li>Azure</li>
            <li>GCP</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Grid;
