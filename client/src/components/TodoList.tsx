import { useCallback, useState } from 'react';
import { Layout } from 'antd';

import { CreateTodoForm, TodoItemWrapper } from '@components/index';
import { useTodos } from '@hooks/useTodos';

export const TodoList = () => {
  const { todos, error, createTodo, editTodo, toggleTodo, deleteTodo } =
    useTodos();
  const [newTodo, setNewTodo] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }, []);

  const handleCreateTodo = useCallback(async () => {
    // if (!newTodo.trim()) return;

    createTodo(newTodo);
  }, [createTodo, newTodo]);

  console.log('errors', error);

  return (
    <Layout style={{ padding: '24px 0' }}>
      <CreateTodoForm
        newTodo={newTodo}
        onChange={handleChange}
        onSubmit={handleCreateTodo}
      />
      <Layout
        style={{ justifyContent: 'center', alignItems: 'center', gap: 16 }}
      >
        {todos.map((todo) => (
          <TodoItemWrapper
            key={todo.id}
            todo={todo}
            onEdit={editTodo}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />
        ))}
      </Layout>
    </Layout>
  );
};
