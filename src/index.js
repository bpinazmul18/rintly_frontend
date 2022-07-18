import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client';

import App from './App';
import configureStore from './store/configureStore'
import logger from './services/logService'
import reportWebVitals from './reportWebVitals';


import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import {bugAdded, bugResolved} from "./store/bugs";

const store = configureStore()

store.dispatch(bugAdded({ description: '1'}))
store.dispatch(bugResolved({ id: 1}))

logger.init()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();