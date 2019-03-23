let id = 0;

export const todoReducer = (state =[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
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
        default:
            return state;
    }
}

export default todoReducer;