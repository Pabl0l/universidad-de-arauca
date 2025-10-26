import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FloatingEnrollButton: React.FC = () => {
  const location = useLocation();
  const showButton = location.pathname !== '/inscripcion';

  if (!showButton) {
    return null;
  }

  return (
    <Link to="/admisiones#proceso-de-inscripcion" className="floating-button">
      ¡Inscríbete ahora!
    </Link>
  );
};

export default FloatingEnrollButton;
