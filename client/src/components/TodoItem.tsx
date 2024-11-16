import { useState } from 'react';
import { ITodo } from '../definitions/ITodo';

interface ITodoItemProps {
  todo: ITodo;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string, isCompleted: boolean) => void;
  onToggle: (id: number) => void;
}

export const TodoItem = ({
  todo,
  onDelete,
  onEdit,
  onToggle,
}: ITodoItemProps) => {
  const { id, title, isCompleted } = todo;
  const [isEditable, setIsEditable] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleSave = () => {
    onEdit(id, editedTitle, isCompleted);
    setIsEditable(false);
  };
  return (
    <div>
      {isEditable ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditable(false)}>Cancel</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => onToggle(id)}
          />
          <p>{todo.title}</p>
          <button onClick={() => setIsEditable(true)}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </>
      )}
    </div>
  );
};
