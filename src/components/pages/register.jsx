import React from 'react';
import Joi from 'joi-browser'

import joinImg from '../../assets/img/register.svg'
import Form from '../common/form';

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
        name: Joi.string().required().label('Name')
    }

    doSubmit = () => {
        // calling the api
        console.log('handleSubmite fired!', this.state.data)
    }

    render() {
        return (
            <div className="Register-page py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className='img-fluid' src={joinImg} alt="Join our app" />
                        </div>
                        <div className="col-md-6">
                            <div className="page-title mb-4">
                                <h2 className='display-3'>Register</h2>
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
 
export default Register;