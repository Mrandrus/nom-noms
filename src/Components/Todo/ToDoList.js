import Todo from './Todo.js';

export default function ToDoList({ todos, toggleTodo }) {
    return (
            todos.map(todo => {
                return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
            })
    );
}

