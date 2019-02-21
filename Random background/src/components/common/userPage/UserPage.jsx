import React from 'react';

import {Link} from 'react-router-dom';

import Spinner from './../spinner'

import './userPage.css';

const UserPage = props => {
    const {
        userBackgroundUrl,
        isUserBackgroundFetched,
        onLogOut,
        onCheckboxChange,
        landscape,
        city,
        people,
        animals,
        isCheckboxesValid,
        onSaveCategories,
        isUpdateRequestComplete,
        isUpdateFailed,
        isUpdateSuccessful
    } = props;

    return (
        <React.Fragment>
            <header className="userPageHeader">
                <img src="https://floridaseniorday.org/wp-content/uploads/2017/09/camera1600-1024x1024.png"
                     className="header-logo" alt=""/>
                <span className="header-logo-text">Random background</span>
                <Link to="/login" onClick={onLogOut} className="log-out-link">Log out</Link>
            </header>
            <main id="page-wrap" className="userPageContentContainer">
                <h1 className="main-page-title">Enjoy your new background!</h1>
                <section className="background-image-section">
                    {
                        isUserBackgroundFetched
                            ? <img src={userBackgroundUrl} className="user-background" alt="User`s background"/>
                            : <Spinner spinnerSize="5rem"/>
                    }
                </section>
                <section className="user-categories-section">
                    <h4>Your categories</h4>
                    <div className="card background-categories-card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Landscapes
                                <label className="background-categories-checkbox-label">
                                    <input
                                        className="category-check-box"
                                        type="checkbox"
                                        name="landscape"
                                        onChange={onCheckboxChange}
                                        checked={landscape}
                                    />
                                </label>
                            </li>
                            <li className="list-group-item">
                                Animals
                                <label className="background-categories-checkbox-label">
                                    <input
                                        className="category-check-box"
                                        type="checkbox"
                                        name="animals"
                                        onChange={onCheckboxChange}
                                        checked={animals}
                                    />
                                </label>
                            </li>
                            <li className="list-group-item">
                                City
                                <label className="background-categories-checkbox-label">
                                    <input
                                        className="category-check-box"
                                        type="checkbox"
                                        name="city"
                                        onChange={onCheckboxChange}
                                        checked={city}
                                    />
                                </label>
                            </li>
                            <li className="list-group-item">
                                People
                                <label className="background-categories-checkbox-label">
                                    <input
                                        className="category-check-box"
                                        type="checkbox"
                                        name="people"
                                        onChange={onCheckboxChange}
                                        checked={people}
                                    />
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="categories-save-button-container">
                        {
                            isUpdateRequestComplete
                                ? <button type="button"
                                          disabled={!isCheckboxesValid}
                                          className="categories-save-button btn btn-primary"
                                          onClick={onSaveCategories}
                                >
                                    Save changes
                                </button>
                                : <Spinner/>
                        }
                    </div>
                    <div className="alerts-container">
                        {
                            isUpdateFailed &&
                            <div className="login-failure-alert alert alert-danger" role="alert">
                                An error occurred during the upgrade. Data not updated.
                            </div>
                        }
                        {
                            isUpdateSuccessful &&
                            <div className="alert alert-success" role="alert">
                                Data successfully updated!
                            </div>
                        }
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
};

export default UserPage;