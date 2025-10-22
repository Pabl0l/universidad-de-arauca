import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProgramListItem.module.css';
import * as MuiIcons from '@mui/icons-material';

interface IProgramListItemProps {
  facultySlug: string;
  program: IProgram;
}

const ProgramListItem: React.FC<IProgramListItemProps> = ({ facultySlug, program }) => {
  const programPath = `/facultades/${facultySlug}/${program.slug}`;

  const IconComponent = program.icon ? MuiIcons[program.icon as keyof typeof MuiIcons] : null;

  return (
    <li className={styles.listItem}>
      <Link to={programPath} className={styles.programLink}>
        {IconComponent && <IconComponent className={styles.programIcon} />}
        <span>{program.name}</span>
      </Link>
    </li>
  );
};

export default ProgramListItem;
