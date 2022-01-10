import React from 'react';
import './stylesheets/TabularData.css';

const TabularData = () => {
  return (
    <div id="information">
      <p>
        Below, here is the information of our course fees and faculties.{' '}
      </p>
      <table className='center'>
        <tr>
          <th>Technologies</th>
          <th>Course Fees</th>
          <th>Faculty</th>
        </tr>
        <tr>
          <td>Front-End Technologies</td>
          <td>10,000</td>
          <td>Sachin</td>
        </tr>
        <tr>
          <td>Back-End Technologies</td>
          <td>15,000</td>
          <td>Debashish</td>
        </tr>
        <tr>
          <td>Database Technologies</td>
          <td>12,000</td>
          <td>Priyanka</td>
        </tr>
        <tr>
          <td>Cloud Technologies</td>
          <td>20,000</td>
          <td>Swati</td>
        </tr>
      </table>
    </div>
  );
};

export default TabularData;
