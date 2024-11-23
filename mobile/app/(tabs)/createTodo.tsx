import { Button } from "@/components/Button";
import { CreateTodoModal } from "@/components/CreateTodoModal";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function CreateTodoScreen() {
  const [title, setTitle] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handlePress = () => {
    setIsVisible(true);
    setTitle("World");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Button
        onPress={() => setTitle("Hello")}
        label="Create"
        theme="primary"
      />
      <Button onPress={handlePress} label="Cancel" theme="danger" />
      <CreateTodoModal
        isVisible={isVisible}
        onClose={() => {
          setIsVisible(false);
        }}
      ></CreateTodoModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
