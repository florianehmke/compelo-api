import { gql } from 'apollo-boost';
import apolloClient from '../../apollo';
import {
  PlayerRatingByGameQuery,
  PlayerRatingByGameQueryVariables
} from '../../types/generated/graphql';
import { InitialElo } from '../elo';

const PLAYER_RATING_BY_GAME = gql`
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

export const playerRatingByGame = async (
  playerId: number,
  gameId: number,
  date: string = new Date().toISOString()
): Promise<number> => {
  const ratingData = await apolloClient.query<
    PlayerRatingByGameQuery,
    PlayerRatingByGameQueryVariables
  >({
    query: PLAYER_RATING_BY_GAME,
    variables: {
      gameId,
      playerId,
      date
    }
  });

  return ratingData?.data?.rating[0]?.rating ?? InitialElo;
};
