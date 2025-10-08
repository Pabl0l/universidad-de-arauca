import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

/**
 * @typedef {object} HeaderProps
 */

/**
 * Global header component for the University of Arauca website.
 * @param {HeaderProps} props - The properties for the Header component.
 * @returns {JSX.Element} The rendered Header component.
 */
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* Placeholder for UnAr Logo */}
          <Link to="/"><span>UnAr</span></Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/noticias">Noticias</Link></li>
            <li><Link to="/facultades">Facultades</Link></li>
            <li><Link to="/eventos">Eventos</Link></li>
            <li><Link to="/admisiones">Admisiones</Link></li>
            <li><Link to="/vida-universitaria">Vida Universitaria</Link></li>
            <li><Link to="/programas-academicos">Programas Académicos</Link></li>
            <li><Link to="/campus-virtual">Campus Virtual</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
