import type { GameState } from "../store/types";

export function saveGameToLocalStorage(state: GameState) {
  localStorage.setItem("gameState", JSON.stringify(state));
}

export function loadGameFromLocalStorage() {
  try {
    const saved = localStorage.getItem("gameState");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Failed to load game from localStorage:", e);
  }
  return null;
}