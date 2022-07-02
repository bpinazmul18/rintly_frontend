import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import {Map} from "immutable";


let book = Map({ title: 'title 1'})

function publish(book) {
    return book.set('isPublish', true)
}

book = publish(book)

console.log(book.toJS())
console.log(book.get('title'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
