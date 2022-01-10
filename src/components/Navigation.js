import React from 'react';

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-sm bg-secondary navbar-dark'>
      <div className='container-fluid'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link active' href='#'>
              PS Learning Center
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled' href='#'>
              Only Admin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
