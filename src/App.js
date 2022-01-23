import React, { Component } from 'react';
import './App.css';

import CardData from './components/CardData';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProgressBars from './components/ProgressBars';
import ToLearn from './components/ToLearn';
import Flex from './components/Flex';
import Spinner from './components/Spinner';

class App extends Component {
  render() {
    return (
      <>
        <div className='App'>
          <Navbar />
          <Header />
          <hr />
        </div>
        <CardData />
        <hr />
        <br />
        <ToLearn />
        <h3>Your progress chart : </h3>
        <ProgressBars />
        <hr />
        <Flex />
        <hr />
        <Spinner />
      </>
    );
  }
}

export default App;
