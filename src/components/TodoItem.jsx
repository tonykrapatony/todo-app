import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import classes from './UI/button/MyButton.module.css';

export default function TodoItem(props) {
    const [cssDone, setCssDone] = useState('todo_item');

    const toggleDone = () => {
        setCssDone('todo_item done');
    }

    return (
        <div className={cssDone}>
            <div className='todoText'>{props.todo.body}</div>
            <div className='todoBtn'>
                <MyButton onClick={toggleDone} className={classes.myBtn_done}>Done</MyButton>
                {/* <MyButton className={classes.myBtn_edit}>Edit</MyButton> */}
                <MyButton onClick={() => props.del(props.todo)} className={classes.myBtn_del}>Delete</MyButton>
            </div>
        </div>
    )
}
