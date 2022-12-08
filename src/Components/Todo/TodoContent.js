import React, { useState, useRef, useEffect } from 'react';
import ToDoList from './ToDoList.js';
import {v4 as uuidv4} from 'uuid';

//Practice content from some youtube tutorial vids

function TodoContent() {
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();

    const LOCAL_STORAGE_KEY = 'todoApp.todos';
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos) 
            setTodos(storedTodos)
    }, []);

    function toggleTodo(id) {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value;
        if (name == "")
            return;
        console.log(name);
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
        })
        todoNameRef.current.value = null;
    }

    function clearTodos() {
        const newTodos = todos.filter(todo => todo.complete);
        setTodos(newTodos);
    }

    return (
        <div>
            <ToDoList todos={todos} toggleTodo={toggleTodo} />
            <input ref={todoNameRef} type="text" />
            <button onClick={handleAddTodo}>Add Todo</button>
            <button onClick={clearTodos}>Clear Completed Todos</button>
            <div>{todos.filter(todo => !todo.complete).length} left to do</div>
        </div>
    )
}

export default TodoContent;