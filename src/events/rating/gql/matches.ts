import { gql } from 'apollo-boost';

export const MATCHES = gql`
  query Matches {
    match(order_by: { created_at: asc }) {
      uuid
      date
      game_id
      teams {
        id
        result
        score
        appearances {
          player_id
        }
      }
    }
  }
`;
