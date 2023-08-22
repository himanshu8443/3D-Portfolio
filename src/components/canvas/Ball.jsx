'use client'
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import {
  Decal,
  OrbitControls,
  useResource,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <group className="animation">
      // <ambientLight intensity={0.25} />
      // <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <icosahedronGeometry args={[1, 32]} />
        <meshBasicMaterial
        map={decal}
          color='#c9b1e3'
          // polygonOffset
          // polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
        {/* opposite side decail */}
        <Decal
          position={[0, 0, -1]}
          rotation={[0, Math.PI, -6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
      </group>
  );
};

const BallCanvas = ({ icon, title }) => {
  return (
    <Canvas className=" cursor-move" title={title}
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon.src} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
