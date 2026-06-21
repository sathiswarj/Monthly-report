 import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Table from './Components/Table';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/table' element={<Table />} />
     </Routes>
    </div>
  );
}

export default App;
