import React from 'react';
import styles from './SobreLaUniversidadPage.module.css';

/**
 * @typedef {object} SobreLaUniversidadPageProps
 */

/**
 * SobreLaUniversidad page component.
 * @param {SobreLaUniversidadPageProps} props - The properties for the SobreLaUniversidadPage component.
 * @returns {JSX.Element} The rendered SobreLaUniversidadPage component.
 */
const SobreLaUniversidadPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className="pageHeaderBox">
        <h1>Sobre la Universidad de Arauca</h1>
        <p>Conoce nuestra historia, misión, visión y valores.</p>
      </header>
      {/* Add content here */}
    </div>
  );
};

export default SobreLaUniversidadPage;
