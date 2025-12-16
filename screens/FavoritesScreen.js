import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

export default function FavoritesScreen() {
  const favoritesContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => {
    return favoritesContext.ids.includes(meal.id);
  });
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }
  return (
    <MealList items={favoriteMeals} />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#351401",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#e2b497",
  },
});