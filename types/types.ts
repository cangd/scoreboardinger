export declare class HTeam {
  name: string;
  player1?: string;
  player2?: string;
  score: number;
  set?: number;
}

export declare class HGame {
  id: number;
  matchType: string;
  teamHome: HTeam;
  teamAway: HTeam;
}
