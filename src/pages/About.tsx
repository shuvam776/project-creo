import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { JSX } from 'react'
import { AboutBackground } from '@/components/about/AboutBackground'
import { AboutContent } from '@/components/about/AboutContent'
import { textContent } from '@/config/about'

export const About = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const yContent = useTransform(scrollYProgress, [0, 1], ['0vh', '75vh'])

  return (
    <div ref={containerRef} className='relative h-[175vh] bg-black font-fort overflow-x-clip'>
      <AboutBackground y={yContent} />

      <AboutContent
        yContent={yContent}
        scrollYProgress={scrollYProgress}
        textContent={textContent}
      />

      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
        className='fixed bottom-8 left-1/2 -translate-x-1/2 text-white/20 text-[10px] uppercase tracking-[0.2em] z-20 pointer-events-none'
      >
        Scroll to reveal
      </motion.div>
    </div>
  )
}
