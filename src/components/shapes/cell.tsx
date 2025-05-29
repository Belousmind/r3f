import RoundBox from "./rounded-box";
import type { RootState } from "../store";
import { makeMove } from "../store/board-slice";
import { useDispatch, useSelector } from "react-redux";
import XMark from "./x-mark";
import OMark from "./o-mark";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { Group } from "three";

type CellProps = {
  position?: [number, number, number];
  index: number;
};

function Cell({ position, index }: CellProps) {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.board.board[index]);

  const ref = useRef<Group>(null!);

  const handleClick = () => {
    if (!value) {
      dispatch(makeMove(index));
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      ref.current.scale,
      { x: 0, y: 0, z: 0 },
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.5,
        delay: index * 0.1,
        ease: "back.out(1.7)",
      }
    );
  }, [index]);

  return (
    <group ref={ref} position={position} onClick={handleClick}>
      <RoundBox color={"#1b9aaa"} />
      {value === "X" && <XMark position={[0, 0, 0.2]} />}
      {value === "O" && <OMark position={[0, 0, 0.2]} />}
    </group>
  );
}

export default Cell;
