import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../../actions';
import todos from '../../reducers/todos';
import { useDispatch } from 'react-redux'

const List = (props) => {

    const dispatch = useDispatch()


    return (
        <ul>
            {props.todos.map((todo, i) =>(
                <li key={i} 
                className='todos'
                >{todo.message} 
                    <span className='trash'><i className="fas fa-trash" 
                    onClick={() => props.dispatch(deleteTodo(todo.id))}>
                    </i></span>
                    <span className='pen'><i class="fas fa-pen"></i></span>
                </li>
            ))}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data,
})

export default connect(mapStateToProps)(List)
