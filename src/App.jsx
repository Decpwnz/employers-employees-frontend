import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modals from './components/Modal';
import Navbars from './components/Navbar';
import Tables from './components/Table';
import Grids from './components/Grid';
import Cards from './components/Card';

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
