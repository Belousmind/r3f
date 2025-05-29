type Player = "X" | "O";
type Cell = Player | null;

export type GameState = {
  isGameStart: boolean;
  board: Cell[];
  currentPlayer: Player;
  winner: Player | null;
  vsBot: boolean;
}