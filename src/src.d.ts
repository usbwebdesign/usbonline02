// src/declarations.d.ts

// Para tus módulos de CSS (Testimonials.module.css)
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Para los CSS globales de librerías (Como Swiper)
declare module '*.css';