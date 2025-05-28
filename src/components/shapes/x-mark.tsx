import RoundBox from "./rounded-box";

type CrossProps = {
  position?: [number, number, number];
};

function XMark({ position = [0, 0, 0] }: CrossProps) {
  return (
    <group position={position}>
      <RoundBox args={[0.2, 0.8, 0.2]} color={'#f8ffe5'} rotation={[0, 0, Math.PI / 4]} />
      <RoundBox args={[0.2, 0.8, 0.2]} color={'#f8ffe5'} rotation={[0, 0, -Math.PI / 4]} />
    </group>
  );
}

export default XMark;
 