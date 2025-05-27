import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Scene() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{
        position: [0, 0, 4],
        fov: 75,
        near: 0.1,
        far: 10,
      }}
    >
      <OrbitControls
        enableDamping
        dampingFactor={0.03}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
      />
      <ambientLight intensity={0.5} />
      <directionalLight color="white" position={[1, 5, 5]} />
    </Canvas>
  );
}

export default Scene;
