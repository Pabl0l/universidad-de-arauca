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
      title: "UNAR lanza su primer Laboratorio de Energías Limpias",
      description: "El laboratorio promueve la investigación en biogás y energía solar con estudiantes de Ingeniería Mecánica y Ambiental.",
      imageUrl: "/images/energias_limpias_noticias.webp",
    },
    {
      title: "Convenio con la Universidad Nacional para intercambio de docentes.",
      description: "Se fortalecerán programas de Licenciatura y Ciencias Naturales.",
      imageUrl: "/images/convenio_noticias.webp",
    },
    {
      title: "Proyecto “Paz y Territorio”",
      description: "Jóvenes de comunidades rurales acceden a becas completas gracias a alianzas con la Gobernación de Arauca.",
      imageUrl: "/images/becas_rurales_noticias.webp",
    },
    {
      title: "Nueva Convocatoria de Becas para Posgrados",
      description: "La UNAR abre inscripciones para becas completas en maestrías y doctorados en áreas estratégicas para la región.",
      imageUrl: "/images/becas_posgrados.webp",
    },
    {
      title: "Seminario Internacional de Agroindustria Sostenible",
      description: "Expertos de Latinoamérica se reunirán en la UNAR para debatir sobre las últimas tendencias en producción agrícola y pecuaria.",
      imageUrl: "/images/agroindustria_noticias.webp",
    },
    {
      title: "Investigación sobre Cultivos Amazónicos",
      description: "Científicos de la UNAR descubren nuevas propiedades en plantas nativas, abriendo puertas a la biotecnología.",
      imageUrl: "/images/cultivos_amazonicos_noticias.webp",
    },
    {
      title: "Festival Cultural Llanero Universitario",
      description: "Estudiantes y artistas locales celebran la riqueza cultural de la región con música, danza y gastronomía.",
      imageUrl: "/images/festival_noticias.webp",
    },
    {
      title: "Alianza con el Sector Productivo para Prácticas Profesionales",
      description: "Empresas de la región ofrecen oportunidades de práctica a estudiantes de Ingeniería y Ciencias de la Salud.",
      imageUrl: "/images/alianza_noticias.webp",
    },
    {
      title: "Jornada de Reforestación en la Cuenca del Río Arauca",
      description: "Comunidad universitaria y voluntarios se unen para proteger el ecosistema local.",
      imageUrl: "/images/reforestación_noticias.webp",
    },
  ];

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
