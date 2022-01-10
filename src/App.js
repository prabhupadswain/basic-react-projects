import './App.css';
import CountrySelect from './components/CountrySelect';
import BasicButtons from './components/BasicButtons';
import DataTable from './components/DataTable';
import OutlinedCard from './components/OutlinedCard';
import Navigation from './components/Navigation';
import RegdDetails from './components/RegdDetails';
import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import BasicStack from './components/BasicStack';

function App() {
  return (
    <div className="App">
      <Navigation />
      <hr />
      <br />
      <RegdDetails />
      <br />
      <CountrySelect />
      <br />
      <BasicButtons />
      <br />
      <BasicStack />
      <br />
      <DataTable />
      <br />
      <OutlinedCard />
      <br />
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
