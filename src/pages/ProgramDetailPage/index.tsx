import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProgramDetailPage.module.css';
import { faculties } from '../../services/facultyService';
import toast from 'react-hot-toast';
import { InfoOutlined, ListAltOutlined, StarBorderOutlined, WorkOutlineOutlined } from '@mui/icons-material';

/**
 * @typedef {object} ProgramDetailPageProps
 */

/**
 * Program detail page component.
 * @param {ProgramDetailPageProps} props - The properties for the ProgramDetailPage component.
 * @returns {JSX.Element} The rendered ProgramDetailPage component.
 */
const ProgramDetailPage: React.FC = () => {
  const { facultySlug, programSlug } = useParams<{ facultySlug: string; programSlug: string }>();

  const faculty = faculties.find(f => f.slug === facultySlug);
  const program = faculty?.programs.find(p => p.slug === programSlug);

  const getProgramImage = (programSlug: string | undefined) => {
    if (!programSlug) return undefined;
  
    const imageMap: { [key: string]: string } = {
      'ingenieria-agronoma': 'ing-agronoma.webp',
      'ingenieria-mecanica': 'ing-mecanica.webp',
      'ingenieria-civil': 'ing-civil.webp',
      'ingenieria-electrica': 'ing-electrica.webp',
      'ingenieria-industrial': 'ing-industrial.webp',
      'ingenieria-quimica': 'ing-quimica.webp',
      'ingenieria-de-sistemas': 'ing-sistemas.webp',
      'artes-audiovisuales': 'artes-audiovisuales.webp',
      'artes-plasticas': 'artes-plasticas.webp',
      'musica': 'musica.webp',
      'diseno-grafico': 'diseno-grafico.webp',
      'diseno-uiux': 'diseno-ui-ux.webp',
      'medicina': 'medicina.webp',
      'enfermeria': 'enfermeria.webp',
      'odontologia': 'odontologia.webp',
      'bacteriologia': 'bacteriologia.webp',
      'medicina-veterinaria-y-zootecnia': 'veterinaria.webp',
      'derecho': 'derecho.webp',
      'ciencias-politicas': 'ciencias-politicas.webp',
      'periodismo': 'periodismo.webp',
      'antropologia': 'antropologia.webp',
      'historia': 'historia.webp',
      'licenciatura-en-ciencias-naturales': 'lic-ciencias.webp',
      'licenciatura-en-matematicas': 'lic-matematicas.webp',
      'licenciatura-en-lengua-castellana': 'lic-lengua.webp',
      'licenciatura-en-ciencias-sociales': 'lic-sociales.webp',
    };
  
    const imageName = imageMap[programSlug];
    return imageName ? `/images/${imageName}` : undefined;
  };

  if (!faculty || !program) {
    return (
      <div className={styles.container}>
        <h1>Programa no encontrado</h1>
        <p>Lo sentimos, el programa que buscas no existe.</p>
        <Link to="/facultades" className={styles.backLink}>Volver a Facultades</Link>
      </div>
    );
  }

  const programImage = getProgramImage(program.slug);

  return (
    <div className={styles.container}>
      <Link to={`/facultades/${faculty.slug}`} className={styles.backLink}>&larr; Volver a {faculty.name}</Link>
      <header 
        className={styles.programHeader}
        style={programImage ? { backgroundImage: `url(${programImage})` } : {}}
      >
        <h1>{program.name}</h1>
        <p className={styles.slogan}>{program.slogan}</p>
      </header>

      <div className={styles.contentGrid}>
        <div className={styles.mainColumn}>
          <section className={`${styles.section} ${styles.descriptionBox}`}>
            <div className={styles.sectionTitle}>
              <InfoOutlined />
              <h2>Descripción</h2>
            </div>
            <p>{program.description} <br /><br /> <strong>Duración:</strong> {program.duration}</p>
          </section>

          <section className={`${styles.section} ${styles.studyPlanBox}`}>
            <div className={styles.sectionTitle}>
              <ListAltOutlined />
              <h2>Plan de Estudio</h2>
            </div>
            <p>Descarga el plan de estudio completo para conocer en detalle las asignaturas y el perfil de formación.</p>
            <button className={styles.studyPlanButton} onClick={() => toast.error('Lo sentimos, el plan de estudios aún no está disponible')}>Ver Plan de Estudio (PDF)</button>
          </section>
        </div>

        <div className={styles.sideColumn}>
          <section className={`${styles.section} ${styles.uniqueFocusBox}`}>
            <div className={styles.sectionTitle}>
              <StarBorderOutlined />
              <h2>Enfoque Único</h2>
            </div>
            <p>{program.uniqueFocus}</p>
          </section>

          <section className={`${styles.section} ${styles.graduateProfileBox}`}>
            <div className={styles.sectionTitle}>
              <WorkOutlineOutlined />
              <h2>Perfil del Egresado</h2>
            </div>
            <p>{program.graduateProfile}</p>
          </section>


        </div>
      </div>
    </div>
  );
};

export default ProgramDetailPage;
