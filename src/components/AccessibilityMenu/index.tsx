import React, { useState, useCallback, useEffect, useRef, useContext } from 'react';
import styles from './AccessibilityMenu.module.css';
import { AccessibilityContext } from '../../contexts/AccessibilityContext';

const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const context = useContext(AccessibilityContext);

  if (!context) {
    return null; // or some fallback UI
  }

  const { 
    isHighContrast,
    isReadableFont,
    isGrayscale,
    isHighlightLinks,
    toggleHighContrast, 
    toggleReadableFont, 
    toggleGrayscale, 
    toggleHighlightLinks, 
    resetAccessibility 
  } = context;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  const changeFontSize = useCallback((increase: boolean) => {
    const root = document.documentElement;
    const currentSize = parseFloat(getComputedStyle(root).fontSize);
    if (increase) {
      root.style.fontSize = `${currentSize * 1.1}px`;
    } else {
      root.style.fontSize = `${currentSize / 1.1}px`;
    }
  }, []);

  return (
    <>
      <button className={styles.floatingButton} onClick={toggleMenu} aria-label="Menú de Accesibilidad">
        <i className="fas fa-universal-access"></i>
      </button>
      <div ref={menuRef} className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <button onClick={() => changeFontSize(true)}>Aumentar Texto</button>
          <button onClick={() => changeFontSize(false)}>Disminuir Texto</button>
          <button onClick={toggleHighContrast}>Alto Contraste</button>
          <button onClick={toggleReadableFont}>Fuente Legible</button>
          <button onClick={toggleGrayscale}>Escala de Grises</button>
          <button onClick={toggleHighlightLinks}>Resaltar Enlaces</button>
          <button onClick={resetAccessibility}>Restablecer</button>
        </div>
    </>
  );
};

export default AccessibilityMenu;
