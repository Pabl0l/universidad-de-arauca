import React from 'react';
import styles from './EventosPage.module.css';

/**
 * @typedef {object} EventosPageProps
 */

/**
 * Eventos page component.
 * @param {EventosPageProps} props - The properties for the EventosPage component.
 * @returns {JSX.Element} The rendered EventosPage component.
 */
const EventosPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Eventos</h1>
      <p>Consulta los próximos eventos de la Universidad de Arauca.</p>
    </div>
  );
};

export default EventosPage;
