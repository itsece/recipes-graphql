import { useFavourites } from "../hooks/useFavourites";
import RecipeCard from "./RecipeCard";

export default function RecipesList({ recipes }) {

  const { addFavourite, removeFavourite, favourites } = useFavourites();

  return recipes && (
    <div className="recipe-list">
      {recipes.map((recipe, index) => {
        const isRecipeFavourited = favourites.some(favourite => favourite.id == recipe.id);
        return (
            <RecipeCard
              serves={recipe.servings}
              id={recipe.id}
              favourited={isRecipeFavourited}
              key={index}
              title={recipe.title}
              onAdd={() => addFavourite(recipe)}
              onRemove={() => removeFavourite(recipe)}
            />
        )
      })}
    </div>
  )
}