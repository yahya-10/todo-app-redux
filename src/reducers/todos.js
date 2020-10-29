const initialState = {
    data: [] ,
    
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        message: action.message,
                        id: action.id,
                        isDone: false,
                    },
                ],
            };
        case "DELETE_TODO":
            const todos = state.data.filter((todo) => todo.id !== action.id)
            return {
                ...state,
                data: todos,
            };
        case "EDIT_TODO" :
            return {
                ...state,
                data: state.data.map(todo => {
                    if (todo.id === action.payload.todo.id){
                        return {
                            ...todo,
                            ...action.payload.todo
                        }
                    }
                    return todo;
                })
            }
        
        default:
            return state;
    }
};

export default todos;