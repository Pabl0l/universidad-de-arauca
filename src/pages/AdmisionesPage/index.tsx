import React from 'react';
import styles from './AdmisionesPage.module.css';

/**
 * @typedef {object} AdmisionesPageProps
 */

/**
 * Admisiones page component.
 * @param {AdmisionesPageProps} props - The properties for the AdmisionesPage component.
 * @returns {JSX.Element} The rendered AdmisionesPage component.
 */
const AdmisionesPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Admisiones</h1>
      <p>Información sobre el proceso de admisión a la Universidad de Arauca.</p>
    </div>
  );
};

export default AdmisionesPage;
