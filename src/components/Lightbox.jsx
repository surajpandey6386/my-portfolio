import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
export default function Lightbox({ sel, onClose }) {
  useEffect(() => {
    if (!sel) return
    const k = e => e.key === 'Escape' && onClose()
    addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [sel])
  return (
    <AnimatePresence>
      {sel && (
        <motion.div className="lb" role="dialog" aria-modal="true" aria-label={sel.title}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <button className="lb-x" aria-label="Close" onClick={onClose}><X /></button>
          <motion.img src={sel.image} alt={`${sel.title} certificate`} initial={{ scale: .94 }} animate={{ scale: 1 }} exit={{ scale: .94 }} onClick={e => e.stopPropagation()} />
          <p>{sel.title} · {sel.org}</p>
        </motion.div>)}
    </AnimatePresence>)
}
