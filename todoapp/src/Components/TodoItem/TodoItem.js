import React, { createRef } from "react";
import { MdDelete } from 'react-icons/md';
import { BiSolidEditAlt } from 'react-icons/bi';
import { Button, Modal } from 'react-bootstrap';
export class TodoItem extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false,
            todoRef: createRef()
        }
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleSave = this.handleSave.bind(this)

    }
    handleShow() {
        this.setState({ show: true });
    }
    handleClose() {
        this.setState({ show: false });
    }
    handleSave() {
        this.setState({ show: false });

        const value = this.state.todoRef.current.value;
        //    console.log("value",value)

        this.props.upDateTodoItem(this.props.id, value)
    }
    render() {
        //console.log(this.props)
        return (
            <>
                <li class="list-group-item d-flex justify-content-between">{this.props.text} <div className="d-flex align-items-center" ><BiSolidEditAlt style={{ color: "green", marginRight: "8px" }} onClick={this.handleShow} /> <MdDelete style={{ color: "brown" }} onClick={this.props.onClick} /></div> </li>


                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal Title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="d-flex justify-content-center  align-items-center gap-2 mb-4">
                            <input type="email" className="form-control border-danger " id="exampleFormControlInput1" placeholder="Your Todo" defaultValue={this.props.text} ref={this.state.todoRef} />
                            <button type="button" class="btn btn-success" onClick={this.handleSave}>Save</button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </>

        )
    }
}