import { View, Text, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

export default function MealsDetailsScreen({ navigation, route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Ingredients: </Text>
      </View>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient} style={styles.ingredientItem}>
          {ingredient}
        </Text>
      ))}
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Steps</Text>
      </View>
      {selectedMeal.steps.map((step) => (
        <Text key={step} style={styles.stepItem}>
          {step}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    margin: 8,
  },
  detailText: {
    color: "white",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#e2b497",
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
