import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import NewsCard from '../../components/NewsCard';
import EventCard from '../../components/EventCard';
import { newsItems } from '../../services/newsService';

/**
 * @typedef {object} HomePageProps
 */

/**
 * Main homepage component for the University of Arauca website.
 * @param {HomePageProps} props - The properties for the HomePage component.
 * @returns {JSX.Element} The rendered HomePage component.
 */
const HomePage: React.FC = () => {
  // Take the first 3 news items for the homepage
  const featuredNews = newsItems.slice(0, 3);

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
          {featuredNews.map((news, index) => (
            <NewsCard key={index} title={news.title} description={news.description} imageUrl={news.imageUrl} />
          ))}
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
