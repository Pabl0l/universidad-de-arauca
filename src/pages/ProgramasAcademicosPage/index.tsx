import React from 'react';
import styles from './ProgramasAcademicosPage.module.css';

/**
 * @typedef {object} ProgramasAcademicosPageProps
 */

/**
 * Programas Academicos page component.
 * @param {ProgramasAcademicosPageProps} props - The properties for the ProgramasAcademicosPage component.
 * @returns {JSX.Element} The rendered ProgramasAcademicosPage component.
 */
const ProgramasAcademicosPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Programas Académicos</h1>
      <p>Conoce la oferta académica de pregrado y posgrado de la Universidad de Arauca.</p>
    </div>
  );
};

export default ProgramasAcademicosPage;
