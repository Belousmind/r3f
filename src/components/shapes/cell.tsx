import RoundBox from "./rounded-box";
import type { RootState } from "../store";
import { makeMove } from "../store/board-slice";
import { useDispatch, useSelector } from "react-redux";
import XMark from "./x-mark";
import OMark from "./o-mark";

type CellProps = {
  position?: [number, number, number];
  index: number;
};

function Cell({ position, index }: CellProps) {
  const dispatch = useDispatch();

  const value = useSelector((state: RootState) => state.board.board[index]);
 
  const handleClick = () => {
    if (!value) {
      dispatch(makeMove(index));
    }
  };

  return (
    <group position={position} onClick={handleClick}>
      <RoundBox color={"#1b9aaa"} />
      {value === "X" && <XMark position={[0, 0, 0.2]} />}
      {value === "O" && <OMark position={[0, 0, 0.2]} />}
    </group>
  );
}

export default Cell;
