import React from 'react';
import {Link} from 'react-router-dom';

import Spinner from '../spinner';

import './registrationForm.css';

const RegistrationForm = props => {
    let {
        leftColumnStyles,
        firstName,
        secondName,
        email,
        username,
        password,
        onInputChange,
        onFormSubmit,
        isRegistrationComplete,
        isFormValid
    } = props;

    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <div style={leftColumnStyles}
                     className="d-md-flex justify-content-center align-items-center col-md-5 d-none registration-photo-column">
                    <div className="photo-column-text-container">
                        <h1 className="photo-column-header">Welcome to Random background!</h1>
                        <h3 className="mt-5">Enjoy amazing background everyday</h3>
                    </div>
                </div>
                <div className="col-md-7 registration-form-column">
                    <div className="registration-form-column-title-container">
                        <h1>Join Random background</h1>
                    </div>
                    <form className="registration-form" onSubmit={onFormSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="input-first-name">First name</label>
                                <input
                                    value={firstName}
                                    name="firstName"
                                    onChange={onInputChange}
                                    type="text"
                                    className="form-control"
                                    id="input-first-name"
                                    placeholder="First name"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="input-last-name">Last name</label>
                                <input
                                    value={secondName}
                                    name="secondName"
                                    onChange={onInputChange}
                                    type="text"
                                    className="form-control"
                                    id="input-last-name"
                                    placeholder="Last name"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-email">Email</label>
                            <input
                                value={email}
                                name="email"
                                onChange={onInputChange}
                                type="text"
                                className="form-control"
                                id="input-email"
                                placeholder="Your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-username">Username</label>
                            <input
                                value={username}
                                name="username"
                                onChange={onInputChange}
                                type="text"
                                className="form-control"
                                id="input-username"
                                placeholder="Username"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-password">Password</label>
                            <input
                                value={password}
                                name="password"
                                onChange={onInputChange}
                                type="password"
                                className="form-control"
                                id="input-password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="registration-button-container">
                            {
                                isRegistrationComplete
                                    ? <button type="submit" disabled={!isFormValid}
                                              className="btn btn-primary registration-button">Sign in
                                    </button>
                                    : <Spinner/>
                            }
                        </div>
                        <div className="login-link-container">
                            <span>or</span>
                            <Link to="login" className="log-in-link">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};


export default RegistrationForm;