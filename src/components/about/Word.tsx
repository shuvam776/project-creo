import { motion, useTransform, MotionValue } from 'framer-motion'

interface WordProps {
  children: string
  range: [number, number]
  progress: MotionValue<number>
  isPrimary?: boolean
}

export const Word = ({ children, range, progress, isPrimary }: WordProps) => {
  const opacity = useTransform(progress, range, [0.3, 1])

  return (
    <span className='relative mx-[2px] md:mx-1 inline-block'>
      <span className='absolute opacity-10 select-none'>{children}</span>
      <motion.span style={{ opacity }} className={isPrimary ? 'text-primary' : 'text-white'}>
        {children}
      </motion.span>
    </span>
  )
}
