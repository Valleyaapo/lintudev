import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

// Mouse tracking hook
const useMouse = () => {
    const mouse = useRef({ x: 0, y: 0 });

    React.useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse.current = {
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1,
            };
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return mouse;
};

// Main glowing core
const TechCore: React.FC<{ mouse: React.RefObject<{ x: number; y: number }> }> = ({ mouse }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.getElapsedTime();

        // Mouse-based rotation with smooth lerping
        const targetX = mouse.current.y * 0.3;
        const targetY = mouse.current.x * 0.5;
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.02);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.02);

        // Slow continuous rotation
        meshRef.current.rotation.z += 0.001;

        // Pulsing scale (breathing effect)
        const scale = 1 + Math.sin(time * 1.2) * 0.03;
        meshRef.current.scale.setScalar(scale);
    });

    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
            <group>
                {/* Thin wireframe only - simplified resolution */}
                <mesh ref={meshRef}>
                    <torusKnotGeometry args={[0.85, 0.25, 48, 12, 2, 3]} />
                    <meshBasicMaterial
                        color="#bef264"
                        wireframe
                        transparent
                        opacity={0.05} // Reduced further for subtleness
                    />
                </mesh>
            </group>
        </Float>
    );
};

// Orbiting satellite spheres
const OrbitingSatellites: React.FC = () => {
    const groupRef = useRef<THREE.Group>(null);

    const satellites = useMemo(() => {
        return Array.from({ length: 3 }, (_, i) => ({
            id: i,
            radius: 2 + Math.random() * 0.5,
            speed: 0.1 + Math.random() * 0.1,
            offset: (i / 3) * Math.PI * 2,
            size: 0.04 + Math.random() * 0.04,
            yOffset: (Math.random() - 0.5) * 1.5,
        }));
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (groupRef.current) {
            groupRef.current.children.forEach((child, i) => {
                const satellite = satellites[i];
                const angle = time * satellite.speed + satellite.offset;
                child.position.x = Math.cos(angle) * satellite.radius;
                child.position.z = Math.sin(angle) * satellite.radius;
                child.position.y = satellite.yOffset + Math.sin(time * 2 + satellite.offset) * 0.3;
            });
        }
    });

    return (
        <group ref={groupRef}>
            {satellites.map((sat) => (
                <mesh key={sat.id}>
                    <sphereGeometry args={[sat.size, 16, 16]} />
                    <meshStandardMaterial
                        color="#bef264"
                        emissive="#bef264"
                        emissiveIntensity={0.5} // Reduced from 2
                        transparent
                        opacity={0.25} // Added opacity
                    />
                </mesh>
            ))}
        </group>
    );
};

// Connection lines between satellites
const ConnectionLines: React.FC = () => {
    const linesRef = useRef<THREE.LineSegments>(null);

    const geometry = useMemo(() => {
        const points: number[] = [];
        // Create some random connection lines
        for (let i = 0; i < 8; i++) {
            const angle1 = Math.random() * Math.PI * 2;
            const angle2 = Math.random() * Math.PI * 2;
            const r1 = 1.5 + Math.random() * 1;
            const r2 = 1.5 + Math.random() * 1;

            points.push(
                Math.cos(angle1) * r1, (Math.random() - 0.5) * 2, Math.sin(angle1) * r1,
                Math.cos(angle2) * r2, (Math.random() - 0.5) * 2, Math.sin(angle2) * r2
            );
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
        return geo;
    }, []);

    useFrame((state) => {
        if (linesRef.current) {
            linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <lineSegments ref={linesRef} geometry={geometry}>
            <lineBasicMaterial color="#bef264" transparent opacity={0.03} />
        </lineSegments>
    );
};

// Main scene component
const TechScene: React.FC = () => {
    const mouse = useMouse();

    return (
        <div className="absolute inset-0 z-0 pointer-events-none backdrop-blur-[2px]">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

                {/* Lighting */}
                <ambientLight intensity={0.2} />
                <pointLight position={[5, 5, 5]} intensity={1} color="#bef264" />
                <pointLight position={[-5, -5, 5]} intensity={0.5} color="#ffffff" />

                {/* Starfield background */}
                <Stars
                    radius={100}
                    depth={50}
                    count={800}
                    factor={4}
                    saturation={0}
                    fade
                    speed={0.2}
                />

                <React.Suspense fallback={null}>
                    <TechCore mouse={mouse} />
                    <OrbitingSatellites />
                    <ConnectionLines />
                </React.Suspense>

                {/* Post-processing effects - toned down */}
                <EffectComposer>
                    <Bloom
                        intensity={0.25} // Reduced from 0.4
                        luminanceThreshold={0.8} // Increased threshold
                        luminanceSmoothing={0.9}
                        mipmapBlur
                    />
                    <ChromaticAberration
                        blendFunction={BlendFunction.NORMAL}
                        offset={new THREE.Vector2(0.0005, 0.0005)}
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default TechScene;
