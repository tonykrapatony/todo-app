import React from 'react';
import TodoItem from './TodoItem';


export default function TodosList({todos, title, del}) {
    return (
        <div className='todo_list'>
            <h2>{title}</h2>
            {todos.map(todo => <TodoItem del={del} key={todo.id} todo={todo}/>)}
        </div>
    )
}
