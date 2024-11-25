import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { ITodo } from "@definitions/ITodo";
import { EditableTodoItem, TodoItem } from "@components/index";

interface ITodoItemWrapperProps {
  todo: ITodo;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string, isCompleted: boolean) => void;
  onToggle: (id: number) => void;
}

export const TodoItemWrapper = ({
  todo,
  onDelete,
  onEdit,
  onToggle,
}: ITodoItemWrapperProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleSave = (id: number, title: string, isCompleted: boolean) => {
    onEdit(id, title, isCompleted);
    setIsEditable(false);
  };

  const handleCancel = () => {
    setEditedTitle(todo.title);
    setIsEditable(false);
  };

  return (
    <View style={styles.wrapper}>
      {isEditable ? (
        <EditableTodoItem
          todo={todo}
          onSave={handleSave}
          onCancel={handleCancel}
          editedTitle={editedTitle}
          setEditedTitle={setEditedTitle}
        />
      ) : (
        <TodoItem
          todo={todo}
          onDelete={onDelete}
          setIsEditable={setIsEditable}
          onToggle={onToggle}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
