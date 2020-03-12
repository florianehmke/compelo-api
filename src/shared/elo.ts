export const InitialElo = 1500;

type Player = {
  id: number;

  place: number;
  ratingPre: number;
  ratingPost: number;
  ratingDelta: number;
};

class Elo {
  players: Player[] = [];

  findPlayer(id: number): Player | undefined {
    return this.players.find(player => player.id === id);
  }

  addPlayer(id: number, place: number, elo: number) {
    this.players.push({
      id,
      place,
      ratingPre: elo,
      ratingDelta: 0,
      ratingPost: 0
    });
  }

  calculate() {
    const n = this.players.length;
    const k = 32 / (n - 1);

    for (let i = 0; i < n; i++) {
      const place = this.players[i].place;
      const rating = this.players[i].ratingPre;

      for (let j = 0; j < n; j++) {
        if (i === j) {
          continue;
        }

        const opponentPlace = this.players[j].place;
        const opponentRating = this.players[j].ratingPre;

        let s = 0.5;
        if (place < opponentPlace) {
          s = 1.0;
        }
        if (place > opponentPlace) {
          s = 0.0;
        }

        const ea =
          1 / (1.0 + Math.pow(10.0, (opponentRating - rating) / 400.0));
        this.players[i].ratingDelta += Math.round(k * (s - ea));
      }

      this.players[i].ratingPost =
        this.players[i].ratingPre + this.players[i].ratingDelta;
    }
  }
}

export default Elo;
