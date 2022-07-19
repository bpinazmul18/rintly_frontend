import { Component } from 'react';
import { logout } from '../services/api';
class Logout extends Component {

    componentDidMount () {
        logout()
        window.location = '/login'
    }
    render() { 
        return null
    }
}
 
export default Logout;