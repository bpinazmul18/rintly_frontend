import React, { Component } from 'react';
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
        const {data, errors } = this.state
         
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
                                <Input label="Email address" type="text" name="email" value={data.email} onHandleChange={this.handleChange} error={errors?.email}/>
                                <Input label="Password" type="password" name="password" value={data.password} onHandleChange={this.handleChange} error={errors?.password}/>
                                <button disabled={this.validate()} type="submit" className="btn btn-outline-primary btn-lg rounded-pill px-5 mt-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Login;