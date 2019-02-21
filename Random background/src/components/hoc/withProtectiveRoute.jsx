import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

const withProtectiveRoute = WrappedComponent => {

    return class extends Component {
        render() {
            const { isLoggedIn } = this.props;

            if (isLoggedIn) {
                return <WrappedComponent {...this.props} />
            }

            return <Redirect to="/login" />
        }
    }
};

export default withProtectiveRoute;


