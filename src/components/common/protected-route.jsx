import React from "react"
import {Navigate, Outlet} from 'react-router-dom'
import auth from "../../services/auth";

const ProtectedRoute = () => {
    const user = auth.getCurrentUser()
    return user ? <Outlet/> : <Navigate to="/login" replace/>
}

export default ProtectedRoute
