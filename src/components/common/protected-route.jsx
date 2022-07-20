import React from "react"
import {Navigate, Outlet, useLocation } from 'react-router-dom'
import auth from "../../services/auth";

const ProtectedRoute = () => {
    const location = useLocation()
    const user = auth.getCurrentUser()

    return user ? <Outlet/> : <Navigate to="/login" state={{ from: location}}/>
}

export default ProtectedRoute
