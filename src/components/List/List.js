import React from 'react'
import { connect } from 'react-redux'
import Edit from '../../components/Edit';
import { deleteTodo,changeStatus } from '../../actions';

const List = (props) => {

    const styles = {
        textDecoration: "line-through",
        textDecorationColor: "red"
    }    


    return (
        <div>
            <ul>
                {props.todos.map((todo, i) =>(
                    <li key={i} 
                    className='todos'
                    onClick={()=>props.dispatch(changeStatus(todo.id))}
                    style={todo.isDone ? styles : null}
                    >{todo.message} 
                        <span className='trash'><i className="fas fa-trash" 
                        onClick={() => props.dispatch(deleteTodo(todo.id))}>
                        </i></span> 
                        <span><Edit todo={todo} /></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data,
})

export default connect(mapStateToProps)(List)
