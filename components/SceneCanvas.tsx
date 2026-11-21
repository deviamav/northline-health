"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Float, MeshDistortMaterial, RoundedBox } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const NAVY = "#0f2a43";
const SAGE = "#9bb7a1";
const SAGE_DEEP = "#5d8167";
const DAWN = "#f1c9a6";
const CERAMIC = "#f1f6f2";

/** Soft rounded plus-sign — a gentle, non-clinical take on the medical cross. */
function SoftCross({ still }: { still: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    const g = ref.current;
    if (!g || still) return;
    const t = state.clock.elapsedTime;
    g.rotation.y = Math.sin(t * 0.45) * 0.55;
    g.rotation.x = Math.sin(t * 0.32) * 0.14;
  });
  return (
    <Float speed={1.2} floatIntensity={0.6} rotationIntensity={0}>
      <group ref={ref}>
        <RoundedBox args={[1, 3, 1]} radius={0.34} smoothness={8}>
          <meshPhysicalMaterial color={CERAMIC} roughness={0.28} clearcoat={1} clearcoatRoughness={0.18} />
        </RoundedBox>
        <RoundedBox args={[3, 1, 1]} radius={0.34} smoothness={8}>
          <meshPhysicalMaterial color={CERAMIC} roughness={0.28} clearcoat={1} clearcoatRoughness={0.18} />
        </RoundedBox>
        {/* small navy core, reads like a calm pulse point */}
        <mesh position={[0, 0, 0.52]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color={NAVY} roughness={0.35} />
        </mesh>
      </group>
    </Float>
  );
}

/** Expanding ripple rings, like a slow heartbeat. */
function Ripple({ offset, still }: { offset: number; still: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const m = mesh.current;
    if (!m) return;
    const k = still ? 0.35 + offset : (state.clock.elapsedTime * 0.22 + offset) % 1;
    m.scale.setScalar(1 + k * 1.5);
    (m.material as THREE.MeshBasicMaterial).opacity = (1 - k) * 0.38;
  });
  return (
    <mesh ref={mesh} position={[0, 0, -0.6]}>
      <torusGeometry args={[2.1, 0.018, 12, 160]} />
      <meshBasicMaterial color={SAGE_DEEP} transparent opacity={0.3} />
    </mesh>
  );
}

function Blob({
  position,
  radius,
  color,
  speed = 1.4,
  distort = 0.35,
}: {
  position: [number, number, number];
  radius: number;
  color: string;
  speed?: number;
  distort?: number;
}) {
  return (
    <Float speed={speed} floatIntensity={1.4} rotationIntensity={0.4}>
      <mesh position={position}>
        <sphereGeometry args={[radius, 64, 64]} />
        <MeshDistortMaterial color={color} distort={distort} speed={speed} roughness={0.25} metalness={0.05} />
      </mesh>
    </Float>
  );
}

function Rig({ children, still }: { children: React.ReactNode; still: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const size = useThree((s) => s.size);
  const mobile = size.width < 820;

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, dt) => {
    const g = group.current;
    if (!g || still) return;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, pointer.current.x * 0.22, 2.5, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, pointer.current.y * 0.12, 2.5, dt);
  });

  return (
    <group ref={group} position={mobile ? [0, 1.9, 0] : [2.9, 0, 0]} scale={mobile ? 0.58 : 1}>
      {children}
    </group>
  );
}

export default function SceneCanvas({ active, still }: { active: boolean; still: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 9.5], fov: 36 }}
      frameloop={still ? "demand" : active ? "always" : "never"}
      gl={{ antialias: true, alpha: true }}
    >
      <hemisphereLight args={["#ffffff", "#a9c0ae", 1.6]} />
      <directionalLight position={[3, 5, 5]} intensity={2.6} color="#fffaf2" />
      <pointLight position={[-5, -2, 4]} intensity={30} color={DAWN} />

      <Rig still={still}>
        <Ripple offset={0} still={still} />
        <Ripple offset={0.5} still={still} />
        <SoftCross still={still} />
        <Blob position={[-2.7, 1.9, -0.6]} radius={0.78} color={SAGE} />
        <Blob position={[2.8, -1.6, 0.4]} radius={0.55} color={NAVY} speed={1.8} distort={0.28} />
        <Blob position={[2.6, 2.3, -0.8]} radius={0.38} color={DAWN} speed={2} distort={0.4} />
        <Blob position={[-2.4, -2.1, 0.3]} radius={0.3} color={SAGE_DEEP} speed={1.6} distort={0.3} />
        <ContactShadows position={[0, -3, 0]} opacity={0.22} scale={10} blur={2.8} far={4} color={NAVY} />
      </Rig>
    </Canvas>
  );
}
