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

export function getSmartMove(board: (null | "X" | "O")[]): number | null {
  const emptyCells = board
    .map((cell, i) => (cell === null ? i : null))
    .filter((i): i is number => i !== null);

  for (const [a, b, c] of winningCombinations) {
    const line = [board[a], board[b], board[c]];
    if (line.filter((v) => v === "O").length === 2 && line.includes(null)) {
      const index = [a, b, c][line.indexOf(null)];
      return index;
    }
  }

  for (const [a, b, c] of winningCombinations) {
    const line = [board[a], board[b], board[c]];
    if (line.filter((v) => v === "X").length === 2 && line.includes(null)) {
      const index = [a, b, c][line.indexOf(null)];
      return index;
    }
  }

  if (board[4] === null) return 4;

  const corners = [0, 2, 6, 8].filter((i) => board[i] === null);
  if (corners.length > 0)
    return corners[Math.floor(Math.random() * corners.length)];

  if (emptyCells.length > 0) {
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  }

  return null;
}

export function getWinner(board: (null | "X" | "O")[]): "X" | "O" | null {
  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}