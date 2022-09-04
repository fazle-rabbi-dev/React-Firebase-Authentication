import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/core/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {UserState} from './context/UserContext';
import {
  Routes,
  Route
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

export default function App(){
  return(
    <>
     <UserState>
        <Navbar/>
        <Routes>
          <Route path='/' element={ 
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />
        </Routes>
      </UserState>
    </>
  );
}