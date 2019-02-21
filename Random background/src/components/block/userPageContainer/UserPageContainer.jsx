import React, {Component} from 'react';

import {connect} from 'react-redux';

import UserPage from '../../common/userPage';

import withProtectiveRoute from '../../hoc'

import {logOutAction, updateRequestAction, fetchUserBackgroundAction} from '../../../actions'

class UserPageContainer extends Component {

    state = {
        ...this.props.userCategories
    };

    onCheckboxChange = e => {
        const {name} = e.target;

        this.setState(state => {
            return {
                [name]: !state[name]
            }
        })
    };

    isCheckboxesValid = () => {
        const {
            landscape,
            city,
            people,
            animals
        } = this.state;

        return landscape || city || people || animals;
    };

    onSaveCategories = () => {

        const {
            landscape,
            city,
            people,
            animals
        } = this.state;

        const {userId, updateRequestAction} = this.props;

        updateRequestAction(
            {
                categories: {landscape, city, people, animals},
                userId
            }
        );
    };

    componentDidMount() {
        const { userCategories, fetchUserBackgroundAction } = this.props;

        fetchUserBackgroundAction(userCategories);
    }

    render() {
        const {
            logOutAction,
            isUpdateRequestComplete,
            isUpdateFailed,
            isUpdateSuccessful,
            userBackgroundUrl,
            isUserBackgroundFetched
        } = this.props;

        return <UserPage
            {...this.state}
            userBackgroundUrl={userBackgroundUrl}
            isUserBackgroundFetched={isUserBackgroundFetched}
            isUpdateRequestComplete={isUpdateRequestComplete}
            isUpdateFailed={isUpdateFailed}
            isUpdateSuccessful={isUpdateSuccessful}
            onSaveCategories={this.onSaveCategories}
            isCheckboxesValid={this.isCheckboxesValid()}
            onCheckboxChange={this.onCheckboxChange}
            onLogOut={logOutAction}
        />
    }
}

const mapStateToProps = state => {
    const {
        isLoggedIn,
        userCategories,
        userId,
        isUpdateRequestComplete,
        isUpdateFailed,
        isUpdateSuccessful,
        userBackgroundUrl,
        isUserBackgroundFetched
    } = state.sessionReducer;

    return {
        isLoggedIn,
        userCategories,
        userId,
        isUpdateRequestComplete,
        isUpdateFailed,
        isUpdateSuccessful,
        userBackgroundUrl,
        isUserBackgroundFetched
    }
};

//Compose !!!!
export default connect(mapStateToProps, {logOutAction, updateRequestAction, fetchUserBackgroundAction})(withProtectiveRoute(UserPageContainer));
