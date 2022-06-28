import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar <span className='badge bg-secondary rounded-circle'>{this.props.totalCounter}</span></a>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;