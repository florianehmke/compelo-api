import { gql } from 'apollo-boost';
import apolloClient from './apollo';
import Elo from './shared/elo';
import { addRatings } from './shared/mutations';
import { playerRatingByGame } from './shared/queries';
import {
  Match,
  MatchesQuery,
  MatchesQueryVariables,
  Rating_Insert_Input,
} from './types/generated/graphql';

const MATCHES = gql`
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

const updateRatingsForMatch = async (match: Partial<Match>) => {
  const playerRatings: { [key: number]: number } = {};

  const elo = new Elo();
  for (const team of match?.teams ?? []) {
    const eloList = [];
    for (const appearance of team?.appearances) {
      const playerId = appearance.player_id;
      const gameId = match.game_id!;

      playerRatings[playerId] = await playerRatingByGame(
        playerId,
        gameId,
        match.date,
      );
      eloList.push(playerRatings[playerId]);
    }
    elo.addPlayer(team.id, -team.score, mean(eloList));
  }
  elo.calculate();

  for (const team of match?.teams ?? []) {
    const ratings: Partial<Rating_Insert_Input>[] = [];
    const teamElo = elo.findPlayer(team.id)!;

    team.appearances.forEach(appearance => {
      ratings.push({
        match_uuid: match.uuid,
        rating: playerRatings[appearance.player_id] + teamElo.ratingDelta,
        rating_before: playerRatings[appearance.player_id],
        player_id: appearance.player_id,
      });
    });

    await addRatings(ratings);
  }
};

const mean = (numbers: number[]): number =>
  numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

export const updateRatings = async () => {
  const matchData = await apolloClient.query<
    MatchesQuery,
    MatchesQueryVariables
  >({ query: MATCHES });

  const matches = matchData?.data?.match ?? [];
  for (const match of matches) {
    await updateRatingsForMatch(match);
  }
};

export default updateRatings;
