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
    console.log(loadData);
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

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <>
      {isLoading && <p className={styles.MealsLoading}>Loading...</p>}
      {!isLoading && !error && (
        <Card className={styles.meals}>
          <ul>{mealsList}</ul>
        </Card>
      )}
      {error && <p className={styles.MealsError}>{error}</p>}
    </>
  );
};

export default AvailableMeals;
