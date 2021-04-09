import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useEffect, useState } from "react";

import RecipesList from "../components/RecipesList";
import MainIngredientFilter from "../components/MainIngredientFilter";
import Loader from "../components/Loader";

const GET_ALL_RECIPES = gql`
  query {
    allRecipes {
      id
      title
      servings
      mainIngredient
    }
  }
`;

export default function RecipesPage() {

  const [recipes, setRecipes] = useState([]);
  const { data, loading } = useQuery(GET_ALL_RECIPES);

  useEffect(() => {
    setRecipes(data?.allRecipes);
  }, [data?.allRecipes]);

  const filterByIngredients = (ingredient) => {
    const newRecipes = data?.allRecipes.filter(recipe => recipe.mainIngredient.includes(ingredient));
    ingredient.length >= 1 ? setRecipes(newRecipes) : setRecipes(data?.allRecipes);
  }

  return !loading && data && recipes ? (
    <section className="section">
      <MainIngredientFilter recipes={data?.allRecipes} handleMainIngredientFilter={filterByIngredients}/>
      <RecipesList recipes={recipes} />
    </section>
  ) : (
    <Loader/>
  )
}