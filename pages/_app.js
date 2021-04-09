import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Favourites from '../components/Favourites';
import Header from '../components/Header';
import { FavouritesProvider } from '../hooks/useFavourites';
import '../styles/app.scss';

const client = new ApolloClient({
  uri: 'https://api.sampleapis.com/recipes/graphql',
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <FavouritesProvider>
        <Header />
        <Favourites />
        <Component {...pageProps} />
      </FavouritesProvider>
    </ApolloProvider>
  )
}

export default MyApp;