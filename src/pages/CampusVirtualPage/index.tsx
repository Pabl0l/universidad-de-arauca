import React from 'react';
import styles from './CampusVirtualPage.module.css';

/**
 * @typedef {object} CampusVirtualPageProps
 */

/**
 * Campus Virtual page component.
 * @param {CampusVirtualPageProps} props - The properties for the CampusVirtualPage component.
 * @returns {JSX.Element} The rendered CampusVirtualPage component.
 */
const CampusVirtualPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className="pageHeaderBox">
        <h1>Campus Virtual</h1>
        <p>Accede a la plataforma virtual de la Universidad de Arauca.</p>
      </header>
    </div>
  );
};

export default CampusVirtualPage;
