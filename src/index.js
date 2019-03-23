import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import counterReducer, {inc, dec} from './store/counter'
import todoReducer, { addTodo, toggleTodo, deleteTodo } from './store/todo'

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


window.inc = () => store.dispatch(inc())
window.dec = () => store.dispatch(dec())
window.addTodo = text => store.dispatch(addTodo(text))
window.toggleTodo = id => store.dispatch(toggleTodo(id));
window.deleteTodo = id => store.dispatch(deleteTodo(id));

ReactDOM.render(<App />, document.getElementById('root'));