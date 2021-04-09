import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useRouter } from 'next/router'
import Loader from '../../components/Loader';

const GET_SINGLE_RECIPE_QUERY = gql`
  query ($id: ID!) {
    Recipe(id: $id) {
      title
      photoUrl
      description
      mainIngredient
    }
  }
`;

export default function SingleRecipe() {

  const router = useRouter();
  const { id } = router.query;

  const { data, loading } = useQuery(GET_SINGLE_RECIPE_QUERY, {
    variables: { id }
  });

  return !loading && data?.Recipe ? (
    <section className="section article">
      <div className="container">
        <h1>{data?.Recipe?.title}</h1>
        <p>{data?.Recipe?.description}</p>
      </div>
    </section>
  ) : (
    <Loader/>
  )
}