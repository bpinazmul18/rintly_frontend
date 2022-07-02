import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';


const numbers = [1, 2, 3]

// adding start
const addedStart = [4, ...numbers]
console.log(addedStart)
// adding end
const addedEnd = [...numbers, 4]
console.log(addedEnd)

// findIndex
const index = numbers.indexOf(21)
console.log(index)

// remove item
const remove = numbers.filter(n => n !== 2)
console.log(remove)

// update item
const update = numbers.map(n => n === 2 ? 20 : n)
console.log(update)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
