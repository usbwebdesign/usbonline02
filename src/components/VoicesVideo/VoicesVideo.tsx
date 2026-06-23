import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import s from './VoicesVideo.module.css';

// Definimos la prop como opcional (?) para que el Index no de error
interface VoicesProps {
  videoId?: string;
}

// Link Video: Reemplazamos "prSqD3qGjdI" por "qp7IJeMBnn4"
export default function Voices({ videoId = "qp7IJeMBnn4" }: VoicesProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={s.container}>
      <div className={s.header}>
        <motion.h2 
          className={s.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Voces que enseñan
        </motion.h2>
        <motion.p 
          className={s.subtitle}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Historias reales de quienes transforman el aprendizaje en modalidad online.
        </motion.p>
      </div>

      <motion.div 
        className={s.videoWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
          alt="Testimonial USBOnline" 
          className={s.thumbnail}
        />
        
        <div className={s.playOverlay}>
          <div className={s.playCircle}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={s.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Reproductor de video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button className={s.closeBtn} onClick={() => setIsOpen(false)} aria-label="Cerrar video">
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}