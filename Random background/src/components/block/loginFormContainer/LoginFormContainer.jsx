import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withRouter, Redirect } from 'react-router-dom';

import { authRequestAction } from '../../../actions';
import { hasEmptyFields } from '../../../utils/utils';
import LoginForm from '../../common/loginForm';



class LoginFormContainer extends Component {
    state = {
        username: '',
        password: ''
    };

    isFormValid = () => !hasEmptyFields(this.state);

    onInputChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        })
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.authRequestAction(this.state);
        this.setState({
            password: ''
        })
    };

    //getDerivedStateFromProps!!!!
    componentWillReceiveProps(nextProps) {
        const { isLoggedIn } = nextProps;
        const { history } = this.props;

        if (isLoggedIn) {
           history.replace('/main');
        }
    }

    render() {
        const { isLoggedIn } = this.props;

        if (!isLoggedIn) {
            return <LoginForm
                {...this.state}
                {...this.props}
                isFormValid={this.isFormValid()}
                onInputChange={this.onInputChange}
                onFormSubmit={this.onFormSubmit}
            />
        }

        return <Redirect to="/main"/>
    }
}

const mapStateToProps = state => {

    const { isLogInComplete, isLoggedIn, isAuthFailed } = state.sessionReducer;

    return {
        isLogInComplete,
        isLoggedIn,
        isAuthFailed
    }
};

//Compose!!!!
export default withRouter(connect(mapStateToProps, { authRequestAction })(LoginFormContainer));

