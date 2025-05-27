import RoundBox from "./rounded-box";

function Cross() {
  return (
    <group>
      <RoundBox args={[0.2, 1, 0.2]} rotation={[0, 0, Math.PI / 4]} />
      <RoundBox args={[0.2, 1, 0.2]} rotation={[0, 0, -Math.PI / 4]} />
    </group>
  );
}

export default Cross;
