import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import counterReducer, {inc, dec} from './store/counter'
import todoReducer from './store/todo'

import './index.css';
import App from './App';


const store = createStore(
    combineReducers({
        counter: counterReducer,
        todo: todoReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.addTodo = (title) => {
    store.dispatch({
        type: 'ADD_TODO',
        text: title
    })
}


window.inc = () => store.dispatch(inc())
window.dec = () => store.dispatch(dec())

ReactDOM.render(<App />, document.getElementById('root'));