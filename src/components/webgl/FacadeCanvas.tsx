'use client'

/**
 * FacadeCanvas — The Structural Monolith WebGL Scene
 *
 * Concept: Abstract architectural facade rendered as an extruded grid
 * of rectangular panels at varying Z-depths. Subtle directional lighting
 * creates shadow variation across panels, reinforcing depth and materiality.
 *
 * Technical approach:
 *  - InstancedMesh for all panels (single draw call, ~176 instances)
 *  - Deterministic pseudo-random for stable server/client values
 *  - Mouse-driven parallax via smooth lerp on group rotation
 *  - Transparent canvas background — CSS layer shows through gaps
 *  - alpha: true so the CSS fallback background is always visible underneath
 */

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// ── Grid geometry constants ────────────────────────────────────────────────
const COLS = 16
const ROWS = 11
const PANEL_W = 0.88    // width of each panel
const PANEL_H = 1.32    // height — portrait ratio (like a facade tile)
const PANEL_D = 0.06    // depth (thin extrusion)
const STEP_X = PANEL_W + 0.08
const STEP_Y = PANEL_H + 0.07
const COUNT = COLS * ROWS

// ── Dark graphite palette ──────────────────────────────────────────────────
// Mirrors the CSS design tokens — panels are subtle variations of the base surface
const PALETTE = [
  new THREE.Color('#131315'),
  new THREE.Color('#161618'),
  new THREE.Color('#191A1D'),
  new THREE.Color('#1C1C1F'),
  new THREE.Color('#1F2022'),
  new THREE.Color('#222325'),
]

// Deterministic pseudo-random — avoids Math.random() for stability across renders
const rand = (seed: number): number => {
  const s = Math.sin(seed * 127.1 + 311.7) * 43758.5453123
  return s - Math.floor(s)
}

// ── Facade Grid ────────────────────────────────────────────────────────────
function FacadeGrid() {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)

  // Mouse state — using refs to avoid re-renders
  const mouse = useRef({ x: 0, y: 0 })
  const smooth = useRef({ x: 0, y: 0 })

  // Pre-compute all panel transforms and colors (stable across renders)
  const { matrices, colors } = useMemo(() => {
    const tmp = new THREE.Matrix4()
    const matrices: THREE.Matrix4[] = []
    const colors: THREE.Color[] = []

    // Center the grid
    const ox = -((COLS - 1) * STEP_X) / 2
    const oy = -((ROWS - 1) * STEP_Y) / 2

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const i = r * COLS + c

        // Vary Z depth per panel — creates facade depth illusion
        const z = (rand(i * 3.7 + 11.1) - 0.15) * 0.55 // range ≈ -0.08 to +0.47

        tmp.makeTranslation(ox + c * STEP_X, oy + r * STEP_Y, z)
        matrices.push(tmp.clone())

        // Pick base color from palette
        const base = PALETTE[Math.floor(rand(i * 7.3 + 53.9) * PALETTE.length)]
        const color = base.clone()

        // ~5.5% of panels are accent-bright — like glass reflecting ambient light
        if (rand(i * 2.1 + 97.3) < 0.055) {
          color.multiplyScalar(1.75)
        }

        colors.push(color)
      }
    }

    return { matrices, colors }
  }, [])

  // Apply transforms and colors once on mount
  useEffect(() => {
    const mesh = meshRef.current
    if (!mesh) return
    matrices.forEach((m, i) => mesh.setMatrixAt(i, m))
    colors.forEach((c, i) => mesh.setColorAt(i, c))
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  }, [matrices, colors])

  // Track mouse position
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Smooth parallax — cinematic slow lerp
  useFrame(() => {
    smooth.current.x += (mouse.current.x - smooth.current.x) * 0.026
    smooth.current.y += (mouse.current.y - smooth.current.y) * 0.026

    if (groupRef.current) {
      // Max rotation ≈ 4° horizontal, 2.75° vertical
      groupRef.current.rotation.y = smooth.current.x * 0.072
      groupRef.current.rotation.x = -smooth.current.y * 0.048
    }
  })

  return (
    <group ref={groupRef}>
      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, COUNT]}
        frustumCulled={false}
      >
        <boxGeometry args={[PANEL_W, PANEL_H, PANEL_D]} />
        <meshStandardMaterial
          vertexColors
          roughness={0.9}
          metalness={0.06}
        />
      </instancedMesh>
    </group>
  )
}

// ── Canvas root ────────────────────────────────────────────────────────────
export default function FacadeCanvas() {
  return (
    <Canvas
      camera={{ fov: 46, near: 0.1, far: 50, position: [0, 0, 11] }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,               // transparent bg — CSS fallback shows through gaps
        powerPreference: 'high-performance',
        stencil: false,
      }}
      style={{ position: 'absolute', inset: 0 }}
    >
      {/* No <color> — alpha:true means CSS background is visible underneath */}
      <ambientLight intensity={0.58} />
      {/* Main light: upper-left directional — creates side shadows on extruded panels */}
      <directionalLight position={[-5, 7, 4]} intensity={1.5} color="#E0DDD8" />
      {/* Subtle warm fill from lower-right — technical orange tint */}
      <directionalLight position={[6, -2, 1]} intensity={0.28} color="#F2994A" />
      <FacadeGrid />
    </Canvas>
  )
}
