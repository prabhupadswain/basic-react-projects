import React from 'react';
import './stylesheets/Forms.css';

const Forms = () => {
  return (
    <form>
      <div className='form-group'>
        <label for='fullname'>Fullname:</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter your fullname'
          id='fullname'
        />
      </div>
      <br />
      <div className='form-group'>
        <label for='email'>Email:</label>
        <input
          type='email'
          className='form-control'
          placeholder='Enter valid email'
          id='email'
        />
      </div>
      <br />
      <div className='form-group'>
        <label for='degree'>Qualification:</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter your highest qualification'
          id='degree'
        />
      </div>
      <br/>
      <button type='submit' className='btn btn-success'>
        Submit
      </button>
    </form>
  );
};

export default Forms;
