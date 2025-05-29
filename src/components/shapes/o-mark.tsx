import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Mesh } from "three";

type TorusProps = {
  position?: [number, number, number];
};

function OMark({ position = [0, 0, 0] }: TorusProps) {
  const ref = useRef<Mesh>(null!);

  useGSAP(() => {
    gsap.fromTo(
      ref.current.scale,
      { x: 0, y: 0, z: 0 },
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.5,
        ease: "back.out(1.4)",
      }
    );
  }, []);

  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={[0.28, 0.1, 16, 100]} />
      <meshStandardMaterial color={"#f8ffe5"} />
    </mesh>
  );
}

export default OMark;
