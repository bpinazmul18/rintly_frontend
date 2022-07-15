import React from 'react';
import Joi from 'joi-browser'

import joinImg from '../../assets/img/join.svg'
import Input from '../common/input';
import Form from '../common/form';

class Login extends Form {
    state = {
        data: {
            email: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        email: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    doSubmit = () => {
        // calling the api
        console.log('handleSubmite fired!', this.state.data)
    }

    render() {
        return (
            <div className="login-page py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={joinImg} alt="Join our app" />
                        </div>
                        <div className="col-md-6">
                            <div className="page-title mb-4">
                                <h2 className='display-3'>Login</h2>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                {this.renderedInput('Email address', 'text', 'email')}
                                {this.renderedInput('Password', 'password', 'password')}
                                {this.renderedButton('Login')}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Login;