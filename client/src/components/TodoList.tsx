import { useState } from 'react';
import { CreateTodoForm } from './CreateTodoForm';
import { TodoItem } from './TodoItem';
import { useTodos } from '../hooks/useTodos';

export const TodoList = () => {
  const {
    todos,
    error,
    getAllTodos,
    createTodo,
    editTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos();
  const [newTodo, setNewTodo] = useState('');

  console.log(error);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleCreateTodo = async () => {
    // if (!newTodo.trim()) return;

    createTodo(newTodo);
    getAllTodos();
  };

  return (
    <div>
      <CreateTodoForm
        newTodo={newTodo}
        onChange={handleChange}
        onSubmit={handleCreateTodo}
      />
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={editTodo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};
