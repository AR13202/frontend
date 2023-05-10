import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './component/pages/Login';
import Register from './component/pages/Register';
import Dashboard from './dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard/*' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
