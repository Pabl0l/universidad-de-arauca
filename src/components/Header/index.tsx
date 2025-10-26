import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { AccessibilityContext } from '../../contexts/AccessibilityContext';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const accessibilityContext = useContext(AccessibilityContext);

  if (!accessibilityContext) {
    return null; // or handle the case where context is not available
  }

  const { isHighContrast, isInvertColors } = accessibilityContext;

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const bannerSrc = isHighContrast ? "/images/banner_t.webp" : "/images/banner_b.webp";

  return (
    <header className={`${styles.header} ${!isVisible ? styles.hidden : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* Placeholder for UNAR Logo */}
          <Link to="/">
            <img src={bannerSrc} alt="UNAR Logo" className={styles.unarLogo} />
          </Link>
        </div>
        <button className={styles.hamburger} onClick={toggleMobileMenu} aria-label="Toggle navigation">
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => { window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}>Inicio</Link></li>
            <li><Link to="/admisiones" onClick={() => { window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}>Admisiones</Link></li>
            <li><Link to="/facultades" onClick={() => { window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}>Facultades</Link></li>
            <li><Link to="/noticias" onClick={() => { window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}>Noticias</Link></li>
            <li><Link to="/acercade" onClick={() => { window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}>Sobre la Universidad</Link></li>
            <li><Link to="/administrativos" onClick={() => { window.scrollTo(0, 0); setIsMobileMenuOpen(false); }}>Administrativos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;