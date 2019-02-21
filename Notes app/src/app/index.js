import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
//Storage
import store from './storage/store';
//Components
import App from './Components/App/App';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
