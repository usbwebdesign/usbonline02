import React from 'react';
import { motion, type Variants } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  // 1. Función para abrir el modal de HubSpot
  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-hubspot-modal'));
  };

  // 2. Función para el scroll suave del icono del mouse
  const handleScrollToOferta = () => {
    const ofertaSection = document.getElementById('oferta');
    if (ofertaSection) {
      ofertaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] 
      },
    },
  };

  const scrollIconVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { delay: 1, duration: 0.5 } 
    },
    bounce: {
      y: [0, 8, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section className={styles.hero}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={styles.videoBackground}
        poster="/videos/hero-img.jpg"
        preload="metadata"
      >
        {/* CORRECCIÓN: vid3 es Desktop (min-width), vertical es Mobile (max-width) */}
        <source 
          src="/videos/hero-vid3.mp4" 
          type="video/mp4" 
          media="(min-width: 768px)" 
        />
        <source 
          src="/videos/hero-vertical.mp4" 
          type="video/mp4" 
          media="(max-width: 767px)" 
        />
      </video>

      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.title} variants={itemVariants}>
            <span className={styles.highlight}>Estudiar así, te facilita la vida</span>
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            Modalidad 100% online
          </motion.p>

          <motion.div className={styles.actions} variants={itemVariants}>
            <a href="#oferta" className={styles.btnPrimary}>
              Ver oferta educativa
            </a>
            
            <a 
              href="#contacto" 
              className={styles.btnSecondary}
              onClick={handleOpenModal}
            >
              Admisiones
            </a>
          </motion.div>

          {/* Mouse Icon con función de scroll */}
          <motion.div  
            className={styles.scrollDown}
            variants={scrollIconVariants}
            initial="hidden"
            animate={["visible", "bounce"]}
            onClick={handleScrollToOferta}
            style={{ cursor: 'pointer' }} // Añadimos cursor de mano
          >
            <span className={styles.mouse}>
              <span className={styles.wheel}></span>
            </span>
            <div className={styles.arrow}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;