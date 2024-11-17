import { Button, Input, Space } from 'antd';

import { ITodo } from '@definitions/ITodo';

interface IEditableTodoItemProps {
  todo: ITodo;
  onSave: (id: number, title: string, isCompleted: boolean) => void;
  onCancel: () => void;
  setEditedTitle: React.Dispatch<React.SetStateAction<string>>;
  editedTitle: string;
}

export const EditableTodoItem = ({
  todo,
  editedTitle,
  setEditedTitle,
  onSave,
  onCancel,
}: IEditableTodoItemProps) => {
  const { id, isCompleted } = todo;

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Input
        style={{ width: '100%', fontSize: 20 }}
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        placeholder="Edit todo"
      />
      <Space size={16}>
        <Button
          variant="filled"
          color="primary"
          style={{ fontSize: 20 }}
          onClick={() => onSave(id, editedTitle, isCompleted)}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          color="danger"
          style={{ fontSize: 20 }}
          onClick={onCancel}
        >
          Cancel
        </Button>
      </Space>
    </Space>
  );
};
