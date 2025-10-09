import React, { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scroll down
        setIsVisible(false);
      } else { // if scroll up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]); // Rerun when lastScrollY changes

  return (
    <header className={`${styles.header} ${!isVisible ? styles.hidden : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* Placeholder for UNAR Logo */}
          <Link to="/">
            <img src="/images/banner_b.webp" alt="UNAR Logo" className={styles.unarLogo} />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/admisiones">Admisiones</Link></li>
            <li><Link to="/facultades">Facultades</Link></li>
            <li><Link to="/noticias">Noticias</Link></li>
            <li><Link to="/acercade">Sobre la Universidad</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
