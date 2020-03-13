import { Injectable } from '@nestjs/common';
import { gql } from 'apollo-boost';

import { ApolloService } from './apollo.service';
import Elo, { InitialElo } from './shared/elo';
import {
  AddRatingsMutation,
  AddRatingsMutationVariables,
  Match,
  MatchesQuery,
  MatchesQueryVariables,
  PlayerRatingByGameQuery,
  PlayerRatingByGameQueryVariables,
  Rating_Insert_Input,
} from './types/generated/graphql';

@Injectable()
export class EventService {
  matches = gql`
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

  add_ratings = gql`
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

  player_rating_by_game = gql`
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

  constructor(private apolloService: ApolloService) {}

  async updateRatings() {
    const matchData = await this.apolloService.client.query<
      MatchesQuery,
      MatchesQueryVariables
    >({ query: this.matches });

    const matches = matchData?.data?.match ?? [];
    for (const match of matches) {
      await this.updateRatingsForMatch(match);
    }
  }

  async updateRatingsForMatch(match: Partial<Match>) {
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
          match.date,
        );
        eloList.push(playerRatings[playerId]);
      }
      elo.addPlayer(team.id, -team.score, this.mean(eloList));
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

      await this.addRatings(ratings);
    }
  }

  mean(numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
  }

  async playerRatingByGame(
    playerId: number,
    gameId: number,
    date: string = new Date().toISOString(),
  ): Promise<number> {
    const ratingData = await this.apolloService.client.query<
      PlayerRatingByGameQuery,
      PlayerRatingByGameQueryVariables
    >({
      query: this.player_rating_by_game,
      variables: {
        gameId,
        playerId,
        date,
      },
    });

    return ratingData?.data?.rating[0]?.rating ?? InitialElo;
  }

  async addRatings(ratings: Rating_Insert_Input[]) {
    const ratingData = await this.apolloService.client.mutate<
      AddRatingsMutation,
      AddRatingsMutationVariables
    >({
      mutation: this.add_ratings,
      variables: {
        ratings,
      },
    });

    if (ratingData.errors) {
      throw new Error(ratingData.errors.map(value => value.message).join(', '));
    }
  }
}
