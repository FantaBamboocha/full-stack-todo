import { Modal, StyleSheet, TextInput, View } from "react-native";

import { Button } from "@components/Button";

interface ICreateTodoModalProps {
  isVisible: boolean;
  onClose: () => void;
  newTodo: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
}

export const CreateTodoModal = ({
  isVisible,
  onClose,
  newTodo,
  onChange,
  onSubmit,
}: ICreateTodoModalProps) => {
  const handleSubmit = () => {
    onSubmit();
    onClose();
  };
  return (
    <Modal animationType="slide" transparent visible={isVisible}>
      <View style={styles.modalContent}>
        <Button onPress={onClose} label="Close" theme="primary" />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={newTodo}
            placeholder="Enter todo"
            placeholderTextColor="#999"
            onChangeText={onChange}
          />
          <Button onPress={handleSubmit} label="Add" theme="primary" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
  },

  form: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  input: {
    flex: 1,
    fontSize: 24,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});
