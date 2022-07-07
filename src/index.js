import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import configureStore from './store/configureStore'
// import {bugAdded, bugAssignedToUser, bugRemoved, bugResolved, getUnResolvedBugs, getBugsByUser} from "./store/bugs";
// import { projectAdded } from "./store/projects";
// import {userAdded} from "./store/users";


import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

const store = configureStore()

// store.subscribe(() => {
//     console.log('Store changed!', store.getState())
// })

// store.dispatch(bugAdded({ description: 'Bug add 1'}))
// store.dispatch(bugAdded({ description: 'Bug add 2'}))
//
// store.dispatch(userAdded({name: 'Nazmul Haque'}))
// store.dispatch(userAdded({name: 'Borsha'}))
//
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1}))
//
// store.dispatch(bugAdded({ description: 'Bug add 3'}))
// store.dispatch(projectAdded({ name: 'Project add 1'}))
// store.dispatch(projectAdded({ name: 'Project add 2'}))
// store.dispatch(projectAdded({ name: 'Project add 3'}))
// store.dispatch(bugResolved({id: 1}))
// store.dispatch(bugRemoved({id: 2}))

// const bugs = getBugsByUser(1)(store.getState())
// console.log(bugs)

store.dispatch((dispatch, getState) => {
    // Call an API
    // When the promise is resolved => dispatch()
    dispatch({
        type: 'apiCallBegan', // apiRequested
        payload: {
            url: '/bugs', // /bugs
            method: 'get',
            data: {},
            onSuccess: 'bugsReceived',
            onError: 'apiRequestFailed'
        }
    })
    // console.log(getState())
    // If the promise is rejected => dispatch()
    // dispatch({type: 'error', payload: { message: 'An error occurred.'}})


})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
