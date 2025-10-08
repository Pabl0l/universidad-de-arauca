import React from 'react';
import styles from './Footer.module.css';

/**
 * @typedef {object} FooterProps
 */

/**
 * Global footer component for the University of Arauca website.
 * @param {FooterProps} props - The properties for the Footer component.
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Universidad de Arauca (UNAR). Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
