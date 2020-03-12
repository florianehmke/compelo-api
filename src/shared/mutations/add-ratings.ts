import { gql } from 'apollo-boost';
import apolloClient from '../../apollo';
import {
  AddRatingsMutation,
  AddRatingsMutationVariables,
  Rating_Insert_Input
} from '../../types/generated/graphql';

const ADD_RATINGS = gql`
  mutation AddRatings($ratings: [rating_insert_input!]!) {
    insert_rating(
      objects: $ratings
      on_conflict: {
        constraint: rating_player_id_match_uuid_key
        update_columns: [rating, rating_before]
      }
    ) {
      affected_rows
    }
  }
`;

export const addRatings = async (ratings: Rating_Insert_Input[]) => {
  const ratingData = await apolloClient.mutate<
    AddRatingsMutation,
    AddRatingsMutationVariables
  >({
    mutation: ADD_RATINGS,
    variables: {
      ratings
    }
  });

  if (ratingData.errors) {
    throw new Error(ratingData.errors.map(value => value.message).join(', '));
  }
};
