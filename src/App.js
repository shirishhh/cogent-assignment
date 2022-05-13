import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './containers/Layout/layout';
import Login from './views/Auth/Login';
import Books from './views/Books/books';
import Dashboard from './views/Dashboard/dashboard';


function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<p> Loading...</p>}>
        <Routes>
          <Route path='login' name='login' element={<Login/>}/>
          {localStorage.getItem("user") !== null ?
            <Route path="/" name="Home" element={<Layout />}>
              <Route path="/" element={<Navigate replace to="/dashboard" />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/books' element={<Books />} />
            </Route> :
          
            <Route path='/' element={<Navigate replace to='login'/>}>
              <Route path='/dashboard' element={<Navigate replace to='login'/>}/>
              <Route path='/books' element={<Navigate replace to='login'/>}/>
              </Route>
          }
           <Route path='/logout' element={<Navigate replace to='/'/>}></Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
