import { StyleSheet, TextInput, View } from "react-native";

import { ITodo } from "@definitions/ITodo";
import { Button } from "@components/index";

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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={editedTitle}
        onChangeText={setEditedTitle}
        placeholder="Edit todo"
        placeholderTextColor="#999"
      />
      <View style={styles.buttonGroup}>
        <Button
          label="Save"
          onPress={() => onSave(id, editedTitle, isCompleted)}
          theme="primary"
        />
        <Button label="Cancel" onPress={onCancel} theme="danger" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
  input: {
    width: "100%",
    fontSize: 20,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
