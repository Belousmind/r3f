import RoundBox from "./rounded-box";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import type { Group } from "three";

type CrossProps = {
  position?: [number, number, number];
};

function XMark({ position = [0, 0, 0] }: CrossProps) {
  const ref = useRef<Group>(null!);

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
    <group position={position} ref={ref}>
      <RoundBox
        args={[0.2, 0.8, 0.2]}
        color={"#f8ffe5"}
        rotation={[0, 0, Math.PI / 4]}
      />
      <RoundBox
        args={[0.2, 0.8, 0.2]}
        color={"#f8ffe5"}
        rotation={[0, 0, -Math.PI / 4]}
      />
    </group>
  );
}

export default XMark;
