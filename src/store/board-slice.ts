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
        return;
      }

      state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
    },
    setGameMode: (state, action: PayloadAction<"bot" | "player">) => {
      state.vsBot = action.payload === "bot";
    },
    resetGame: (state) => {
      state.board = Array(9).fill(null);
      state.isGameStart = false;
      state.currentPlayer = "X";
      state.winner = null;
    },
  },
});

export const { makeMove, setGameMode, resetGame } = boardSlice.actions;
export default boardSlice.reducer;
