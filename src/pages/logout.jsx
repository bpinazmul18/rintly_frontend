import { Component } from 'react';
class Logout extends Component {

    componentDidMount () {
        localStorage.clear()
        window.location = '/login'
    }
    render() { 
        return null
    }
}
 
export default Logout;