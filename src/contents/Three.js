import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
// import five from "./five.png";
import selfie from './selfie.png';

const Box = (props) => {

    const mesh = useRef();

    const [active, setActive] = useState(false);

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });

    const texture = useMemo(() => new THREE.TextureLoader().load(selfie), []);

return (
    <mesh
    {...props}
    ref={mesh}
    scale={active ? [5, 5, 5] : [1, 1, 1]}
    onClick={(e) => setActive(!active)}
    >
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
            <primitive attach="map" object={texture} />
        </meshBasicMaterial>
        </mesh>
    );
}

const Three = () => {
    return (
        <Canvas className="cubes">
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[2.5, 0, 0]} />
        </Canvas>
    );
}

export default Three;