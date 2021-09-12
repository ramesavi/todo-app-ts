import React, {useState} from 'react';
import {CreateTodo} from "./TodoApp";

type Props = {
    addTodo: (todo: CreateTodo) => void
}
const TodoForm = ({addTodo}: Props) => {
        const [todo, setTodo] = useState('')

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault()
            addTodo({name: todo})
            setTodo('')
        }

        function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
            setTodo(e.target.value)
        }

        return (
            <form onSubmit={handleSubmit} className={"todo-form"}>
                <input type="text" placeholder="add todo" value={todo} onChange={handleChange} autoFocus
                       className={"todo-input"}/>
                <button className={"todo-button"}>add todo</button>
            </form>
        );
    }
;

export default TodoForm;