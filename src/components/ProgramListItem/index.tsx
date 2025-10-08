import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProgramListItem.module.css';

/**
 * @interface IProgramListItemProps
 * @property {string} facultyName - The name of the faculty the program belongs to.
 * @property {IProgram} program - The program data to display.
 */
interface IProgramListItemProps {
  facultyName: string;
  program: IProgram;
}

/**
 * ProgramListItem component displays a program name as a link to its detail page.
 * @param {IProgramListItemProps} props - The properties for the ProgramListItem component.
 * @returns {JSX.Element} The rendered ProgramListItem component.
 */
const ProgramListItem: React.FC<IProgramListItemProps> = ({ facultyName, program }) => {
  const programPath = `/facultades/${facultyName.replace(/ /g, '-')}/${program.name.replace(/ /g, '-')}`;

  return (
    <li className={styles.listItem}>
      <Link to={programPath}>{program.name}</Link>
    </li>
  );
};

export default ProgramListItem;
