import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import boardReducer, { initialState } from "./board-slice";
import { loadGameFromLocalStorage } from "../utils/local-storage";


const savedBoard = loadGameFromLocalStorage();

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
  preloadedState: savedBoard
    ? { board: { ...initialState, ...savedBoard } }
    : undefined,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = (
  dispatch: AppDispatch,
  getState: () => RootState
) => ReturnType;
export const useAppDispatch: () => AppDispatch = useDispatch;
