import React from 'react';
import styles from './FacultadesPage.module.css';
import { faculties } from '../../services/facultyService';
import FacultyCard from '../../components/FacultyCard';

/**
 * @typedef {object} FacultadesPageProps
 */

/**
 * Facultades page component.
 * @param {FacultadesPageProps} props - The properties for the FacultadesPage component.
 * @returns {JSX.Element} The rendered FacultadesPage component.
 */
const FacultadesPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className="pageHeaderBox">
        <h1>Nuestras Facultades</h1>
        <p>Explora las facultades de la Universidad de Arauca y sus programas académicos.</p>
      </header>
      <div className={styles.facultiesGrid}>
        {faculties.map((faculty: IFaculty) => (
          <FacultyCard key={faculty.name} faculty={faculty} />
          
        ))}
      </div>
    </div>
  );
};

export default FacultadesPage;