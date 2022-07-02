import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

const person = {
    name: 'Nazmul',
    address: {
        country: 'usa',
        city: 'sanfransisco'
    }
}
console.log(person)
person.name = 'test'
console.log(person)

const updated = Object.assign({}, person, {name: 'test2', age: 30})
console.log(updated)

const spreedOp = {...person, address: {...person.address, city: 'new york'}, name: 'test3', age: 40}
console.log(spreedOp)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
