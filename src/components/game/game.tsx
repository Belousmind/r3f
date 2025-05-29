import Scene from "../scene/scene";
import { ResetGameButton, StartGameBtn, ContinueGame } from "../button/button";
import TurnIndicator from "../turn-indicator/turn-indicator";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { GameStats } from "../turn-indicator/turn-indicator";

function Game() {
  const isGameStart = useSelector(
    (state: RootState) => state.board.isGameStart
  );
  return (
    <>
    <h1>Tic Tac Toe</h1>
      {isGameStart ? (
        <>
          <Scene />
          <GameStats />
          <TurnIndicator />
          <ContinueGame />
          <ResetGameButton />
        </>
      ) : (
        <>
          <StartGameBtn mode="bot" value="CPU" />
          <StartGameBtn mode="player" value="player" />
        </>
      )}
    </>
  );
}

export default Game;
