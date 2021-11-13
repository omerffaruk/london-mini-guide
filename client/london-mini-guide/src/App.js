import './App.css';
import CityDropDown from './components/CityDropDown';
import PlaceButtons from './components/PlaceButtons';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <header>
        <h1>City Mini Guide</h1>  
      </header>
      <CityDropDown />
      <PlaceButtons /> 
      <Table />
    </div>
  );
}

export default App;
