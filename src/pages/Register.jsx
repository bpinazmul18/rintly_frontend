import React from 'react';
import Joi from 'joi-browser'

import joinImg from '../assets/img/register.svg'
import Form from '../components/common/form';
import auth from '../services/auth';
import { toaster } from '../components/common/toaster';
import { withRouter } from '../components/with-router';
import {register} from "../services/users";
import { Navigate } from 'react-router-dom';

class Register extends Form {
    state = {
        data: {
            email: '',
            password: '',
            name: ''
        },
        errors: {}
    }

    schema = {
        email: Joi.string().email().required().label('Username'),
        password: Joi.string().min(5).required().label('Password'),
        name: Joi.string().min(5).required().label('Name')
    }

    doSubmit = async () => {
        try {
            const response = await register(this.state.data)
            auth.loginWithJwt(response.headers['x-auth-token'])

            toaster('success', 'Register success.')
            window.location = '/'
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors}
                errors.email = ex.response.data

                this.setState({ errors })
            }
        }
    }

    render() {
        if (auth.getCurrentUser()) return <Navigate to="/"/>

        return (
            <div className="register-page full-height py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className='img-fluid' src={joinImg} alt="Join our app" />
                        </div>
                        <div className="col-md-6">
                            <div className="page-title mb-4">
                                <h2 className='display-3 text-light'>Register</h2>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                {this.renderedInput('Name', 'text', 'name')}
                                {this.renderedInput('Email address', 'text', 'email')}
                                {this.renderedInput('Password', 'password', 'password')}
                                {this.renderedButton('Register')}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withRouter(Register);