import React, {Component} from 'react';

import { connect } from 'react-redux';
import { registerRequestAction } from '../../../actions';

import { withRouter } from 'react-router-dom';

import { hasEmptyFields } from '../../../utils/utils';

import RegistrationForm from '../../common/registrationForm';


class RegistrationFormContainer extends Component {
    state = {
        firstName: '',
        secondName: '',
        email: '',
        username: '',
        password: ''
    };

    isFormValid = () => !hasEmptyFields(this.state);

    onInputChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        },)
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.registerRequestAction(this.state);
    };

    //getDerivedStateFromProps!!!!
    componentWillReceiveProps(nextProps) {
        const { isRegistrationSuccessful } = nextProps;
        const { history } = this.props;

        if (isRegistrationSuccessful) {
            history.replace('/login');
        }
    }

    render() {
        const leftColumnStyles = {
            backgroundImage: `url('https://source.unsplash.com/random')`,
            backgroundSize: `cover`
        };

        const { isRegistrationComplete } = this.props;

        return <RegistrationForm
            {...this.state}
            isFormValid={this.isFormValid()}
            onFormSubmit={this.onFormSubmit}
            onInputChange={this.onInputChange}
            leftColumnStyles={leftColumnStyles}
            isRegistrationComplete={isRegistrationComplete}
        />
    }
}

const mapDispatchToProps = state => {
    const { isRegistrationComplete, isRegistrationSuccessful } = state.registrationReducer;
    return {
        isRegistrationComplete,
        isRegistrationSuccessful
    }
};

export default withRouter(connect(mapDispatchToProps, { registerRequestAction })(RegistrationFormContainer));