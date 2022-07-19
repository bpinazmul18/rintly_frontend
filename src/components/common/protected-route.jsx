import React from "react"
import {Navigate, Outlet } from 'react-router-dom'
import auth from "../../services/auth";
import {withRouter} from "../with-router";

const ProtectedRoute = (props) => {
    const user = auth.getCurrentUser()
    return user ? <Outlet/> : <Navigate to={{
            pathname: '/login',
            state: { from: props.router.location}
        }
    }/>
}

export default withRouter(ProtectedRoute)
