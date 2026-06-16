import React from 'react';
import { motion } from 'framer-motion';
import s from './ReviewCards.module.css';

interface Review {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: "Me conecto desde cualquier lugar y siempre encuentro material actualizado.",
    author: "Valentina Pérez",
    role: "Estudiante de Gestión Educativa y Talento Humano",
    avatar: "./img/resena-mujer-usbonline.webp"
  },
  {
    id: 2,
    text: "Me gustan los recursos, foros activos y materiales siempre actualizados.",
    author: "Javier Mendoza",
    role: "Estudiante de Logística",
    avatar: "./img/resena-adulto-posgrado-usbonline.webp"
  },
  {
    id: 3,
    text: "Los profesores responden rápido y explican todo de forma sencilla.",
    author: "Sofía Rojas",
    role: "Estudiante de Mercadotecnia Estratégica",
    avatar: "./img/resena-joven-usbonline.webp"
  }
];

export default function ReviewCards() {
  return (
    <section className={s.container} aria-labelledby="reviews-title">
      {/* Título oculto para SEO si ya tienes uno arriba, o visible si lo necesitas */}
      <h2 id="reviews-title" className="sr-only">Testimonios de nuestros estudiantes</h2>
      
      <div className={s.grid}>
        {reviews.map((review, index) => (
          <motion.article 
            key={review.id}
            className={s.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Comilla tipográfica para máxima legibilidad visual */}
            <span className={s.quoteMark} aria-hidden="true">“</span>

            <blockquote className={s.textContent}>
              <p className={s.text}>{review.text}</p>
            </blockquote>

            <div className={s.footer}>
              <img 
                src={review.avatar} 
                alt={`Foto de perfil de ${review.author}`} 
                className={s.avatar} 
                loading="lazy"
              />
              <div className={s.info}>
                <cite className={s.author}>{review.author}</cite>
                <p className={s.role}>{review.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}