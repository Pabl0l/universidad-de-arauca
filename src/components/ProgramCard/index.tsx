import React from 'react';
import styles from './ProgramCard.module.css';

/**
 * @interface IProgramCardProps
 * @property {IProgram} program - The program data to display.
 */
interface IProgramCardProps {
  program: IProgram;
}

/**
 * ProgramCard component displays details of an academic program.
 * @param {IProgramCardProps} props - The properties for the ProgramCard component.
 * @returns {JSX.Element} The rendered ProgramCard component.
 */
const ProgramCard: React.FC<IProgramCardProps> = ({ program }) => {
  return (
    <div className={styles.card}>
      <h3>{program.name}</h3>
      <p className={styles.slogan}>{program.slogan}</p>
      <p className={styles.description}>{program.description}</p>
      <h4>Enfoque Único:</h4>
      <p className={styles.uniqueFocus}>{program.uniqueFocus}</p>
      <h4>Perfil del Egresado:</h4>
      <p className={styles.graduateProfile}>{program.graduateProfile}</p>
    </div>
  );
};

export default ProgramCard;