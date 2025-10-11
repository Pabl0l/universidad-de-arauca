import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProgramOfferCard.module.css';

export interface IProgramOffer {
  facultyName: string; // New field for navigation
  facultySlug: string;
  imageUrl: string; // New field for image
}

export const ProgramOfferCard: React.FC<{ programOffer: IProgramOffer }> = ({ programOffer }) => {
  const { facultyName, facultySlug, imageUrl } = programOffer;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/facultades/${facultySlug}`);
  };

  return (
    <div
      className={styles.programOfferCard}
      onClick={handleClick}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h3 className={styles.facultyName}>{facultyName}</h3>
    </div>
  );
};
