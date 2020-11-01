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
                data: 
                state.data.map((el) =>
                    el.id === action.id ? { ...el, message: action.message } : el
                    )
                };
        case "CHANGE_STATUS" :
            return {
                ...state, 
                data: 
                    state.data.map((el)=>
                        el.id === action.id ? {...el, isDone: !el.isDone} : el)
                    }
        case "FILTER_TODO" :
            return {
                ...state,
                data: 
                state.data.filter((el) =>
                    el.isDone === true ? el : null)
            }
        default:
            return state;
    }
};

export default todos;


