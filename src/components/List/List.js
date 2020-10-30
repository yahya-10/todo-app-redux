import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../../actions';
import todos from '../../reducers/todos';
import { useDispatch } from 'react-redux'

const List = (props) => {

    const [newTodo, setNewTodo] = useState ({
        id: "",
        message: "",
        isDone: ""
    })
    const [isEdit, setIsEdit] = useState (false)
    const getData = (obj) => {
        setNewTodo({
            id: obj.id,
            message: obj.message,
            isDone: obj.isDone
        })
        setIsEdit(true)
    }


    return (
        <ul>
            {props.todos.map((todo, i) =>(
                <li key={i} 
                className='todos'
                >{todo.message} 
                    <span className='trash'><i className="fas fa-trash" 
                    onClick={() => props.dispatch(deleteTodo(todo.id))}>
                    </i></span>
                    <span className='pen'><i class="fas fa-pen"
                    onClick={()=>getData(todo)}
                    ></i></span>
                </li>
            ))}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data,
})

export default connect(mapStateToProps)(List)
