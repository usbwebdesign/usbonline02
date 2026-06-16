import React from 'react';
import { motion, type Variants } from 'framer-motion';
import s from './Grid.module.css';

// Animación para el encabezado (Título y Subtítulo)
const fadeInHeader: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

// Animación para los bloques que entran desde la IZQUIERDA
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

// Animación para los bloques que entran desde la DERECHA
const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Grid() {
  return (
    <section className={s.container} aria-labelledby="grid-title">
      
      {/* TÍTULO DE LA SECCIÓN */}
      <motion.div 
        className={s.headerGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInHeader}
      >
        <h2 id="grid-title" className={s.mainTitle}>
          Innovación y Aprendizaje
        </h2>
        <p className={s.subTitle}>
          Descubre por qué nuestra metodología es la mejor opción para tu crecimiento profesional.
        </p>
      </motion.div>

      {/* BLOQUE 1: Entra desde la IZQUIERDA */}
      <motion.div 
        className={s.bento1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInLeft}
      >
        <article className={`${s.card} ${s.imgCard}`}>
          <img src="/img/modalidad-sincrona.webp" alt="Modalidad Síncrona" loading="lazy" />
        </article>
        <article className={`${s.card} ${s.textCard}`}>
          <h3>Modalidad Síncrona</h3>
          <p>Metodología accesible que permite estudiar a tu ritmo, desde cualquier lugar, con contenidos prácticos actualizados constantemente.</p>
        </article>
      </motion.div>

      {/* BLOQUE 2: Entra desde la DERECHA */}
      <motion.div 
        className={s.bento2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInRight}
      >
        <article className={`${s.card} ${s.textCard}`}>
          <h3>Tecnología Avanzada</h3>
          <p>Plataforma interactiva con inteligencia integrada, recursos colaborativos y herramientas dinámicas que optimizan la experiencia educativa digital personalizada.</p>
        </article>
        <article className={`${s.card} ${s.imgCard}`}>
          <img src="/img/tecnologia-avanzada-usbonline.webp" alt="Tecnología Avanzada" loading="lazy" />
        </article>
      </motion.div>

      {/* BLOQUE 3: Entra desde la IZQUIERDA */}
      <motion.div 
        className={s.bento1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInLeft}
      >
        <article className={`${s.card} ${s.imgCard}`}>
          <img src="/img/tiempo-inteligente.webp" alt="Tiempo Inteligente" loading="lazy" />
        </article>
        <article className={`${s.card} ${s.textCard}`}>
          <h3>Tiempo Inteligente</h3>
          <p>Invierte aproximadamente 10 horas por semana y organiza tus sesiones cuando mejor te funcione. Todo completamente en línea.</p>
        </article>
      </motion.div>

      {/* BLOQUE 4: Entra desde la DERECHA */}
      <motion.div 
        className={s.bento2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInRight}
      >
        <article className={`${s.card} ${s.textCard}`}>
          <h3>Inversión Flexible</h3>
          <p>Diseñado para que avances en tu formación sin afectar tu equilibrio financiero. Modalidades organizadas y condiciones claras desde el inicio.</p>
        </article>
        <article className={`${s.card} ${s.imgCard}`}>
          <img src="/img/inversion-flexible.webp" alt="Inversión Flexible" loading="lazy" />
        </article>
      </motion.div>

    </section>
  );
}