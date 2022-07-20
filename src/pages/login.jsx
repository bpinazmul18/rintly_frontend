import React from 'react';
import Joi from 'joi-browser'

import joinImg from '../assets/img/join.svg'
import Form from '../components/common/form';
import auth from '../services/auth';
import { withRouter } from '../components/with-router';
import { toaster } from '../components/common/toaster';

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

        try {
            await auth.login(this.state.data)
            
            toaster('success', 'Login success.')
            const {pathname} = this.props.router.location.state.from
            window.location = pathname ? pathname : '/'
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