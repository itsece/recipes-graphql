import { createContext, useContext, useState } from "react";

const FavouritesContext = createContext();

function FavouritesProvider ({ children }) {

  const [open, setFavouritesOpen] = useState(false);
  const [favourites, setFavourites] = useState([]);

  const favouritesTotal = favourites.length;

  function openFavourites() {
    setFavouritesOpen(true);
  }

  function closeFavourites() {
    setFavouritesOpen(false);
  }

  function addFavourite(item) {
    setFavourites([
      ...favourites,
      item
    ]);
  }

  function removeFavourite(item) {
    const index = favourites.findIndex(favourite => favourite.id == item.id);
    setFavourites([
      ...favourites.slice(0, index),
      ...favourites.slice(index + 1)
    ]);
  }

  return (
    <FavouritesContext.Provider value={{
      favourites,
      open,
      favouritesTotal,
      addFavourite,
      removeFavourite,
      openFavourites,
      closeFavourites
    }}>
      {children}
    </FavouritesContext.Provider>
  )
}

// Create Context Hook to Consume.
const useFavourites = () => useContext(FavouritesContext);

export {
  FavouritesProvider,
  useFavourites
}