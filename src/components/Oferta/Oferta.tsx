import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import s from './Oferta.module.css';

// --- Interfaces ---
interface Program {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  image_url: string;
  oferta_id: number | null;
}

interface Props {
  initialPrograms: Program[];
}

// --- Constantes de Configuración ---
const CATEGORIES_FILTER = ["Todo", "Especialidades", "Maestrías", "Doctorados"];

// Definimos el orden visual: Especialidad (1) -> Maestría (2) -> Doctorado (3)
const PRIORITY_MAP: Record<string, number> = {
  "Especialidad": 1,
  "Maestría": 2,
  "Doctorado": 3
};

export default function Oferta({ initialPrograms }: Props) {
  const [activeFilter, setActiveFilter] = useState("Todo");

  // --- Lógica de Filtrado y Ordenamiento ---
  const filteredPrograms = useMemo(() => {
    if (!initialPrograms) return [];

    return initialPrograms
      .filter((p) => {
        if (activeFilter === "Todo") return true;
        const filterMap: Record<string, string> = {
          "Especialidades": "Especialidad",
          "Maestrías": "Maestría",
          "Doctorados": "Doctorado"
        };
        return p.category === filterMap[activeFilter];
      })
      .sort((a, b) => {
        // Obtenemos el peso de cada categoría según el mapa
        const weightA = PRIORITY_MAP[a.category] || 99;
        const weightB = PRIORITY_MAP[b.category] || 99;
        
        // Si tienen la misma categoría, podemos ordenar alfabéticamente por título
        if (weightA === weightB) {
          return a.title.localeCompare(b.title);
        }
        
        return weightA - weightB;
      });
  }, [initialPrograms, activeFilter]);

  return (
    <section id="oferta" className={s.container}>
      <h2 className={s.mainTitle}>Oferta Educativa</h2>

      {/* Barra de Filtros */}
      <div className={s.filterBar}>
        {CATEGORIES_FILTER.map((cat) => (
          <button 
            key={cat} 
            className={`${s.filterBtn} ${activeFilter === cat ? s.active : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Programas */}
      <div className={s.grid}>
        <AnimatePresence mode='popLayout'>
          {filteredPrograms.map((program) => (
            <motion.article 
              layout
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={s.card}
            >
              <a 
                href={program.oferta_id ? `/ofertas/${program.oferta_id}` : '#'} 
                className={s.cardLink}
                onClick={(e) => {
                  if (!program.oferta_id) {
                    e.preventDefault();
                    console.warn(`⚠️ El programa "${program.title}" no tiene un oferta_id.`);
                  }
                }}
              >
              <div className={s.imageWrapper}>
                <img 
                  src={program.image_url} 
                  alt={program.title} 
                  className={s.image}
                  width="380" // Valor estimado de la card en móvil
                  height="210"
                  loading="lazy" // Astro manejará el lazy load por ti
                  decoding="async"
                />
              </div>
                
                <div className={s.content}>
                  <div className={s.badges}>
                    <span className={s.categoryBadge}>{program.category}</span>
                    <span className={s.durationBadge}>{program.duration}</span>
                  </div>
                  <h3 className={s.cardTitle}>{program.title}</h3>
                  <p className={s.cardDesc}>{program.description}</p>
                </div>
              </a>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}