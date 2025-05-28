import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Player = "X" | "O";
type Cell = Player | null;

interface GameState {
  isGameStart: boolean;
  board: Cell[];
  currentPlayer: Player;
  winner: Player | null;
}

const initialState: GameState = {
  isGameStart: false,
  board: Array(9).fill(null),
  currentPlayer: "X",
  winner: null,
};

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board: (null | "X" | "O")[]): "X" | "O" | null {
  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    makeMove: (state, action: PayloadAction<number>) => {
      const index = action.payload;

      if (state.board[index] || state.winner) return;

      state.board[index] = state.currentPlayer;

      const winner = getWinner(state.board);

      if (winner) {
        state.winner = winner;
        return;
      }

      state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
    },
    resetGame: (state) => {
      state.board = Array(9).fill(null);
      state.isGameStart = false;
      state.currentPlayer = "X";
      state.winner = null;
    },
  },
});

export const { makeMove, resetGame } = boardSlice.actions;
export default boardSlice.reducer;
