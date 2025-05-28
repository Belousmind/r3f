type TorusProps = {
  position?: [number, number, number];
};

function OMark({ position = [0, 0, 0] }: TorusProps) {
  return (
    <mesh position={position}>
      <torusGeometry args={[0.28, 0.1, 16, 100]} />
      <meshStandardMaterial color={'#f8ffe5'} />
    </mesh>
  );
}

export default OMark;
