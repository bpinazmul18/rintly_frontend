import React, { Component } from 'react';
import joinImg from '../../assets/img/join.svg'
import Input from '../common/input';

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
                                <Input label="Email address" name="email" value={account.email} onHandleChange={this.handleChange}/>
                                <Input label="Password" type="password" name="password" value={account.password} onHandleChange={this.handleChange}/>
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