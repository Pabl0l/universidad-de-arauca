import React from 'react';
import styles from './AdministrativosPage.module.css';

/**
 * @typedef {object} AdministrativosPageProps
 */

/**
 * Administrativos page component.
 * @param {AdministrativosPageProps} props - The properties for the AdministrativosPage component.
 * @returns {JSX.Element} The rendered AdministrativosPage component.
 */
const AdministrativosPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className="pageHeaderBox">
        <h1>Información Administrativa</h1>
        <p>Conoce la estructura jerárquica, contactos y correos de interés de la Universidad de Arauca.</p>
      </header>

      <section className={styles.section}>
        <h2>Estructura Jerárquica</h2>
        <p>Conoce a los líderes que guían nuestra institución:</p>
        <ul className={styles.hierarchyList}>
          <li><strong>Rector:</strong> Ing. Alfredo Cordero</li>
          <li><strong>Vicerrector Académico:</strong> Sofía Mendoza</li>
          <li><strong>Vicerrector Administrativo:</strong> Jairo Moreno</li>
          <li><strong>Secretario General:</strong> Dr. Juan Farfán</li>
        </ul>
        <h3>Facultades y Decanos:</h3>
        <ul className={styles.facultyList}>
          <li><strong>Ingeniería:</strong> Dr. Manuel Parra</li>
          <li><strong>Artes (Mauricio Lezama):</strong> Mg. Julián Contreras</li>
          <li><strong>Ciencias de la Salud:</strong> Dr. Vanessa Rodríguez</li>
          <li><strong>Ciencias Sociales y Jurídicas:</strong> Dr. Nicolás Torres</li>
          <li><strong>Educación y Ciencias Básicas:</strong> Dr. Wadeth Mendoza</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Correos de Interés</h2>
        <p>Aquí encontrarás una lista de correos electrónicos importantes para la comunidad universitaria:</p>
        <ul className={styles.contactList}>
          <li><strong>Admisiones:</strong> admisiones@unar.edu.co</li>
          <li><strong>Secretaría Académica:</strong> secretaria.academica@unar.edu.co</li>
          <li><strong>Soporte Técnico:</strong> soporte@unar.edu.co</li>
          <li><strong>Bienestar Universitario:</strong> bienestar@unar.edu.co</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Directorio Telefónico</h2>
        <p>Números de contacto de las principales dependencias:</p>
        <ul className={styles.contactList}>
          <li><strong>Central Telefónica:</strong> +57 (607) 888 8888</li>
          <li><strong>Admisiones:</strong> +57 (607) 888 8889</li>
          <li><strong>Biblioteca:</strong> +57 (607) 888 8890</li>
        </ul>
      </section>
    </div>
  );
};

export default AdministrativosPage;
