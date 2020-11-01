import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { editTodo } from '../actions'

const Edit = ({todo}) => {

    const dispatch = useDispatch()
    const [data, setData] = useState (todo.message)
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => setData(e.target.value);

    const edit = () => {
        dispatch(editTodo({ id: todo.id, message: data }));
    };

    return (
        <div>
            <span className='pen'><i class="fas fa-pen" onClick={handleShow}></i></span>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
            <Modal.Header style={{backgroundColor:"grey"}} closeButton>
                <Modal.Title >update task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input value={data} style={{width:"100%"}} onChange={handleChange} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" style={{width:"100px"}} onClick={()=>{setData(todo.message);
                handleClose();}
                }>
                    Cancel
                </Button>
                <Button variant="primary" style={{width:"100px"}} onClick={()=>{edit();
                handleClose();}
                }>Update</Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default Edit
