import { useDispatch } from "react-redux";
import { resetGame, setGameMode, continueGame } from "../../store/board-slice";

export function ResetGameButton() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(resetGame())}>Rest Game</button>;
}

export function ContinueGame() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(continueGame())}>Continue Game</button>;
}

type StartGameBtnProps = {
  mode: "bot" | "player";
  value: string;
};

export function StartGameBtn({ mode, value }: StartGameBtnProps) {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(setGameMode(mode))}>
      New Game (VS {value})
    </button>
  );
}
