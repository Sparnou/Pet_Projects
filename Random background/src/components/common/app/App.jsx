import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import LoginFormContainer from '../../block/loginFormContainer';
import RegistrationFormContainer from '../../block/registrationFormContainer';
import UserPageContainer from '../../block/userPageContainer';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/main" component={UserPageContainer} />
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/registration" component={RegistrationFormContainer} />
                <Redirect to="/main"/>
            </Switch>
        </Router>
    )
};

export default App;