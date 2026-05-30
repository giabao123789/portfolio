import { useEffect, useRef } from 'react'
import { SplitText } from '@/animations/gsap.config'

export type SplitType = 'chars' | 'words' | 'lines'

export function useSplitText(type: SplitType = 'chars') {
  const ref = useRef<HTMLElement>(null)
  const splitRef = useRef<InstanceType<typeof SplitText> | null>(null)

  useEffect(() => {
    if (!ref.current) return

    try {
      splitRef.current = new SplitText(ref.current, { type })
    } catch (error) {
      console.error('SplitText error:', error)
    }

    return () => {
      if (splitRef.current) {
        splitRef.current.revert()
      }
    }
  }, [type])

  return { ref, splitRef }
}
