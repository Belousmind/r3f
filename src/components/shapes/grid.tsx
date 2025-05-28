import Cell from "./cell";

const spacing = 1.08;
const offset = (3 - 1) / 2;

function Grid() {
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
        <Cell key={i} position={[x, y, 0]} index={i} />
      ))}
    </>
  );
}

export default Grid;
