import React from 'react';
import {Link} from "react-router-dom";

import Spinner from '../spinner';

import './loginForm.css'

const LoginForm = props => {

    const {
        onInputChange,
        onFormSubmit,
        username,
        password,
        isLogInComplete,
        isAuthFailed,
        isFormValid
    } = props;

    return (
        <div className="login-container">
            <div className="login-form-title-container">
                <img className="login-form-logo"
                     src="https://floridaseniorday.org/wp-content/uploads/2017/09/camera1600-1024x1024.png"
                     alt="login form logo"/>
                <h4>Log in to Random background</h4>
            </div>
            <form className="login-form" onSubmit={onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="login-username-input-">Username</label>
                    <input type="text" name="username" className="form-control" id="login-username-input"
                           value={username}
                           onChange={onInputChange}
                           placeholder="Username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="login-password-input">Password</label>
                    <input type="password" name="password" className="form-control" id="login-password-input"
                           value={password}
                           onChange={onInputChange}
                           placeholder="Password"/>
                </div>
                <div className="login-button-container">
                    {
                        isLogInComplete
                            ? <button
                                type="submit"
                                className="btn btn-primary login-button"
                                disabled={!isFormValid}
                            >
                                Log in
                            </button>
                            : <Spinner/>
                    }
                </div>
                <div className="login-link-container">
                    <Link to="/registration" className="sign-up-link">Sign up</Link>
                </div>
                {
                    isAuthFailed &&
                    <div className="login-failure-alert alert alert-danger" role="alert">
                        Incorrect username or password
                    </div>
                }
            </form>
        </div>
    )
};

export default LoginForm;