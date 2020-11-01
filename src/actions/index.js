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
export const editTodo = (payload) => ({
    type: EDIT_TODO ,
    payload ,
});

const CHANGE_STATUS = "CHANGE_STATUS" ;
export const changeStatus = (id) => ({
    type: CHANGE_STATUS ,
    id ,
})

const FILTER_TODO = "FILTER_TODO" ;
export const filterTodo = (payload) => ({
    type: FILTER_TODO ,
    payload ,
});

