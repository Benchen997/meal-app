import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";
import { Alert } from "react-native";

export default function MealsDetailsScreen({ navigation, route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const favoritesContext = useContext(FavoritesContext);
  const isFavorite = favoritesContext.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (isFavorite) {
      favoritesContext.removeFavorite(mealId);
      // show a prompt to the user to confirm the removal,but no input is needed
      Alert.alert("Removed from favorites", "Are you sure you want to remove this meal from your favorites?", [
        { text: "Cancel", style: "cancel" },
        { text: "Remove", onPress: () => {
          favoritesContext.removeFavorite(mealId);
        }, style: "destructive" },
      ]);
    } else {
      favoritesContext.addFavorite(mealId);
      Alert.alert("Added to favorites");
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={isFavorite ? "star" : "star-outline"}
          onPress={() => {
            changeFavoriteStatusHandler();
          }}
          color="white"
        />
      ),
    });
  }, [navigation, selectedMeal.title, favoritesContext]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listContainer}>
        <SubTitle title={"Ingredients"}>Ingredients</SubTitle>
        <List data={selectedMeal.ingredients} />
        <SubTitle title={"Steps"}>Steps</SubTitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    alignItems: "center",
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
  listContainer: {
    maxWidth: "80%",
  },
});
