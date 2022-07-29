import './App.css';
import { Routes ,Route } from 'react-router-dom'
import Runs from './pages/Runs'
import Run from './pages/Run'
import Create from './pages/Create'

function App() {
  return (
    <Routes>
      <Route path='/runs' element={<Runs/>} />
      <Route path='/runs/new' element={<Create/>} />
      <Route path='/runs/:id' element={<Run/>} />
    </Routes>
  );
}

export default App;
