import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="container">
                    <nav>
                        <h2>Vialo</h2>
                    </nav>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="form-container">
                                <form>
                                    <h4 className="text-white my-2 text-center">Welcome back!</h4>
                                    <p class="text-muted text-center">We are so excited to see you again.</p>
                                    
                                    <div className="form-element">
                                        <div className="input-label">
                                            <label>Username</label>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className="form-element">
                                        <div className="input-label">
                                            <label>Password</label>
                                        </div>
                                        <div className="input-box">
                                            <input type="password" />
                                        </div>
                                    </div>

                                    <div className="form-element">
                                        <small className="text-muted" style={{fontSize:'14px'}}>
                                            <a href="/signup">Forgot your password?</a>
                                        </small>
                                    </div>

                                    <div className="form-element">
                                        <div className="input-box">
                                            <input type="submit" value="Login"/>
                                        </div>
                                    </div>

                                    <div className="form-element">
                                        <small className="text-muted" style={{fontSize:'11px'}}>
                                            Need an account? &nbsp;
                                            <a href="/signup">Signup</a>
                                        </small>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
