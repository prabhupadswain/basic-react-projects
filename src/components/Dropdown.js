import React from 'react';
import './stylesheets/Dropdown.css';

const Dropdown = () => {
  return (
    <section>
      <span className='dropdown'>
      <button
        type='button'
        className='btn btn-primary dropdown-toggle'
        data-bs-toggle='dropdown'
      >
        Front-End Technologies
      </button>
      <ul className='dropdown-menu'>
        <li>
          <a className='dropdown-item' href='#'>
            Angular
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            React
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            Vue
          </a>
        </li>
      </ul>
    </span>
    <span className='dropdown'>
      <button
        type='button'
        className='btn btn-success dropdown-toggle'
        data-bs-toggle='dropdown'
      >
        Back-End Technologies
      </button>
      <ul className='dropdown-menu'>
        <li>
          <a className='dropdown-item' href='#'>
            Node.JS
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            Python
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            Dot Net
          </a>
        </li>
      </ul>
    </span>
    <span className='dropdown'>
      <button
        type='button'
        className='btn btn-warning dropdown-toggle'
        data-bs-toggle='dropdown'
      >
        Database Technologies
      </button>
      <ul className='dropdown-menu'>
        <li>
          <a className='dropdown-item' href='#'>
            Oracle
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            MySql
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            Mongo DB
          </a>
        </li>
      </ul>
    </span>
    <span className='dropdown'>
      <button
        type='button'
        className='btn btn-danger dropdown-toggle'
        data-bs-toggle='dropdown'
      >
        Cloud Technologies
      </button>
      <ul className='dropdown-menu'>
        <li>
          <a className='dropdown-item' href='#'>
            AWS
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            Azure
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
           GCP
          </a>
        </li>
      </ul>
    </span>
    </section>
  );
};

export default Dropdown;
