import { useFavourites } from "../hooks/useFavourites";
import { FiXCircle as CloseIcon } from "react-icons/fi";

export default function Favourites() {

  const { open, closeFavourites, favourites, removeFavourite, favouritesTotal } = useFavourites();

  return open && (
    <div className="favourites">
      <div className="favourites__header">
        <h1>Favourite Recipes ({favouritesTotal})</h1>
        <button onClick={() => closeFavourites()}>Close</button>
      </div>
      {favourites.length >= 1 && <ul className="favourites__list">
        {favourites.map((favourite, index) => (
          <div className="favourites__item">
            <h3 className="favourites__item-name">{favourite.title}</h3>
            <button className="favourites__item-button" onClick={() => removeFavourite(favourite)}><CloseIcon/></button>
          </div>
        ))}
      </ul>}
      {favourites.length < 1 && <p className="favourites__empty-message">Click the heart on a recipe to add favourites.</p>}
    </div>
  )
}