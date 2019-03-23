let id = 0;
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';

//action creator
export const addTodo = text => ({
    type: ADD_TODO,
    text
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

export const deleteTodo = id => ({
    type: DELETE_TODO,
    id
})

//reducer
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            id++;
            const newTodo = {
                title: action.text,
                isCompleted: false,
                id
            }
            return [
                ...state,
                newTodo
            ]
        case TOGGLE_TODO:
            return state.map(todo => {
                return todo.id === action.id
                ? {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
                : todo
            })
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)
        default:
            return state;
    }
}

export default todoReducer;