import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './FacultyCard.module.css';

const generateSlug = (name: string) => name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
const generateImageUrl = (name: string) => `/assets/faculties/${generateSlug(name)}.webp`;

/**
 * @interface IFacultyCardProps
 * @property {IFaculty} faculty - The faculty data to display.
 */
interface IFacultyCardProps {
  faculty: IFaculty;
}

/**
 * FacultyCard component displays a summary of a faculty.
 * @param {IFacultyCardProps} props - The properties for the FacultyCard component.
 * @returns {JSX.Element} The rendered FacultyCard component.
 */
const FacultyCard: React.FC<IFacultyCardProps> = ({ faculty }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageUrl = generateImageUrl(faculty.name);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <div className={styles.imageContainer} style={{ backgroundImage: `url(${imageUrl})` }}></div>
      ) : (
        <div className={styles.contentOverlay}>
          <h3>{faculty.name}</h3>
          <p className={styles.slogan}>{faculty.slogan}</p>
          <p className={styles.dean}>Decano: {faculty.dean}</p>
          <Link to={`/facultades/${faculty.name.replace(/ /g, '-')}`} className={styles.detailsButton}>
            Ver Detalles
          </Link>
        </div>
      )}
    </div>
  );
};

export default FacultyCard;