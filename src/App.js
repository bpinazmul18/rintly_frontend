import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Counters from './components/counters';
import Navbar from './components/navbar';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {

  state = { 
    counters: [
        {id: 1, value: 3},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ]
  }

  handleIncrement = (counter) => {
      const counters = [...this.state.counters]
      const index = counters.indexOf(counter)
      counters[index] = {...counter}
      counters[index].value++
      this.setState({ counters })
  }

  handleDecrement= (counter) => {
      const counters = [...this.state.counters]
      const index = counters.indexOf(counter)
      counters[index] = {...counter}
      counters[index].value--
      this.setState({ counters })
  }

  handleDelete = (id) => {
      const counters = this.state.counters.filter((c) => c.id !== id)
      this.setState({ counters })
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0
          return c
      })

      this.setState({ counters })
  }

  render () {
    return (
      <React.Fragment>
        <Navbar/>
        <main className='container'>
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}/>
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
          <ToastContainer />
        </main>
      </React.Fragment>
    )
  }
}

export default App;
