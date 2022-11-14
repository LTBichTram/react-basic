import { useState, useEffect } from "react";

import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import useHttp from "../../hooks/use-http";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();
  const convertData = (dataMeals) => {
    const loadData = [];
    for (const key in dataMeals) {
      loadData.push({
        id: key,
        name: dataMeals[key].name,
        description: dataMeals[key].description,
        price: dataMeals[key].price,
      });
    }
    setMeals(loadData);
  };

  useEffect(() => {
    fetchMeals(
      {
        url: "https://food-order-app-27b9f-default-rtdb.firebaseio.com/meals.json",
      },
      (dataMeals) => {
        convertData(dataMeals);
      }
    );
  }, [fetchMeals]);

  let mealsList;
  if (!isLoading && !error) {
    if (meals.length > 0) {
      mealsList = (
        <Card className={styles.meals}>
          <ul>
            {meals.map((meal) => (
              <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            ))}
          </ul>
        </Card>
      );
    } else {
      mealsList = <p className={styles.noMeals}>No meals found!</p>;
    }
  }

  return (
    <>
      {isLoading && <p className={styles.MealsLoading}>Loading...</p>}
      {mealsList}
      {error && <p className={styles.MealsError}>{error}</p>}
    </>
  );
};

export default AvailableMeals;
