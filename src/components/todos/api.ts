import axios from "axios";

const todos = axios.create({baseURL: 'http://localhost:3000'})


interface Todo {
    id: number,
    title: string,
    completed: boolean
}

export const getTodos = () => todos.get<Todo[]>('/todos').then(r => r.data)

export const getTodo = (id: number) => todos.get<Todo>(`/todos/${id}`).then(r => r.data)