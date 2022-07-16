import React from 'react';
import Joi from 'joi-browser'

import joinImg from '../../assets/img/join.svg'
import Form from '../common/form';
import { login } from '../../services/api';
import { withRouter } from '../with-router';

class Login extends Form {
    state = {
        data: {
            email: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        email: Joi.string().email().required().label('Username'),
        password: Joi.string().min(5).required().label('Password')
    }

    doSubmit = async () => {
        // calling the api
        const response = await login(this.state.data)
        localStorage.setItem('token', response.data)

        this.props.router.navigate('/')
    }

    render() {
        return (
            <div className="login-page py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className='img-fluid' src={joinImg} alt="Join our app" />
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
 
export default withRouter(Login);