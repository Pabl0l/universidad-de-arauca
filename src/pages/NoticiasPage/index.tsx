import React from 'react';
import styles from './NoticiasPage.module.css';
import NewsCard from '../../components/NewsCard';

/**
 * @typedef {object} NoticiasPageProps
 */

/**
 * Noticias page component.
 * @param {NoticiasPageProps} props - The properties for the NoticiasPage component.
 * @returns {JSX.Element} The rendered NoticiasPage component.
 */
const NoticiasPage: React.FC = () => {
  const newsItems = [
    {
      title: "UnAr lanza su primer Laboratorio de Energías Limpias",
      description: "El laboratorio promueve la investigación en biogás y energía solar con estudiantes de Ingeniería Mecánica y Ambiental.",
    },
    {
      title: "Convenio con la Universidad Nacional para intercambio de docentes.",
      description: "Se fortalecerán programas de Licenciatura y Ciencias Naturales.",
    },
    {
      title: "Proyecto “Paz y Territorio”",
      description: "Jóvenes de comunidades rurales acceden a becas completas gracias a alianzas con la Gobernación de Arauca.",
    },
    {
      title: "Nueva Convocatoria de Becas para Posgrados",
      description: "La UnAr abre inscripciones para becas completas en maestrías y doctorados en áreas estratégicas para la región.",
    },
    {
      title: "Seminario Internacional de Agroindustria Sostenible",
      description: "Expertos de Latinoamérica se reunirán en la UnAr para debatir sobre las últimas tendencias en producción agrícola y pecuaria.",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Noticias</h1>
      <p>Aquí encontrarás las últimas noticias de la Universidad de Arauca.</p>
      <div className={styles.newsGrid}>
        {newsItems.map((news, index) => (
          <NewsCard key={index} title={news.title} description={news.description} />
        ))}
      </div>
    </div>
  );
};

export default NoticiasPage;
