import { bg } from '@/config/about'
import { motion, MotionValue } from 'framer-motion'

interface AboutBackgroundProps {
  y: MotionValue<string>
}

export const AboutBackground = ({ y }: AboutBackgroundProps) => {
  return (
    <motion.div
      style={{ y }}
      className='absolute inset-0 z-0 pointer-events-none overflow-hidden h-screen'
    >
      <img
        alt='Background'
        className='w-full h-full object-cover opacity-100 transform-gpu'
        src={bg}
      />
      <div className='absolute inset-0 bg-linear-to-b from-black via-transparent to-black opacity-90' />
    </motion.div>
  )
}
