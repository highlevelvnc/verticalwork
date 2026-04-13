'use client'

/**
 * HeroWebGL — WebGL capability gate + dynamic loader
 *
 * Strategy:
 *   - The CSS fallback background (grid lines + gradients) lives in Hero.tsx
 *     and is ALWAYS rendered regardless of WebGL availability.
 *   - This component only mounts the transparent canvas on top of that CSS layer.
 *   - On mobile, low-end hardware, or missing WebGL support → renders null.
 *     The CSS fallback remains as the sole visual, which looks correct.
 *   - No loading flash: the canvas has alpha:true, so it materialises over
 *     the existing background without a visible jump.
 */

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Dynamic import — prevents Three.js from being included in the SSR bundle
const FacadeCanvas = dynamic(() => import('./FacadeCanvas'), {
  ssr: false,
  loading: () => null, // CSS fallback in Hero handles the loading state
})

type State = 'pending' | 'enabled' | 'disabled'

export default function HeroWebGL() {
  const [state, setState] = useState<State>('pending')

  useEffect(() => {
    // Skip on touch/mobile devices — save battery, no mouse parallax anyway
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    // Skip on low-end hardware (rough heuristic)
    const isLowEnd = typeof navigator.hardwareConcurrency === 'number'
      && navigator.hardwareConcurrency <= 2

    if (isTouch || isLowEnd) {
      setState('disabled')
      return
    }

    // Quick WebGL2 support check
    try {
      const testCanvas = document.createElement('canvas')
      const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl')
      setState(gl ? 'enabled' : 'disabled')
    } catch {
      setState('disabled')
    }
  }, [])

  // Don't render anything until we know if WebGL is available
  // or if the device is not capable — let the CSS fallback handle it
  if (state !== 'enabled') return null

  return (
    <div
      className="absolute inset-0 z-[1] pointer-events-none"
      aria-hidden
    >
      <FacadeCanvas />
    </div>
  )
}
