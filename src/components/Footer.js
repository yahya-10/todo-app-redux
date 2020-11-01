import React from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { filterTodo } from '../actions'



const Footer = (props) => {

    const dispatch = useDispatch()

    return (
        <div className="footer">
                <button onClick={()=>props.dispatch(filterTodo(props.todos.isDone))}>Complete tasks</button>
            </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data,
})

export default connect(mapStateToProps)(Footer)
