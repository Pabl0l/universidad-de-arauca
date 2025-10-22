import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NewsCard.module.css';

/**
 * @interface INewsCardProps
 * @property {string} title - The title of the news item.
 * @property {string} description - A brief description of the news item.
 * @property {string} imageUrl - The URL of the image for the news item.
 */
interface INewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

/**
 * NewsCard component displays a single news item.
 * @param {INewsCardProps} props - The properties for the NewsCard component.
 * @returns {JSX.Element} The rendered NewsCard component.
 */
const NewsCard: React.FC<INewsCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.newsImageContainer}>
        <img src={imageUrl} alt={title} className={styles.newsImage} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to="/noticias" className={styles.readMore}>Leer más</Link>
      </div>
    </div>
  );
};

export default NewsCard;