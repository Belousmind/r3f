type TorusProps = {
  position?: [number, number, number];
};

function Torus({ position = [0, 0, 0] }: TorusProps) {
  return (
    <mesh position={position}>
      <torusGeometry args={[0.28, 0.1, 16, 100]} />
      <meshStandardMaterial color={0xff00ff} />
    </mesh>
  );
}

export default Torus;
