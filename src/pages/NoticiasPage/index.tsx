import React from 'react';
import styles from './NoticiasPage.module.css';
import NewsCard from '../../components/NewsCard';
import { newsItems } from '../../services/newsService';

/**
 * @typedef {object} NoticiasPageProps
 */

/**
 * Noticias page component.
 * @param {NoticiasPageProps} props - The properties for the NoticiasPage component.
 * @returns {JSX.Element} The rendered NoticiasPage component.
 */
const NoticiasPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className="pageHeaderBox">
        <h1>Noticias</h1>
        <p>Aquí encontrarás las últimas noticias de la Universidad de Arauca.</p>
      </header>
      <div className={styles.newsGrid}>
        {newsItems.map((news, index) => (
          <NewsCard key={index} title={news.title} description={news.description} imageUrl={news.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default NoticiasPage;
