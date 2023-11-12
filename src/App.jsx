import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import Bakery from './Bakery';
import Sail from './Sail';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path={'/bakery-demo-fabien'} element={<Bakery />} />
          <Route path={'/sail'} element={<Sail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
