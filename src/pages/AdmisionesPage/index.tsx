import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './AdmisionesPage.module.css';
import { ProgramOfferCard } from '../../components';

import { faculties } from '../../services/facultyService';

/**
 * @typedef {object} AdmisionesPageProps
 */

/**
 * Admisiones page component.
 * @param {AdmisionesPageProps} props - The properties for the AdmisionesPage component.
 * @returns {JSX.Element} The rendered AdmisionesPage component.
 */
const AdmisionesPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [highlightInscription, setHighlightInscription] = useState(false);
  const images = ["/images/inscribete_car_admsiones.webp", "/images/examen_car_admsiones.webp", "/images/matriculate_car_admsiones.webp"];
  const alts = ["Flyer con fechas de inscripción", "Flyer con fecha de examen de admisión", "Flyer con fechas de matrícula"];
  const location = useLocation();
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        if (id === 'proceso-de-inscripcion') {
          setHighlightInscription(true);
          const timer = setTimeout(() => {
            setHighlightInscription(false);
          }, 500);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [location]);

  const handleInscriptionClick = () => {
    navigate('/inscripcion');
  };

  return (
    <div className={styles.container}>
      <header className="pageHeaderBox">
        <h1>Admisiones a la Universidad de Arauca (UNAR)</h1>
        <p>¡Bienvenido a tu futuro en la Orinoquía! En la UNAR, te ofrecemos una educación de calidad, comprometida con la transformación social y el desarrollo sostenible de nuestra región.</p>
      </header>

      <div className={styles.bentoGrid }>
        <section className={`${styles.bentoBox} ${styles.whyUNARBox} ${styles.spanThreeColumns}`}>
          <h2>¿Por qué elegir la UNAR?</h2>
          <div className={styles.whyUNARBoxContent}>
            <div className={styles.whyUNARImageContainer} style={{ backgroundImage: 'url(/images/logo.webp)' }}>
            </div>
            <div className={styles.whyUNARTextContainer}>
              <div className={styles.gridContainer}>
                <div className={styles.card}>
                  <h3>Educación para la Paz</h3>
                  <p>Formamos profesionales íntegros comprometidos con la construcción de paz.</p>
                </div>
                <div className={styles.card}>
                  <h3>Excelencia Académica</h3>
                  <p>Programas innovadores y docentes altamente calificados.</p>
                </div>
                <div className={styles.card}>
                  <h3>Orgullo Llanero</h3>
                  <p>Integramos ciencia, tecnología y cultura al servicio del oriente colombiano.</p>
                </div>
              </div>
            </div>
          </div >
        </section>

        <section className={`${styles.bentoBox} ${styles.ofertaAcademicaBox} ${styles.spanTwoColumns}`}>
          <h2>Nuestra Oferta Académica</h2>
          <p>Explora nuestras facultades y programas de pregrado y posgrado:</p>
          <div className={styles.programOffersGrid}>
            {faculties.map((faculty, index) => (
              <ProgramOfferCard key={index} programOffer={{ facultyName: faculty.name, facultySlug: faculty.slug, imageUrl: faculty.imageUrl }} />
            ))}
          </div>
        </section>

        <section className={`${styles.bentoBox} ${styles.fechasImportantesBox}`}>
          <div className={styles.carouselContainer}>
            <div className={styles.carousel} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {images.map((src, index) => (
                <img key={index} src={src} alt={alts[index]} />
              ))}
            </div>
          </div>
        </section>

        <div className={`${styles.twoColumnSectionWrapper} ${styles.spanThreeColumns}`}>
          <section className={`${styles.bentoBox} ${styles.requisitosBox}`}>
            <h2>Requisitos de Admisión</h2>
            <p>Para ingresar a la Universidad de Arauca, generalmente necesitarás:</p>
            <ul className={styles.requirementsList}>
              <li>Haber culminado tus estudios de bachillerato.</li>
              <li>Presentar el examen de admisión institucional o resultados de pruebas estandarizadas (ej. ICFES Saber 11).</li>
              <li>Documentos de identidad y soportes académicos.</li>
              <li>Cumplir con los requisitos específicos de cada programa.</li>
            </ul>
            <a href="/pdfs/requisitos.pdf" target="_blank" rel="noopener noreferrer" className={styles.callToAction}>Ver Requisitos Detallados</a>
          </section>

          <section id="proceso-de-inscripcion" className={`${styles.bentoBox} ${styles.procesoInscripcionBox} ${highlightInscription ? styles.highlightInscription : ''}`}>
            <h2>Proceso de Inscripción</h2>
            <p>Sigue estos sencillos pasos para postularte:</p>
            <ol className={styles.processList}>
              <li>Diligencia el formulario de inscripción.</li>
              <li>Adjunta los documentos requeridos.</li>
              <li>Realiza el pago de los derechos de inscripción.</li>
              <li>Presenta el examen de admisión (si aplica).</li>
            </ol>
            <button className={styles.callToAction} onClick={handleInscriptionClick}>Iniciar Proceso de Inscripción</button>
          </section>
        </div>
        
      </div>
    </div>
  );
};

export default AdmisionesPage;