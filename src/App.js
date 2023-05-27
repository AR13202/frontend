import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './component/pages/Login';
import Register from './component/pages/Register';
import Dashboard from './dashboard';
import { UserContextProvider } from './UserContext';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/dashboard/*' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
