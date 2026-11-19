
import { motion, useReducedMotion } from 'framer-motion'

export const Section = ({
  id,
  title,
  children,
  className = ''
}) => {
  const reduceMotion = useReducedMotion()

  return (
    <section id={id} className={`section ${className}`}>
      <div className="wrap">

        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          {title}
        </motion.h2>

        {children}

      </div>
    </section>
  )
}

export const Reveal = ({
  children,
  delay = 0,
  className = ''
}) => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 30, scale: 0.98 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      viewport={{
        once: true,
        amount: 0.12,
        margin: '-30px'
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
}
