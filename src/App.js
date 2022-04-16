import { useState } from 'react';
import './App.css';
import TodosForm from './components/TodosForm';
import TodosList from './components/TodosList';

function App() {
    const [todos, setTodos] = useState([
        {id: Date.now(), body: "first todo"}
    ]);
    const createTodo = (newTodo) => {
      setTodos([...todos, newTodo])
    }
    const delTodo = (todo) => {
        setTodos(todos.filter((f) => f.id !== todo.id));
    }

    return (
        <div className="App">
            <TodosForm create={createTodo} todos={todos}/>
            {todos.length
                ? <TodosList del={delTodo} todos={todos} title="Todo list"/>
                : <h2>Todo list is empty</h2>
            }
        </div>
    );
}

export default App;
