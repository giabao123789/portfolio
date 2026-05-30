import React from 'react'
import { EffectComposer, Bloom, DepthOfField, Vignette, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export default function PostFX(): React.ReactNode {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.15}
        luminanceSmoothing={0.9}
        intensity={1.8}
        mipmapBlur
        blendFunction={BlendFunction.ADD}
      />
      
      <DepthOfField
        focusDistance={0.01}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      
      <Vignette
        offset={0.3}
        darkness={0.7}
        blendFunction={BlendFunction.NORMAL}
      />
      
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        radialModulation={false}
        modulationOffset={0}
      />
    </EffectComposer>
  )
}
