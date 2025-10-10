import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import NewsCard from '../../components/NewsCard';
import EventCard from '../../components/EventCard';

/**
 * @typedef {object} HomePageProps
 */

/**
 * Main homepage component for the University of Arauca website.
 * @param {HomePageProps} props - The properties for the HomePage component.
 * @returns {JSX.Element} The rendered HomePage component.
 */
const HomePage: React.FC = () => {
  return (
    <main className={styles.homePage}>
      <section className={styles.hero}>
        <header className={`pageHeaderBox ${styles.homePageHeaderBox}`}>
          <h1>“La educación siembra paz, el conocimiento la hace florecer.”</h1>
          <p>Bienvenido a la Universidad de Arauca (UNAR), una institución pública comprometida con el desarrollo sostenible, la innovación social y la construcción de paz desde el corazón de la Orinoquía.</p>
          <p>Nacimos del sueño de una región que decidió cambiar la violencia por conocimiento, las fronteras por puentes, y los conflictos por oportunidades.</p>
          <p>Hoy formamos profesionales que transforman su territorio con ciencia, cultura y esperanza.</p>
          <Link to="/programas-academicos">
            <button className={styles.callToAction}>Conoce nuestros programas</button>
          </Link>
        </header>
      </section>

      <section className={styles.section}>
        <h2>Noticias destacadas</h2>
        <div className={styles.gridContainer}>
          <NewsCard
            title="UNAR lanza su primer Laboratorio de Energías Limpias"
            description="El laboratorio promueve la investigación en biogás y energía solar con estudiantes de Ingeniería Mecánica y Ambiental."
          />
          <NewsCard
            title="Convenio con la Universidad Nacional para intercambio de docentes."
            description="Se fortalecerán programas de Licenciatura y Ciencias Naturales."
          />
          <NewsCard
            title="Proyecto “Paz y Territorio”"
            description="Jóvenes de comunidades rurales acceden a becas completas gracias a alianzas con la Gobernación de Arauca."
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Próximos eventos</h2>
        <div className={styles.gridContainer}>
          <EventCard
            date="10 nov 2025"
            title="Feria de la Innovación Llanera"
            description="Exposición de proyectos estudiantiles de ingeniería y emprendimiento."
          />
          <EventCard
            date="5 dic 2025"
            title="Concierto de Fin de Año"
            description="Presentación del Coro UNAR y grupos musicales de la Facultad de Artes."
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
