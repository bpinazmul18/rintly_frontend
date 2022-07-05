import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import store from './store'
import {bugAdded, bugRemoved} from "./actions";

const unsubscribe = store.subscribe(() => {
    console.log('Store changed!', store.getState())
})

store.dispatch(bugAdded('Bug add 1'))

unsubscribe()

store.dispatch(bugRemoved(1))
console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
