import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProgramOfferCard.module.css';

export interface IProgramOffer {
  facultyName: string;// New field for navigation
  imageUrl: string; // New field for image
}

export const ProgramOfferCard: React.FC<{ programOffer: IProgramOffer }> = ({ programOffer }) => {
  const { facultyName, imageUrl } = programOffer;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/facultades/${facultyName.replace(/ /g, '-')}`);
  };

  return (
    <div className={styles.programOfferCard} onClick={handleClick}>
      <img src={imageUrl} alt={facultyName} className={styles.facultyImage} />
    </div>
  );
};


