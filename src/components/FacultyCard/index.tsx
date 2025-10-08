import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FacultyCard.module.css';

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
  return (
    <div className={styles.card}>
      <h3>{faculty.name}</h3>
      <p className={styles.slogan}>{faculty.slogan}</p>
      <p className={styles.dean}>Decano: {faculty.dean}</p>
      <Link to={`/facultades/${faculty.name.replace(/ /g, '-')}`} className={styles.detailsButton}>
        Ver Detalles
      </Link>
    </div>
  );
};

export default FacultyCard;