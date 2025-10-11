import React, { useState, useEffect, useCallback } from 'react';
import styles from './SobreLaUniversidadPage.module.css';

export default function SobreLaUniversidadPage(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(3); // Start from the 4th image
  const images = [
    "/images/imagen_1.webp",
    "/images/imagen_2.webp",
    "/images/imagen_3.webp",
    "/images/imagen_4.webp",
    "/images/imagen_5.webp",
    "/images/imagen_6.webp",
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const nextSlide2 = useCallback(() => {
    setCurrentSlide2((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const interval2 = setInterval(() => {
      nextSlide2();
    }, 4000);
    return () => clearInterval(interval2);
  }, [nextSlide2]);

  return (
    <div className={styles.container}>
      <header className="pageHeaderBox">
        <h1>Sobre la Universidad de Arauca</h1>
        <p>Conoce nuestra historia, misión, visión y valores.</p>
      </header>

      <div className={styles.gridContainer}>
        <section className={`${styles.section} ${styles.spanTwoColumns}`}>
          <h2>Historia Institucional</h2>
          <p>
            Fundada el 13 de octubre de 2025, la Universidad de Arauca (UNAR) nació como una iniciativa ciudadana en el marco de la construcción de paz.
            Excombatientes, líderes sociales y campesinos participaron en la creación de la universidad como símbolo de reconciliación.
          </p>
          <p>
            El ingeniero Alfredo Cordero, primer rector, promovió una institución que combinara la excelencia académica con el desarrollo sostenible y el orgullo cultural llanero.
          </p>
          <p>
            Actualmente, la UNAR se proyecta como modelo de educación para la paz, integrando ciencia, tecnología y cultura al servicio del oriente colombiano.
          </p>
        </section>

        <section className={`${styles.section} ${styles.carouselSection}`}>
          <div className={styles.carouselContainer}>
            <div className={styles.carousel} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {images.map((src, index) => (
                <img key={index} src={src} alt={`Imagen ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <div className={`${styles.spanThreeColumns} ${styles.subGrid}`}>
            <section className={styles.section}>
                <h2>Misión</h2>
                <p>
                    Formar profesionales íntegros comprometidos con la transformación social, la sostenibilidad ambiental y la construcción de paz en la región de la Orinoquía.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Visión</h2>
                <p>
                    En 2040, la Universidad de Arauca será reconocida nacional e internacionalmente como una institución líder en innovación social, desarrollo agroindustrial y cultura de paz.
                </p>
            </section>
        </div>

        <section className={`${styles.section} ${styles.carouselSection}`}>
          <div className={styles.carouselContainer}>
            <div className={styles.carousel} style={{ transform: `translateX(-${currentSlide2 * 100}%)` }}>
              {images.map((src, index) => (
                <img key={index} src={src} alt={`Imagen ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.spanTwoColumns}`}>
          <h2>Valores Institucionales</h2>
          <ul className={styles.valuesList}>
            <li><strong>Paz:</strong> La educación como herramienta de reconciliación.</li>
            <li><strong>Respeto:</strong> Diversidad humana, cultural y ambiental.</li>
            <li><strong>Solidaridad:</strong> Cooperación entre comunidades.</li>
            <li><strong>Innovación:</strong> Soluciones creativas a los desafíos regionales.</li>
            <li><strong>Transparencia:</strong> Honestidad y responsabilidad pública.</li>
            <li><strong>Identidad:</strong> Orgullo llanero como motor de transformación.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}