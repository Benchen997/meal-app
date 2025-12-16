import { View, Text, StyleSheet } from "react-native";

/**
 * Display the details of the meal
 * @param {Duration} duration - The duration of the meal
 * @param {Complexity} complexity - The complexity of the meal
 * @param {Affordability} affordability - The affordability of the meal
 * @returns 
 */
export default function MealDetails({ duration, complexity, affordability, style, textStyle }) {
  return (
    <View style={[styles.detailsContainer, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
