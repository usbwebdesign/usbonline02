import React from 'react';
import { motion, type Variants } from 'framer-motion';
import s from './ValidationGrid.module.css';

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function ValidationGrid() {
  return (
    <section className={s.container}>
      {/* TÍTULO DE SECCIÓN */}
      <h2 className={s.mainTitle}>
        Impulsa tu carrera con <span>reconocimiento oficial</span>
      </h2>
        
      {/* CONTENEDOR DEL CERTIFICADO RESPONSIVE */}
      <motion.div 
        className={s.imageWrapperCertificate}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <img 
          src="/img/dummy-title.webp" 
          alt="Certificado oficial USB Online" 
          className={s.mainImgCertificado}
          width="1000"
          height="800"
        />
      </motion.div>

      {/* FILA DE TARJETAS DE TEXTO */}
      <div className={s.topRow}>
        <motion.article 
          className={s.textCard}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <h3>Validez Oficial</h3>
          <p>
            Programas con reconocimiento oficial RVOE, garantizando cumplimiento normativo, 
            calidad académica certificada y respaldo institucional ante autoridades educativas.
          </p>
        </motion.article>

        <motion.article 
          className={s.textCard}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <h3>Respaldo Académico</h3>
          <p>
            Planes de estudio estructurados conforme lineamientos oficiales, 
            con documentación válida y registro ante autoridades competentes correspondientes.
          </p>
        </motion.article>
      </div>

      {/* IMAGEN DE ACADEMIA / GRADUADA */}
      <motion.div 
        className={s.imageWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <img 
          src="/img/academy.webp" 
          alt="Campus y respaldo USB" 
          className={s.mainImg}
        />
      </motion.div>
    </section>
  );
}