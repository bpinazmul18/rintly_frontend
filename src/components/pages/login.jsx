import React, { Component } from 'react';
import joinImg from '../../assets/img/join.svg'

class Login extends Component {
    state = {
        account: {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()

        // calling the api
        console.log('handleSubmite fired!', this.state.account)
    }

    handleChange = ({ currentTarget: input }) => {
        const account = {...this.state.account}
        account[input.name] = input.value

        this.setState({ account })
    }


    render() {
        const {account } = this.state
         
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
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control rounded-pill" id="email" name='email' value={account['email']} onChange={this.handleChange} placeholder='Enter email...'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pswd" className="form-label">Password</label>
                                    <input type="password" className="form-control rounded-pill" id="pswd" name='password' value={account['password']} onChange={this.handleChange} placeholder='******'/>
                                </div>
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