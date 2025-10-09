import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * EnrollButton component for navigating to the admissions page with a smooth scroll to the inscription process.
 * @returns {JSX.Element} The rendered EnrollButton component.
 */
const EnrollButton: React.FC = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/admisiones#proceso-de-inscripcion');
  };

  return (
    <button onClick={handleEnrollClick} className="floating-button">
      ¡Inscríbete ya!
    </button>
  );
};

export default EnrollButton;
