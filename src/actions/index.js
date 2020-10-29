const ADD_TODO = "ADD_TODO" ;
export const addTodo = (message) => ({
    type: ADD_TODO ,
    message ,
    id: Date.now() ,
});

const DELETE_TODO = "DELETE_TODO" ;
export const deleteTodo = (id) => ({
    type: DELETE_TODO ,
    id ,
});

const EDIT_TODO = "EDIT_TODO" ;
export const editTodo = (todo) => ({
    type: EDIT_TODO ,
    payload: {todo} ,
});