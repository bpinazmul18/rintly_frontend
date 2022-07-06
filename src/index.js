import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import configureStore from './store/configureStore'
import {bugAdded, bugRemoved, bugResolved, getUnResolvedBugs} from "./store/bugs";
import { projectAdded } from "./store/projects";
import {userAdded} from "./store/users";

const store = configureStore()

// store.subscribe(() => {
//     console.log('Store changed!', store.getState())
// })

store.dispatch(bugAdded({ description: 'Bug add 1'}))
store.dispatch(bugAdded({ description: 'Bug add 2'}))

store.dispatch(userAdded({name: 'Nazmul Haque'}))
store.dispatch(userAdded({name: 'Borsha'}))

store.dispatch(bugAdded({ description: 'Bug add 3'}))
store.dispatch(projectAdded({ name: 'Project add 1'}))
store.dispatch(projectAdded({ name: 'Project add 2'}))
store.dispatch(projectAdded({ name: 'Project add 3'}))
store.dispatch(bugResolved({id: 1}))
store.dispatch(bugRemoved({id: 1}))

const x = getUnResolvedBugs(store.getState())
console.log(x)
const y = getUnResolvedBugs(store.getState())
console.log(y)

console.log(x === y)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
