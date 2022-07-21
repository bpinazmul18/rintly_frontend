import React, {useEffect, useState} from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Logout from './components/logout'
import Navbar from './components/navbar'
import auth from './services/auth'
import ProtectedRoute from './components/common/protected-route'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Customers from './pages/Customers'
import Rentals from './pages/Rentals'
import NewMovie from './pages/NewMovie'
import UpdateMovie from './pages/UpdateMovie'
import Movies from './pages/Movies'

const App = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const user = auth.getCurrentUser()
        setUser(user)
    }, [])

    return (
        <>
            <Navbar user={user}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='movies' element={<Movies user={user}/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='logout' element={<Logout/>}/>
                <Route path='signup' element={<Register/>}/>
                <Route path='customers' element={<Customers/>}/>
                <Route path='rentals' element={<Rentals/>}/>
                <Route path='about' element={<Rentals/>}/>

                <Route path="*" element={<ProtectedRoute/>}>
                    <Route path='movies/new' element={<NewMovie/>}/>
                    <Route path='movies/:id' element={<UpdateMovie/>}/>
                </Route>

                <Route path='not-found' element={<p>NOT FOUND</p>}/>
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
        </>
    )
}

export default App