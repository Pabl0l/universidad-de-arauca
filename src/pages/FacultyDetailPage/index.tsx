import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './FacultyDetailPage.module.css';
import { faculties } from '../../services/facultyService';
import ProgramCard from '../../components/ProgramCard';

/**
 * @typedef {object} FacultyDetailPageProps
 */

/**
 * Faculty detail page component.
 * @param {FacultyDetailPageProps} props - The properties for the FacultyDetailPage component.
 * @returns {JSX.Element} The rendered FacultyDetailPage component.
 */
const FacultyDetailPage: React.FC = () => {
  const { facultyName } = useParams<{ facultyName: string }>();

  const formattedFacultyName = facultyName ? facultyName.replace(/-/g, ' ') : '';
  const faculty = faculties.find((f: IFaculty) => f.name.toLowerCase() === formattedFacultyName.toLowerCase());

  if (!faculty) {
    return (
      <div className={styles.container}>
        <h1>Facultad no encontrada</h1>
        <p>Lo sentimos, la facultad que buscas no existe.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>{faculty.name}</h1>
      <p className={styles.slogan}>{faculty.slogan}</p>
      <p className={styles.description}>{faculty.description}</p>

      <section className={styles.section}>
        <h2>Programas Académicos</h2>
        <div className={styles.programsGrid}>
          {faculty.programs.map((program) => (
            <ProgramCard key={program.name} program={program} />
          ))}
        </div>
      </section>

      {faculty.emblematicProjects && faculty.emblematicProjects.length > 0 && (
        <section className={styles.section}>
          <h2>Proyectos Emblemáticos</h2>
          <ul className={styles.list}>
            {faculty.emblematicProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </section>
      )}

      {faculty.facilities && faculty.facilities.length > 0 && (
        <section className={styles.section}>
          <h2>Instalaciones y Espacios de Estudio</h2>
          <ul className={styles.list}>
            {faculty.facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default FacultyDetailPage;
