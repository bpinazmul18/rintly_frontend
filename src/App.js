import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/navbar';
import Movies from './pages/movies';
import Home from './pages/home'
import Login from './pages/login';
import MovieForm from './pages/movie-form';
import Customers from './pages/customers';
import Rentals from './pages/rentals';
import Register from './pages/register';
import NewMovie from './pages/new-movie';
import Logout from './pages/logout';
import auth from './services/auth';
import ProtectedRoute from "./components/common/protected-route";

class App extends Component {
  state = {}

  componentDidMount () {
    const user = auth.getCurrentUser()
    this.setState({ user})
  }

  render () {
    return (
      <React.Fragment>
        <Navbar user={this.state.user}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/signup' element={<Register/>}/>
            <Route path='movies/' element={<Movies user={this.state.user}/>}/>
            <Route path='customers' element={<Customers/>}/>
            <Route path='rentals' element={<Rentals/>}/>

            <Route path="/*" element={<ProtectedRoute/>}>
                <Route path='movies/new' element={<NewMovie/>}/>
                <Route path='movies/:id' element={<MovieForm/>}/>
            </Route>

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