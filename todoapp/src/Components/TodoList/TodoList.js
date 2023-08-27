import React from "react";
import { TodoItem } from "../TodoItem";

export class TodoList extends React.Component {
    render() {
        const { list, removeList, upDateTodoItem } = this.props;
        // console.log(list)
        const content = list?.map((todo) => {
            return (
                //    <li class="list-group-item d-flex justify-content-between">{todo.text} <div className="d-flex align-items-center"key={todo.id}><BiSolidEditAlt style={{ color: "green",marginRight:"8px" }} /> <MdDelete style={{ color: "brown" }} onClick={()=>removeList(todo.id)} /></div> </li>
                <TodoItem key={todo.id} id={todo.id} text={todo.text} onClick={() => removeList(todo.id)} upDateTodoItem={upDateTodoItem} />
            )



        })
        return (
            <div className="d-flex  flex-column justify-content-center align-items-center">
                <h4 style={{ color: "brown" }}>Your List</h4>
                <ul class="list-group  mt-4">

                    {/* {content} 
                   <li class="list-group-item">Cras justo odio</li>
                </ul> */}
                    <div>{content}</div>
                </ul>
            </div>
        )

    }
}