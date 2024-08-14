import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login-signup/Login';
import Signup from './pages/login-signup/Signup';
import Home from './pages/home/Home';
import Admin from './pages/login-signup/Admin';
import Service from './pages/navpages/Services';
import Dashboard from './pages/admin/Dashboard';
import About from './pages/navpages/About';
import Journey from './pages/Journy/Journey';
import Book from './pages/booking/Book';
import Payment from './pages/booking/Payment';
import { UserProvider } from './pages/context/UserContext'; // Import UserProvider
import CarAdd from './pages/admin/car/CarAdd';
import ViewCar from './pages/admin/car/ViewCar';
import AdminReview from './pages/admin/Reviews/AdminReview';
import RemoveCar from './pages/admin/car/RemoveCar';
import EditCar from './pages/admin/car/EditCar';


function App() {
    return (
        <div className="App">
            <UserProvider>
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
                        <Route path='/about' element={<About/>}/>
                        <Route path='/jour' element={<Journey/>}/>
                        <Route path='/pay' element={<Payment/>}/>
                        <Route path='/caradd' element={<CarAdd/>}/>
                        <Route path='/carview' element={<ViewCar/>}/>
                        <Route path='/reviews' element={<AdminReview/>}/>
                        <Route path='/removecar' element={<RemoveCar/>}/>
                        <Route path='/editcar' element={<EditCar/>}/>

                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </div>
    );
}

export default App;
