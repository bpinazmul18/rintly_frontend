import React from 'react';
import ReactDOM from 'react-dom/client';

import {compose, pipe} from 'lodash/fp'

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

// const numbers = [1, 2, 3, 4]
// const result = numbers.map(n => n * 2)
// console.log(result)

let input = '   JavaScript  '
let output = '<div>' + input.trim() + '</div>'

const trim = str => str.trim()
const wrap = type => str => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase()

const transform = pipe(trim, toLowerCase, wrap('div'))
console.log(transform(input))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
