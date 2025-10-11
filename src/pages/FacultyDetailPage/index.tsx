import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './FacultyDetailPage.module.css';
import { faculties } from '../../services/facultyService';
import ProgramListItem from '../../components/ProgramListItem';


/**
 * @typedef {object} FacultyDetailPageProps
 */

/**
 * Faculty detail page component.
 * @param {FacultyDetailPageProps} props - The properties for the FacultyDetailPage component.
 * @returns {JSX.Element} The rendered FacultyDetailPage component.
 */
const FacultyDetailPage: React.FC = () => {
  const { facultySlug } = useParams<{ facultySlug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [facultySlug]);

  const faculty = faculties.find((f: IFaculty) => {
    return f.slug === facultySlug;
  });

  if (!faculty) {
    return (
      <div className={styles.container}>
        <h1>Facultad no encontrada</h1>
        <p>Lo sentimos, la facultad que buscas no existe.</p>
        <Link to="/facultades" className={styles.backLink}>Volver a Facultades</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/facultades" className={styles.backLink}>&larr; Volver a Facultades</Link>
      <header className={styles.facultyHeader}>
        <h1>Facultad de {faculty.name}</h1>
        <p className={styles.slogan}>{faculty.slogan}</p>
        <p className={styles.dean}>Decano: {faculty.dean}</p>
      </header>

      <div className={styles.bentoGrid}>
        <section className={`${styles.bentoBox} ${styles.descriptionBox}`}>
          <h2>Descripción</h2>
          <p>{faculty.description}</p>
        </section>

        <section className={`${styles.bentoBox} ${styles.programsBox}`}>
          <h2>Programas Académicos</h2>
          <ul className={styles.programsList}>
            {faculty.programs.map((program) => (
              <ProgramListItem key={program.name} facultyName={faculty.name} program={program} />
            ))}
          </ul>
        </section>

        
      </div>
    </div>
  );
};

export default FacultyDetailPage;