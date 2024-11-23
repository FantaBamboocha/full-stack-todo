import { Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonProps {
  label: string;
  theme: "primary" | "secondary" | "danger";
  onPress?: () => void;
}

export const Button = ({ label, theme, onPress }: ButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={[styles.button, styles[theme]]} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    backgroundColor: "#3772FF",
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },

  primary: {
    backgroundColor: "#3772FF",
  },

  danger: {
    backgroundColor: "#EB5757",
  },
});
