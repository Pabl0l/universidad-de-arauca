import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/facultades/${faculty.slug}`);
  };

  return (
    <div
      className={styles.card}
      onClick={handleClick}
      style={{ backgroundImage: `url(${faculty.imageUrl})` }}
    >
      <h3 className={styles.facultyName}>{faculty.name}</h3>
    </div>
  );
};

export default FacultyCard;