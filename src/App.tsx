import React from 'react';
import './App.css'
import {QueryClient, QueryClientProvider} from "react-query";
import TodoApp from "./components/todos/TodoApp";
import AddisonExercises from "./components/AdditionExcercise/AddisonExercises";


const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <AddisonExercises/>
                {/*<TodoApp/>*/}
            </div>
        </QueryClientProvider>
    );
}

export default App;
