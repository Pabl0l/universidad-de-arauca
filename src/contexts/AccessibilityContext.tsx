import React, { createContext, useState, useMemo, ReactNode } from 'react';

interface IAccessibilityContext {
  isHighContrast: boolean;
  isReadableFont: boolean;
  isGrayscale: boolean;
  isHighlightLinks: boolean;
  toggleHighContrast: () => void;
  toggleReadableFont: () => void;
  toggleGrayscale: () => void;
  toggleHighlightLinks: () => void;
  resetAccessibility: () => void;
}

export const AccessibilityContext = createContext<IAccessibilityContext | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReadableFont, setIsReadableFont] = useState(false);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isHighlightLinks, setIsHighlightLinks] = useState(false);

  const toggleHighContrast = () => {
    setIsHighContrast(prev => !prev);
    document.body.classList.toggle('high-contrast');
  };

  const toggleReadableFont = () => {
    setIsReadableFont(prev => !prev);
    document.body.classList.toggle('readable-font');
  };

  const toggleGrayscale = () => {
    setIsGrayscale(prev => !prev);
    document.body.classList.toggle('grayscale');
  };

  const toggleHighlightLinks = () => {
    setIsHighlightLinks(prev => !prev);
    document.body.classList.toggle('highlight-links');
  };

  const resetAccessibility = () => {
    setIsHighContrast(false);
    setIsReadableFont(false);
    setIsGrayscale(false);
    setIsHighlightLinks(false);
    document.body.className = '';
    const root = document.documentElement;
    root.style.fontSize = '';
  };

  const value = useMemo(() => ({
    isHighContrast,
    isReadableFont,
    isGrayscale,
    isHighlightLinks,
    toggleHighContrast,
    toggleReadableFont,
    toggleGrayscale,
    toggleHighlightLinks,
    resetAccessibility,
  }), [isHighContrast, isReadableFont, isGrayscale, isHighlightLinks]);

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};
