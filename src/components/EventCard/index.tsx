import React from 'react';
import styles from './EventCard.module.css';

/**
 * @interface IEventCardProps
 * @property {string} date - The date of the event.
 * @property {string} title - The title of the event.
 * @property {string} description - A brief description of the event.
 */
interface IEventCardProps {
  date: string;
  title: string;
  description: string;
}

/**
 * EventCard component displays a single event item.
 * @param {IEventCardProps} props - The properties for the EventCard component.
 * @returns {JSX.Element} The rendered EventCard component.
 */
const EventCard: React.FC<IEventCardProps> = ({ date, title, description }) => {
  return (
    <div className={styles.card}>
      <p className={styles.date}>{date}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className={styles.details}>Ver detalles</a>
    </div>
  );
};

export default EventCard;
