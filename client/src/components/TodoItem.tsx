import React from 'react';
import { Button, Checkbox, Divider, Space, Typography } from 'antd';

import { ITodo } from '@definitions/ITodo';

interface ITodoItemProps {
  todo: ITodo;
  onDelete: (id: number) => void;
  setIsEditable: (isCompleted: boolean) => void;
  onToggle: (id: number) => void;
}

export const TodoItem = React.memo(
  ({
    todo,
    onDelete,
    // onEdit,
    onToggle,
    // isEditable,
    setIsEditable,
  }: ITodoItemProps) => {
    const { id, title, isCompleted } = todo;

    return (
      <>
        <Typography.Text style={{ fontSize: 20 }}>{title}</Typography.Text>
        <Divider />
        <Space>
          <Checkbox
            checked={isCompleted}
            style={{ fontSize: 20 }}
            onChange={() => onToggle(id)}
          >
            Completed
          </Checkbox>
          <Button
            variant="filled"
            color="primary"
            style={{ fontSize: 20 }}
            onClick={() => setIsEditable(true)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="danger"
            style={{ fontSize: 20 }}
            onClick={() => onDelete(id)}
          >
            Delete
          </Button>
        </Space>
      </>
    );
  },
);
