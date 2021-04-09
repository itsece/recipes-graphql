import { useEffect, useState } from "react";
import Container from "./Container";

function getMainIngredientsFromRecipes(recipes) {
  return recipes
  .filter(recipe => recipe.mainIngredient) // Find recipies that have "mainIngredients"
  .map(recipe => recipe.mainIngredient) // loop over them
  .reduce((acc, ingredient) => { // Return and Object for each ingredient that has a count.
    if (acc[ingredient]) {
      acc[ingredient] = {
        ...acc[ingredient],
        count: acc[ingredient].count += 1
      }
    } else {
      acc[ingredient] = {
        title: ingredient,
        count: 1
      }
    }
    return acc;
  }, {});
}

export default function MainIngredientFilter({ recipes, handleMainIngredientFilter }) {

  const ingredients = Object.values(getMainIngredientsFromRecipes(recipes));
  const [activeFilter, setActiveFilter] = useState("");

  const addActiveFilter = (ingredient) => {
    setActiveFilter(ingredient)
  };

  useEffect(() => {
    handleMainIngredientFilter(activeFilter);
  }, [activeFilter]);

  return (
    <section className="section main-ingredient-filter">
      <Container>
        <h2>Filter By Main Ingredient:</h2>
        <div className="main-ingredient-filter__list">
          <button className={`main-ingredient-filter__button ${activeFilter.length < 1 ? 'main-ingredient-filter__button--active' : ''}`} onClick={() => addActiveFilter('')}>All {ingredients.length}</button>
          {ingredients.map((ingredient, index) => {
            const isAnActiveFilter = activeFilter.includes(`${ingredient.title}`);
            return isAnActiveFilter ? (
              <button className="main-ingredient-filter__button main-ingredient-filter__button--active" key={index}>{ingredient.title} ({ingredient.count})</button>
            ) : (
              <button className="main-ingredient-filter__button" key={index} onClick={() => addActiveFilter(ingredient.title)}>{ingredient.title} ({ingredient.count})</button>
            )
          })}
        </div>
      </Container>
    </section>
  )
}