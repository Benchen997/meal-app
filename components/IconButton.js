import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

/**
 * IconButton component
 * @param {string} icon - The icon to display
 * @param {function} onPress - The function to call when the button is pressed
 * @returns
 */
export default function IconButton({ icon, onPress, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed ? styles.pressed : null]}
    >
      <Ionicons name={icon} size={22} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  pressed: {
    opacity: 0.7,
  },
});
