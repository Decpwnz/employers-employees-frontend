import Button from 'react-bootstrap/Button';

import Cards from './components/Card';
import Grids from './components/Grid';
import Modals from './components/Modal';
import Navbars from './components/Navbar';
import Tables from './components/Table';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbars />
      <Button>hi</Button>
      <Tables />
      <Modals />
      <Grids>
        <Button>Yo</Button>
      </Grids>
      <Cards />
    </div>
  );
}

export default App;
