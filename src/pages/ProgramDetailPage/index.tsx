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

  if (!faculty || !program) {
    return (
      <div className={styles.container}>
        <h1>Programa no encontrado</h1>
        <p>Lo sentimos, el programa que buscas no existe.</p>
        <Link to="/facultades" className={styles.backLink}>Volver a Facultades</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to={`/facultades/${faculty.slug}`} className={styles.backLink}>&larr; Volver a {faculty.name}</Link>
      <header className={styles.programHeader}>
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
