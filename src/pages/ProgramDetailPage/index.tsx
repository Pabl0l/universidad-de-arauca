import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProgramDetailPage.module.css';
import { faculties } from '../../services/facultyService';

/**
 * @typedef {object} ProgramDetailPageProps
 */

/**
 * Program detail page component.
 * @param {ProgramDetailPageProps} props - The properties for the ProgramDetailPage component.
 * @returns {JSX.Element} The rendered ProgramDetailPage component.
 */
const ProgramDetailPage: React.FC = () => {
  const { facultyName, programName } = useParams<{ facultyName: string; programName: string }>();

  const formattedFacultyName = facultyName ? facultyName.replace(/-/g, ' ') : '';
  const formattedProgramName = programName ? programName.replace(/-/g, ' ') : '';

  const faculty = faculties.find(f => f.name.toLowerCase() === formattedFacultyName.toLowerCase());
  const program = faculty?.programs.find(p => p.name.toLowerCase() === formattedProgramName.toLowerCase());

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
      <Link to={`/facultades/${facultyName}`} className={styles.backLink}>&larr; Volver a {faculty.name}</Link>
      <header className={styles.programHeader}>
        <h1>{program.name}</h1>
        <p className={styles.slogan}>{program.slogan}</p>
      </header>

      <div className={styles.contentGrid}>
        <div className={styles.mainColumn}>
          <section className={`${styles.section} ${styles.descriptionBox}`}>
            <h2>Descripción</h2>
            <p>{program.description}</p>
          </section>

          <section className={`${styles.section} ${styles.studyPlanBox}`}>
            <h2>Plan de Estudio</h2>
            <p>Descarga el plan de estudio completo para conocer en detalle las asignaturas y el perfil de formación.</p>
            <button className={styles.studyPlanButton}>Ver Plan de Estudio (PDF)</button>
          </section>
        </div>

        <div className={styles.sideColumn}>
          <section className={`${styles.section} ${styles.uniqueFocusBox}`}>
            <h2>Enfoque Único</h2>
            <p>{program.uniqueFocus}</p>
          </section>

          <section className={`${styles.section} ${styles.graduateProfileBox}`}>
            <h2>Perfil del Egresado</h2>
            <p>{program.graduateProfile}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailPage;
