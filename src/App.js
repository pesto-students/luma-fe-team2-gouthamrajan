import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experts from './pages/Experts';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experts' element={<Experts />} />
      </Routes>
    </div>
  );
}

export default App;
