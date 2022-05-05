import Containers from './components/Container';
import Modals from './components/Modal';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="modals">
        <Modals />
      </div>
      <Containers />
    </div>
  );
}

export default App;
