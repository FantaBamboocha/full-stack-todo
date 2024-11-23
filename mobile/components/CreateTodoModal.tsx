import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface CreateTodoModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const CreateTodoModal = ({
  isVisible,
  onClose,
}: CreateTodoModalProps) => {
  return (
    <Modal animationType="slide" transparent visible={isVisible}>
      <View style={styles.modalContent}>
        <Text>Modal</Text>
        <Pressable onPress={onClose}>
          <Text>Close</Text>
        </Pressable>
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
});
