import React, { useState, useEffect, useRef } from 'react'

import './TodoForm.css'


function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSumbit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');

    }

    return (
        <form className="todo-form" onSubmit={handleSumbit}>
            {props.edit ? ( <>
            <input 
                type="text" 
                placeholder="Update task" 
                value={input} 
                name='text' 
                className="todo-input edit"
                onChange={handleChange}
                ref={inputRef}
            />
            <button onClick={handleSumbit} className="todo-button edit">Update</button>
            </> ) : (
            <> 
            <input 
            type="text" 
            placeholder="Add task" 
            value={input} 
            name='text' 
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
            />
            <button onClick={handleSumbit} className="todo-button">Add Task</button>
            </>
            )}
           
        </form>
    )
}

export default TodoForm
