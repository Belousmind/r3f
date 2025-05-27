import { useState } from "react";
import Torus from "./torus";
import RoundBox from "./rounded-box";

const spacing = 1.08;
const offset = (3 - 1) / 2;

function Grid() {
  const [activeSet, setActiveSet] = useState(new Set());

  const toggleIndex = (i: number) => {
    setActiveSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  const grid = [];

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const i = row * 3 + col;
      grid.push({
        x: (col - offset) * spacing,
        y: (row - offset) * spacing,
        i,
      });
    }
  }

  return (
    <>
      {grid.map(({ x, y, i }) => (
        <group key={i}>
          <RoundBox position={[x, y, 0]} onClick={() => toggleIndex(i)} />
          {activeSet.has(i) && <Torus position={[x, y, 0.24]} />}
        </group>
      ))}
    </>
  );
}

export default Grid;
