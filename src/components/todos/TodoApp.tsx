import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


export interface CreateTodo {
    name: string
}

export interface TodoItem extends CreateTodo {
    id: number
    completed: boolean
}

const TodoApp = () => {
    const [todos, setTodos] = useState<TodoItem[]>([])
    const [id, setId] = useState(0)

    const isValid = (name: string): boolean => !(!name || /^\s*$/.test(name))


    const addTodo = ({name}: CreateTodo) => {
        if (isValid(name)) {
            const newTodo = {name: name, id: id, completed: false}
            setId(pid => pid + 1)
            setTodos(prev => [newTodo, ...prev])
        }
    }

    const updateTodo = (todo: TodoItem) => {
        if (isValid(todo.name)) {
            setTodos(prev => prev.map(prevItem =>
                prevItem.id === todo.id ? todo : prevItem
            ))
        }
    }


    function deleteTodo(id: number) {
        setTodos(prev => prev.filter(item => item.id !== id))
    }

    const handleComplete = (id: number) => {
        setTodos(prev => prev.map(prevItem =>
            prevItem.id === id ? {...prevItem, completed: !prevItem.completed} : prevItem
        ))
    }


    return (
        <div className={"todo-app"}>
            <h1>What's the plan for today</h1>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} handleComplete={handleComplete}/>
        </div>
    );
};

export default TodoApp;