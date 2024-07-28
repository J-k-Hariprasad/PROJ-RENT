
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './pages/login-signup/Login';
import Signup from './pages/login-signup/Signup';
import Home from './pages/home/Home';
import Admin from './pages/login-signup/Admin';
import Book from './pages/home/booking/Book';
import Service from './pages/navpages/Services';
import Dashboard from './pages/home/admin/Dashboard';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/signup/home' element={<Home/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/book' element={<Book/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/admindash' element={<Dashboard/>}/>
          
        </Routes>
      </BrowserRouter>
      {/* <Service/> */}
    </div>
  );
}

export default App;
