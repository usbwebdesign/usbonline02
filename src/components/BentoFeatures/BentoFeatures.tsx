import styles from './BentoFeatures.module.css';

const BentoFeatures = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* Item 1: Imagen Grande */}
        <div className={`${styles.item} ${styles.imgCol}`}>
          <img src="/images/feature-1.jpg" alt="Metodología" />
        </div>

        {/* Item 2: Texto Negro */}
        <div className={`${styles.item} ${styles.darkTextCol}`}>
          <h3>Modalidad Síncrona</h3>
          <p>Metodología accesible que permite estudiar a tu ritmo, desde cualquier lugar...</p>
        </div>

        {/* Item 3: Texto Negro Abajo */}
        <div className={`${styles.item} ${styles.darkTextCol}`}>
          <h3>Tecnología Avanzada</h3>
          <p>Plataforma interactiva con inteligencia integrada, recursos colaborativos...</p>
        </div>

        {/* Item 4: Imagen Larga Abajo */}
        <div className={`${styles.item} ${styles.imgCol}`}>
          <img src="/images/feature-2.jpg" alt="Tecnología" />
        </div>
      </div>
    </section>
  );
};