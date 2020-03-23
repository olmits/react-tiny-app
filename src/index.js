import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import App from './containers/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import * as serviceWorker from './serviceWorker';

const store = configureStore()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


serviceWorker.unregister();
