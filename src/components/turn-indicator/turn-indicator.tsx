import type { RootState } from "../../store";

import { useSelector } from "react-redux";

function TurnIndicator() {
  const { currentPlayer, winner, isDraw } = useSelector(
    (state: RootState) => state.board
  );

  if (isDraw) {
    return <p>It's a draw!</p>;
  }

  return (
    <div>
      {winner ? (
        <span>Winner: {winner}</span>
      ) : (
        <span>{currentPlayer} Turn</span>
      )}
    </div>
  );
}

export default TurnIndicator;

export function GameStats() {
  const stats = useSelector((state: RootState) => state.board.stats);

  return (
    <div>
      <div>X Wins {stats.xWins}</div>
      <div>Draws {stats.draw}</div>
      <div>O Wins {stats.oWins}</div>
    </div>
  );
}


