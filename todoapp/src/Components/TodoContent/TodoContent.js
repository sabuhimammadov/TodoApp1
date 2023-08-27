import React from "react";
import { TodoInput } from "../TodoInput";
import { TodoList } from "../TodoList";
import Swal from 'sweetalert2';
export class TodoContent extends React.Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
        this.addTodo = this.addTodo.bind(this)
        this.removeList = this.removeList.bind(this)
        this.upDateTodoItem = this.upDateTodoItem.bind(this)
    }

    addTodo(text) {
        // const newList = [...this.state.list] bir basa state-in icine push ede bilmezsen evvelce state-in icindeki butun data
        // yeni value-a menimset sonra ise push etmek olar
        // newList.push(text)
        // this.setState({list:newList})
        const todo = {
            id: Date.now(),
            text,
            created: new Date()
        }
        const newList = [todo, ...this.state.list]
        this.setState({ list: newList })
    }


    removeList(todoId) {
        console.log("todoId", todoId)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {


            if (result.isConfirmed) {
                let newState = [...this.state.list];
                const filterData = newState.filter((item) => item.id !== todoId);
                this.setState({ list: filterData });

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }
    upDateTodoItem(todoId, todoText) {
        let copyList = [...this.state.list]
        let currentTodoItemIndex = copyList.findIndex(item => item.id === todoId)
        let currentItem = copyList[currentTodoItemIndex]
        let updateItem = { ...currentItem, updated: new Date(), text: todoText }
        copyList[currentTodoItemIndex] = updateItem
        this.setState({ list: copyList })
    }
    render() {
        console.log("TodoContentList", this.state.list)
        return (
            <>
                <TodoInput addTodo={this.addTodo} />
                <TodoList list={this.state.list} removeList={this.removeList} upDateTodoItem={this.upDateTodoItem} />

            </>
        )

    }
}