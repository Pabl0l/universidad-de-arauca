import { useState, useEffect, useCallback, type JSX } from 'react';
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
            La <strong>Universidad de Arauca (UNAR)</strong> emerge como un símbolo de esperanza y reconciliación en los llanos orientales. Su campus, nacido de un juramento colectivo, representa un espacio donde antiguos antagonistas construyen juntos un futuro prometedor.
          </p>
          <p>
            Bajo el liderazgo del ingeniero <strong>Alfredo Cordero</strong>, su primer rector, la UNAR se dedica a formar profesionales con excelencia académica y un profundo compromiso con el desarrollo regional y la cultura llanera.
          </p>
          <p>
            El campus de la UNAR es un testimonio vivo de transformación. Antiguos puestos de vigilancia ahora albergan la facultad de Ciencias de la Salud, y depósitos se han convertido en laboratorios de biotecnología, cultivando conocimiento para el florecimiento de la región.
          </p>
          <p>
            La UNAR es hoy el corazón de una nueva Arauca, un lugar donde la educación y el conocimiento son las herramientas para un futuro brillante, promoviendo la paz y el respeto a través del aprendizaje compartido.
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