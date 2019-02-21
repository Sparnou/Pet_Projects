//React, Redux modules
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App'
import { Provider } from 'react-redux';

//store module
import store from './Store/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
