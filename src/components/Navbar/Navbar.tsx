import React, { useState } from 'react';
import { UserCircle } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Función para disparar el evento global
  const handleOpenModal = () => {
    window.dispatchEvent(new Event('open-hubspot-modal'));
    setIsMenuOpen(false); // Cerramos el menú móvil si estaba abierto
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        {/* LADO IZQUIERDO: Logo */}
        <a href="/" className={styles.logoSection}>
          <img src="/img/usbonlinelogo.svg" alt="USB Online Logo" className={styles.logoImage} />
        </a>

        {/* CENTRO: Menú de navegación */}
        <ul className={`${styles.menuLinks} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <li><a href="/#inicio" className={styles.link} onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
          <li><a href="/#oferta" className={styles.link} onClick={() => setIsMenuOpen(false)}>Oferta</a></li>
          <li><a href="/#como-funciona" className={styles.link} onClick={() => setIsMenuOpen(false)}>¿Cómo funciona?</a></li>
          <li><a href="/#experiencias" className={styles.link} onClick={() => setIsMenuOpen(false)}>Experiencias</a></li>
          <li><a href="/blog" className={styles.link} onClick={() => setIsMenuOpen(false)}>Blog</a></li>
          
          <li className={styles.mobileOnly}>
            <a href="https://usbmexicoonline.neolms.com/" target='_blank' rel="noreferrer" className={styles.link} onClick={() => setIsMenuOpen(false)}>
              Iniciar Sesión
            </a>
          </li>
        </ul>

        {/* LADO DERECHO: Acciones */}
        <div className={styles.actions}>
          <a href="https://usbmexicoonline.neolms.com/" target='_blank' rel="noreferrer" className={`${styles.userLink} ${styles.desktopOnly}`} aria-label="Ir al perfil">
            <UserCircle size={32} strokeWidth={2} color="white" />
          </a>

          <button 
            onClick={handleOpenModal} 
            className={styles.btnAdmisiones}
          >
            Admisiones
          </button>

          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
            <div className={`${styles.bar} ${isMenuOpen ? styles.bar1 : ''}`}></div>
            <div className={`${styles.bar} ${isMenuOpen ? styles.bar2 : ''}`}></div>
            <div className={`${styles.bar} ${isMenuOpen ? styles.bar3 : ''}`}></div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;