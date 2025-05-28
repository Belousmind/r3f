import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isGameStart: false,
  board: Array(9).fill(null),
  currentPlayer: "X",
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    makeMove: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state.board[index]) return;
      state.board[index] = state.currentPlayer;
      state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
    },
    resetGame: (state) => {
      state.board = Array(9).fill(null);
      state.isGameStart = false;
      state.currentPlayer = "X";
    },
  },
});

export const { makeMove, resetGame } = boardSlice.actions;
export default boardSlice.reducer;
