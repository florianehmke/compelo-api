import { gql } from 'apollo-boost';

export const ADD_RATINGS = gql`
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
