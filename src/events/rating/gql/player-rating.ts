import { gql } from 'apollo-boost';

export const PLAYER_RATING_BY_GAME = gql`
  query PlayerRatingByGame(
    $playerId: Int!
    $gameId: Int!
    $date: timestamptz!
  ) {
    rating(
      where: {
        match: { game_id: { _eq: $gameId }, _and: { date: { _lt: $date } } }
        player_id: { _eq: $playerId }
      }
      order_by: { id: desc }
    ) {
      rating
    }
  }
`;
