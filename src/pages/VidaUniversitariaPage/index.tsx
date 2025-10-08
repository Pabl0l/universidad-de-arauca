import React from 'react';
import styles from './VidaUniversitariaPage.module.css';

/**
 * @typedef {object} VidaUniversitariaPageProps
 */

/**
 * Vida Universitaria page component.
 * @param {VidaUniversitariaPageProps} props - The properties for the VidaUniversitariaPage component.
 * @returns {JSX.Element} The rendered VidaUniversitariaPage component.
 */
const VidaUniversitariaPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Vida Universitaria</h1>
      <p>Descubre la vibrante vida universitaria en la Universidad de Arauca.</p>
    </div>
  );
};

export default VidaUniversitariaPage;
