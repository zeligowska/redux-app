import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


import './index.css';
import App from './App';

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + 1;
        case 'DECREMENT_COUNTER':
            return state - 1;
        default:
            return state;
    }
}


let store = createStore(counterReducer)
console.log('initial state: ', store.getState());
store.dispatch({
    type: 'INCREMENT_COUNTER'
})
console.log('state after increment: ', store.getState())
store.dispatch({
    type: 'DECREMENT_COUNTER'
})
console.log('state after decrement: ', store.getState())
store.dispatch({
    type: 'DECREMENT_COUNTER'
})
console.log('state after second decrement: ', store.getState())

ReactDOM.render(<App />, document.getElementById('root'));