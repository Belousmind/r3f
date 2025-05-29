import { useDispatch } from "react-redux";
import { resetGame, setGameMode } from "../../store/board-slice";

export function ResetGameButton() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(resetGame())}>Rest Game</button>;
}

export function PlayWithBot() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(setGameMode("bot"))}>Game with Bot</button>
  );
}
