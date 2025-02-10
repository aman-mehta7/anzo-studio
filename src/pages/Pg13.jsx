import React from "react";
import Hero from "../components/Hero";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const pg13 = () => {


  
  return (
    <div id="hc">
    <Canvas
      style={{ backgroundColor: "gray" }}
      camera={{ position: [1, 1, 1.3] }}
      >
      <Hero />
      {/* <OrbitControls /> */}
    </Canvas>
      </div>
  );
};
export default pg13;
