import { Injectable } from '@nestjs/common';

import { ApolloService } from '../../apollo.service';
import Elo, { InitialElo } from '../../shared/elo';
import { mean } from '../../shared/math';
import {
  AddRatingsMutation,
  AddRatingsMutationVariables,
  Match,
  MatchesQuery,
  MatchesQueryVariables,
  PlayerRatingByGameQuery,
  PlayerRatingByGameQueryVariables,
  Rating_Insert_Input
} from '../../types/generated/graphql';
import { ADD_RATINGS, MATCHES, PLAYER_RATING_BY_GAME } from './gql';

@Injectable()
export class RatingService {
  constructor(private apolloService: ApolloService) {}

  async updateRatings(): Promise<void> {
    const matchData = await this.apolloService.client.query<
      MatchesQuery,
      MatchesQueryVariables
    >({ query: MATCHES });

    const matches = matchData?.data?.match ?? [];
    for (const match of matches) {
      await this.updateRatingsForMatch(match);
    }
  }

  async updateRatingsForMatch(match: Partial<Match>): Promise<void> {
    const playerRatings: { [key: number]: number } = {};

    const elo = new Elo();
    for (const team of match?.teams ?? []) {
      const eloList = [];
      for (const appearance of team?.appearances) {
        const playerId = appearance.player_id;
        const gameId = match.game_id!;

        playerRatings[playerId] = await this.playerRatingByGame(
          playerId,
          gameId,
          match.date
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
          player_id: appearance.player_id
        });
      });

      await this.addRatings(ratings);
    }
  }

  async playerRatingByGame(
    playerId: number,
    gameId: number,
    date: string = new Date().toISOString()
  ): Promise<number> {
    const ratingData = await this.apolloService.client.query<
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
  }

  async addRatings(ratings: Rating_Insert_Input[]): Promise<void> {
    const ratingData = await this.apolloService.client.mutate<
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
  }
}
