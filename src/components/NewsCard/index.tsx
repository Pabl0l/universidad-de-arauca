import React from 'react';
import styles from './NewsCard.module.css';

/**
 * @interface INewsCardProps
 * @property {string} title - The title of the news item.
 * @property {string} description - A brief description of the news item.
 */
interface INewsCardProps {
  title: string;
  description: string;
}

/**
 * NewsCard component displays a single news item.
 * @param {INewsCardProps} props - The properties for the NewsCard component.
 * @returns {JSX.Element} The rendered NewsCard component.
 */
const NewsCard: React.FC<INewsCardProps> = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className={styles.readMore}>Leer más</a>
    </div>
  );
};

export default NewsCard;
