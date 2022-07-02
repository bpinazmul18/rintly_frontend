import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import {Map} from "immutable";
import produce from "immer";


let book = { title: 'title 1'}

function publish (book) {
    return produce(book, draftBook => {
        draftBook.isPublish = true
    })
}

let update = publish(book)
console.log(update)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
