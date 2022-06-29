import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/navbar';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Movies from './components/movies';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <main className='container'>
          <Movies/>
          {/* <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}/> */}
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
