import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/navbar';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Movies from './components/movies';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Product from './components/pages/product';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/movies' element={<Movies/>}/>
              <Route path='/product/:id' element={<Product/>}/>
              <Route path='/not-found' element={<p>NOT FOUND</p>}/>
              <Route path='*' element={<Navigate to="/not-found" replace/>}/>
          </Routes>
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              />
              {/* Same as */}
      </React.Fragment>
    )
  }
}

export default App;
