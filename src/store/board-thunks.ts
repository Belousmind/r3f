import type { AppThunk } from "./index";
import { makeMove } from "./board-slice";
import { getSmartMove } from "../utils/game-logic";

export const playerMove =
  (index: number): AppThunk =>
  (dispatch, getState) => {
    dispatch(makeMove(index));

    const state = getState();
    const boardState = state.board;

    if (
      boardState.vsBot &&
      boardState.currentPlayer === "O" &&
      !boardState.winner
    ) {
      setTimeout(() => {
        const move = getSmartMove(boardState.board);
        if (move !== null) {
          dispatch(makeMove(move));
        }
      }, 800);
    }
  };
