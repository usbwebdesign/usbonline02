import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Estilos de Swiper con protección para TypeScript
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';

import s from './Testimonials.module.css';

interface VideoTestimonial {
  id: string;
  thumbnail: string;
  youtubeId: string;
  name: string;
}

const videos: VideoTestimonial[] = [
  { id: '1', thumbnail: '/img/testimonio1.webp', youtubeId: 'VIDEO_ID_1', name: 'Ricardo G.' },
  { id: '2', thumbnail: '/img/testimonio2.webp', youtubeId: 'VIDEO_ID_2', name: 'Andrea M.' },
  { id: '3', thumbnail: '/img/testimonio3.webp', youtubeId: 'VIDEO_ID_3', name: 'Luis P.' },
];

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const renderCard = (video: VideoTestimonial, index: number) => (
    <div 
      className={`${s.videoCard} ${index === 1 ? s.featured : ''}`}
      onClick={() => setSelectedVideo(video.youtubeId)}
    >
      <img src={video.thumbnail} alt={`Testimonio de ${video.name}`} className={s.thumb} />
      <div className={s.overlay}>
        <div className={s.playButtonContainer}>
          <div className={s.playIconWrapper}>
            <svg viewBox="0 0 24 24" fill="currentColor" className={s.playSvg}>
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <span className={s.studentName}>{video.name}</span>
      </div>
    </div>
  );

  return (
    <section className={s.container}>
      <h2 className={s.title}>Historias que <span>inspiran</span></h2>
      
      {/* Grid para Escritorio */}
      <div className={s.desktopGrid}>
        {videos.map((video, index) => (
          <motion.div 
            key={video.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {renderCard(video, index)}
          </motion.div>
        ))}
      </div>

      {/* Swiper para Móvil */}
      <div className={s.mobileCarousel}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          pagination={{ clickable: true }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id}>
              {renderCard(video, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal Dinámico */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            className={s.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
              <div className={s.videoWrapper}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} 
                  title="YouTube video player" 
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
              <button className={s.closeBtn} onClick={() => setSelectedVideo(null)} aria-label="Cerrar video">
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}