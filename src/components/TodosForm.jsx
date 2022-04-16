import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import classes from './UI/button/MyButton.module.css';
import MyInput from './UI/input/MyInput';

export default function TodosForm({create}) {
    const [todo, setTodo] = useState({body: ''});

    const addTodo = (el) => {
        el.preventDefault();
        const newTodo = {
            ...todo, id: Date.now() 
        }
        create(newTodo);
        setTodo({body: ''});
    }
     
    return (
        <form className='todoForm'>
            <MyInput
                value={todo.body}
                onChange={el => setTodo({...todo, body: el.target.value})}
                type="text"
                placeholder='Enter your todo'
            />
            <MyButton onClick={addTodo} className={classes.myBtn}>Add</MyButton>
        </form>
    )
}
