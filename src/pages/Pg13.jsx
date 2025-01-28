import React from "react";
import Hero from "../components/Hero";
import { Canvas } from "@react-three/fiber";

const pg13 = () => {


  
  return (
    <div id="hc">
    <Canvas
      style={{ backgroundColor: "gray" }}
      camera={{ position: [1, 1, 1] }}
      >
      <Hero />
    </Canvas>
      </div>
  );
};
export default pg13;
