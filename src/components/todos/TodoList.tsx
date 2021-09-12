import React, {useState} from 'react';
import {TodoItem} from "./TodoApp";
import {GiCancel, GrFormEdit, MdDone, TiDeleteOutline} from "react-icons/all";
import './TodoList.css'

type Props = {
    todos: TodoItem[]
    deleteTodo: (id: number) => void
    updateTodo: (todo: TodoItem) => void
    handleComplete: (id: number) => void
}
const TodoList = ({todos, deleteTodo, updateTodo, handleComplete}: Props) => {
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState<TodoItem | null>(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (value !== null) {
            setValue({...value, name: e.target.value})
        }
    }

    const onUpdate = (todo: TodoItem) => {
        updateTodo(todo)
        setEdit(false)
    }

    const onEdit = (todo: TodoItem) => {
        setValue(todo)
        setEdit(true)
    }

    return (
        <div className={"todo-list"}> {
            todos.sort((f, s) => f.completed ? 1 : -1)
                .map((todo) =>
                    <div key={todo.id} className={"todoList"}>
                        {
                            edit && value?.id === todo.id
                                ? <div className={todo.completed ? "completed todoItem" : "todoItem"}>
                                    <input type="text" value={value.name} onChange={onChange} className={"updateBox"}/>
                                    <div>
                                        <MdDone onClick={() => onUpdate({...todo, name: value?.name})}
                                                className={"updateButton"}/>
                                        <GiCancel onClick={() => setEdit(false)} className={"cancelButton"}/>
                                    </div>
                                </div>
                                : <div className={todo.completed ? "completed todoItem" : "todoItem"}>
                                    <div className={"todo-label"}>
                                        <input type="checkbox" className={"complete"} checked={todo.completed}
                                               onChange={() => handleComplete(todo.id)}></input>
                                        <span onClick={() => onEdit(todo)}>{todo.name}</span>
                                    </div>
                                    <div className={"icons"}>
                                        < GrFormEdit onClick={() => onEdit(todo)} className={"editButton"}/>
                                        <TiDeleteOutline onClick={() => deleteTodo(todo.id)} className={"deleteButton"}/>
                                    </div>
                                </div>

                        }
                    </div>
                )
        }
        </div>
    );
};

export default TodoList;