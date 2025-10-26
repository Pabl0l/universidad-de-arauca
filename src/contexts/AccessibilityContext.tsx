import React, { createContext, useState, useMemo, type ReactNode } from 'react';

interface IAccessibilityContext {
  isHighContrast: boolean;
  isReadableFont: boolean;
  isGrayscale: boolean;
  isHighlightLinks: boolean;
  isInvertColors: boolean;
  toggleHighContrast: () => void;
  toggleReadableFont: () => void;
  toggleGrayscale: () => void;
  toggleHighlightLinks: () => void;
  toggleInvertColors: () => void;
  resetAccessibility: () => void;
}

export const AccessibilityContext = createContext<IAccessibilityContext | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReadableFont, setIsReadableFont] = useState(false);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isHighlightLinks, setIsHighlightLinks] = useState(false);
  const [isInvertColors, setIsInvertColors] = useState(false);

  const toggleHighContrast = () => {
    const newHighContrast = !isHighContrast;
    setIsHighContrast(newHighContrast);
    document.body.classList.toggle('high-contrast', newHighContrast);

    if (newHighContrast) {
      setIsGrayscale(false);
      document.body.classList.remove('grayscale');
      setIsInvertColors(false);
      document.body.classList.remove('invert-colors');
    }
  };

  const toggleReadableFont = () => {
    setIsReadableFont(prev => !prev);
    document.body.classList.toggle('readable-font');
  };

  const toggleGrayscale = () => {
    const newGrayscale = !isGrayscale;
    setIsGrayscale(newGrayscale);
    document.body.classList.toggle('grayscale', newGrayscale);

    if (newGrayscale) {
      setIsHighContrast(false);
      document.body.classList.remove('high-contrast');
      setIsInvertColors(false);
      document.body.classList.remove('invert-colors');
    }
  };

  const toggleHighlightLinks = () => {
    setIsHighlightLinks(prev => !prev);
    document.body.classList.toggle('highlight-links');
  };

  const toggleInvertColors = () => {
    const newInvertColors = !isInvertColors;
    setIsInvertColors(newInvertColors);
    document.body.classList.toggle('invert-colors', newInvertColors);

    if (newInvertColors) {
      setIsHighContrast(false);
      document.body.classList.remove('high-contrast');
      setIsGrayscale(false);
      document.body.classList.remove('grayscale');
    }
  };

  const resetAccessibility = () => {
    setIsHighContrast(false);
    setIsReadableFont(false);
    setIsGrayscale(false);
    setIsHighlightLinks(false);
    setIsInvertColors(false);
    document.body.className = '';
    const root = document.documentElement;
    root.style.fontSize = '';
  };

  const value = useMemo(() => ({
    isHighContrast,
    isReadableFont,
    isGrayscale,
    isHighlightLinks,
    isInvertColors,
    toggleHighContrast,
    toggleReadableFont,
    toggleGrayscale,
    toggleHighlightLinks,
    toggleInvertColors,
    resetAccessibility,
  }), [isHighContrast, isReadableFont, isGrayscale, isHighlightLinks, isInvertColors]);

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};
