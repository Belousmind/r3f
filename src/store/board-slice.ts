import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getWinner } from "../utils/game-logic";
import type { GameState } from "./types";

const initialState: GameState = {
  isGameStart: false,
  board: Array(9).fill(null),
  currentPlayer: "X",
  winner: null,
  vsBot: false,
  isDraw: false,
  stats: {
    xWins: 0,
    oWins: 0,
    draw: 0,
  },
};

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
        if (winner === "X") {
          state.stats.xWins += 1;
        } else {
          state.stats.oWins += 1;
        }
        return;
      }

      const isBoardFull = state.board.every((cell) => cell !== null);
      if (isBoardFull) {
        state.isDraw = true;
        state.stats.draw += 1;
        return;
      }

      state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
    },
    setGameMode: (state, action: PayloadAction<"bot" | "player">) => {
      state.vsBot = action.payload === "bot";
      state.isGameStart = true;
    },
    continueGame: (state) => {
      state.board = Array(9).fill(null);
      state.currentPlayer = "X";
      state.winner = null;
      state.isDraw = false;
    },
    resetGame: (state) => {
      state.isGameStart = false;
      state.board = Array(9).fill(null);
      state.currentPlayer = "X";
      state.winner = null;
      state.isDraw = false;
      state.stats = { xWins: 0, oWins: 0, draw: 0 };
    },
  },
});

export const { makeMove, setGameMode, resetGame, continueGame } = boardSlice.actions;
export default boardSlice.reducer;
