import './App.css';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Forms from './components/Forms';
import Grid from './components/Grid';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TabularData from './components/TabularData';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <hr />
      <Header />
      <hr />
      <Grid />
      <hr />
      <Forms />
      <br />
      <Dropdown />
      <br />
      <br />
      <TabularData />
      <br />
      <Footer />
    </div>
  );
}

export default App;
