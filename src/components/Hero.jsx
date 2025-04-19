import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useGLTF, PresentationControls ,Stage } from "@react-three/drei";




function Model() {
  const {scene} = useGLTF("/anzo-studio/b.glb");
  return <primitive object={scene} dispose={null} scale={0.1} position={[0,0,0]} />;
}


const Hero = () => {

  const mesh = useRef();

  const { speed} = useControls({
    speed: { value: 0.000, min: 0.0, max: 0.09, step: 0.001 },
  });


  useFrame(() => {
    // mesh.current.rotation.z += speed;
    // mesh.current.rotation.x += speed;
    mesh.current.rotation.y += speed;
  });

  return (
    <>
      <mesh ref={mesh}>
        <spotLight
          position={[0, 3, 0]}
          angle={90}
          intensity={50}
          penumbra={10}
        />
        <Model />
      </mesh>
    </>
  );
};

export default Hero;
