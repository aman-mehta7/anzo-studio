import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

const Hero = () => {

    const {speed,color} = useControls({
    speed: { value: 0.005, min: 0.0, max: 0.09, step: 0.001 },
    color: { value: "#4e4646" },
    });

  const mesh = useRef();
  
    useFrame(() => {
        mesh.current.rotation.z += speed;
        mesh.current.rotation.x += speed;
        mesh.current.rotation.y += speed;
    });


  return (
    <>

      <mesh ref={mesh} >
        <sphereGeometry args={[2, 100, 100, 10, 10, 4.5, 0.5]} />
        <meshBasicMaterial color={color}/>
      </mesh>
</>
  );
};

export default Hero;
