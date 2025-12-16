import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

export default function MealsOverviewScreen({ navigation, route }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <MealList items={displayedMeals} />
  );
}
