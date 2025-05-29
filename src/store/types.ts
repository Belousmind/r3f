type Player = "X" | "O";
type Cell = Player | null;

export type GameState = {
  isGameStart: boolean;
  board: Cell[];
  currentPlayer: Player;
  winner: Player | null;
  vsBot: boolean;
  isDraw: boolean;
  stats: {
    xWins: number;
    oWins: number;
    draw: number;
  };
};
