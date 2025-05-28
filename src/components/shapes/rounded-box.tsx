import { RoundedBox } from "@react-three/drei";

function RoundBox({ ...props }) {
  return (
    <RoundedBox
      args={[1, 1, 0.2]}
      radius={0.06}
      smoothness={8}
      bevelSegments={12}
      {...props}
    >
      <meshStandardMaterial {...props} roughness={0.4} />
    </RoundedBox>
  );
}

export default RoundBox;
