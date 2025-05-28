import type { RootState } from "../store";

import { useSelector } from "react-redux";

function TurnIndicator() {
  const { currentPlayer, winner } = useSelector(
    (state: RootState) => state.board
  );

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
