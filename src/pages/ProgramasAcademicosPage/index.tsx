import React from 'react';
import styles from './ProgramasAcademicosPage.module.css';
import { faculties } from '../../services/facultyService';
import ProgramListItem from '../../components/ProgramListItem';

const ProgramasAcademicosPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className="pageHeaderBox">
        <h1>Programas Académicos</h1>
        <p>Explora nuestra oferta académica organizada por facultades.</p>
      </header>

      <div className={styles.facultiesList}>
        {faculties.map((faculty) => (
          <section key={faculty.slug} className={styles.facultySection}>
            <h2>{faculty.name}</h2>
            <ul className={styles.programList}>
              {faculty.programs.map((program) => (
                <ProgramListItem key={program.slug} facultySlug={faculty.slug} program={program} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProgramasAcademicosPage;