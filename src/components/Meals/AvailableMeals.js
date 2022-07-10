import React, { useState, useEffect } from 'react'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://test-cb02a-default-rtdb.firebaseio.com/meals.json')
            if(!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json()
            const loadedData = []
            for(const key in data) {
                loadedData.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }
            setMeals(loadedData)
            setIsLoading(false)
        }
        fetchMeals().catch(error => {
            setIsLoading(false)
            setError(error.message)
            console.log(error.message)
        })
    }, [])
    if(isLoading) {
        return <p className={classes.MealsLoading}>Loading...</p>
    }
    if(error) {
        return <p className={classes.MealsError}>{error}</p>
    }

    const mealsList = meals.map(item => (
        <li key={item.id}>
            <MealItem
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
            />
        </li>
    ))


  return (
    <Card className={classes.meals}>
        <ul>{mealsList}</ul>
    </Card>
  )
}

export default AvailableMeals