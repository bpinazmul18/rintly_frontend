import React, { Component } from 'react';
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
    validate = () => {

        const errors = {}
        const {account} = this.state
        if (account.email.trim() === '')
            errors.email = 'Email is required.'

        if (account.password.trim() === '')
            errors.password = 'Password is required.'
        return Object.keys(errors).length === 0 ? null : errors
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