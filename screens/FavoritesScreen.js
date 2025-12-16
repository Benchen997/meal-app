import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

export default function FavoritesScreen() {
  const favoritesContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => {
    return favoritesContext.ids.includes(meal.id);
  });
  return (
    <MealList items={favoriteMeals} />
  );
}