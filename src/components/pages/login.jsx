import React, { Component } from 'react';
import Joi from 'joi-browser'

import joinImg from '../../assets/img/join.svg'
import Input from '../common/input';

class Login extends Component {
    state = {
        account: {
            email: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        email: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    validate = () => {
        const options = {abortEarly: false}
        
        const {error} = Joi.validate(this.state.account, this.schema, options)
        if (!error) return null
        
        const errors = {}

        for (let item of error.details)
            errors[item.path[0]] = item.message

        return errors
    }


    handleSubmit = (e) => {
        e.preventDefault()

        const errors = this.validate()
        this.setState({ errors: errors || {} })
        if (errors) return;

        // calling the api
        console.log('handleSubmite fired!', this.state.account)
    }

    validateProperty = ({ name, value}) => {
        if (name === 'email') {
            if (value.trim() === '') return 'Email is required.'
            // ...
        }

        if (name === 'password') {
            if (value.trim() === '') return 'Password is required.'
            // ...
        }
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input)

        if (errorMessage) errors[input.name] = errorMessage
        else delete errors[input.name]

        const account = {...this.state.account}
        account[input.name] = input.value

        this.setState({ account, errors })
    }


    render() {
        const {account, errors } = this.state
         
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
                                <Input label="Email address" name="email" value={account.email} onHandleChange={this.handleChange} error={errors?.email}/>
                                <Input label="Password" type="password" name="password" value={account.password} onHandleChange={this.handleChange} error={errors?.password}/>
                                <button type="submit" className="btn btn-outline-primary btn-lg rounded-pill px-5 mt-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Login;