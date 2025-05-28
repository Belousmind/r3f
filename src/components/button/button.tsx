import { useDispatch } from "react-redux";
import { resetGame } from "../store/board-slice";

function Button() {

  const dispatch = useDispatch();

  return <button onClick={() => dispatch(resetGame())}>Rest Game</button>;
}

export default Button;
