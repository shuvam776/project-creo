import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// import HeroSection from '../assets/img/heroseciton.png'
import { cat, bg } from '../config/about/index'
import type { JSX } from 'react'

const textContent =
  "THIS YEAR, CREO 26' IS THE FIRST EDITION OF NIT ROURKELA’S NATIONAL DESIGN CONFERENCE, CURATED TO EXPLORE HOW DESIGN DRIVES INNOVATION BEYOND AESTHETICS. THE CONFERENCE FOCUSES ON PRODUCT THINKING, HUMAN CENTERED DESIGN, SUSTAINABILITY, CREATIVE TECHNOLOGY, AND DESIGN LED ENTREPRENEURSHIP. THROUGH TALKS, WORKSHOPS, DESIGNATHON, AND EXHIBITIONS, CREO 26' CONNECTS STUDENTS."

const Word = ({
  children,
  range,
  progress,
  isPrimary,
}: {
  children: string
  range: [number, number]
  progress: any
  isPrimary?: boolean
}) => {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <span className='relative mx-[2px] md:mx-1 inline-block'>
      <span className='absolute opacity-10 select-none'>{children}</span>
      <motion.span style={{ opacity }} className={isPrimary ? 'text-primary' : 'text-white'}>
        {children}
      </motion.span>
    </span>
  )
}

export const About = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const words = textContent.split(' ')

  return (
    <div ref={containerRef} className='relative h-[175vh] bg-black font-fort'>
      {/* Background Section - Absolutely positioned at the top, scrolls with the page */}
      <div className='absolute top-0 left-0 w-full z-0 h-fit pointer-events-none'>
        <img alt='Background' className='w-full h-auto' src={bg} />
      </div>

      {/* Sticky Content Layer - Stays pinned while scrolling */}
      <div className='sticky top-0 h-screen w-full flex justify-center items-center pointer-events-none z-10'>
        <div className='flex flex-col max-w-6xl w-full px-4 md:px-12 justify-center text-center items-center pointer-events-auto'>
          {/* Cat icons */}
          <div className='flex gap-2 md:gap-4 mb-6 md:mb-10 animate-fade-in'>
            <img className='w-6 md:w-10 h-auto' alt='brand icon' src={cat} />
            <img className='w-6 md:w-10 h-auto' alt='brand icon' src={cat} />
            <img className='w-6 md:w-10 h-auto' alt='brand icon' src={cat} />
          </div>

          {/* Reveal text */}
          <h1 className='text-[10px] sm:text-sm md:text-2xl lg:text-3xl font-black uppercase leading-[1.3] md:leading-[1.6] flex flex-wrap justify-center'>
            {words.map((word, i) => {
              const start = i / words.length
              const end = Math.min(start + 1.5 / words.length, 1) // Slightly overlap transitions for smoothness
              const isPrimary = word.match(/NIT|ROURKELA|NATIONAL|DESIGN|CONFERENCE/i) && i <= 20

              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isPrimary={!!isPrimary}
                >
                  {word}
                </Word>
              )
            })}
          </h1>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='fixed bottom-8 left-1/2 -translate-x-1/2 text-white/20 text-xs uppercase tracking-widest animate-pulse z-30 pointer-events-none'>
        Scroll to reveal
      </div>
    </div>
  )
}
