import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    render() {
        return (
            <div className="signup">
                <div className="container">
                    <nav>
                        <h2>Vialo</h2>
                    </nav>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="form-container">
                                <form>
                                    <h4 className="text-white my-2 text-center">Create an account</h4>
                                    <div className="form-element">
                                        <div className="input-label">
                                            <label>Email</label>
                                        </div>
                                        <div className="input-box">
                                            <input type="email" />
                                        </div>
                                    </div>

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
                                        <div className="input-label">
                                            <label>Confirm Password</label>
                                        </div>
                                        <div className="input-box">
                                            <input type="password" />
                                        </div>
                                    </div>

                                    <div className="form-element">
                                        <div className="input-box">
                                            <input type="submit" value="Continue"/>
                                        </div>
                                    </div>

                                    <div className="form-element">
                                        <small className="text-muted" style={{fontSize:'11px'}}>By registering, you agree to Vialo's Terms of Service and Privacy Policy.</small>
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

export default SignUp;
