import Link from 'next/link';
import { useFavourites } from '../hooks/useFavourites';
import Container from './Container';

export default function Header() {

  const { favouritesTotal, openFavourites  } = useFavourites();

  return (
    <header className="header">
      <Container flex>
        <Link href="/"><h2 className="header__logo"> 🌮 Recipes</h2></Link>
        <button className="header__favouritesButton" onClick={() => openFavourites()}>Your Favourites ({favouritesTotal})</button>
      </Container>
    </header>
  )
}