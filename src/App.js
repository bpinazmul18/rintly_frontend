import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/navbar';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Movies from './components/movies';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Product from './components/pages/product';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <main className='container'>
          {/* <Movies/> */}

          <div className='content'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/movies' element={<Movies/>}/>
              <Route path='/product/:id' element={<Product/>}/>
            </Routes>
          </div>
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
        </main>
      </React.Fragment>
    )
  }
}

export default App;
