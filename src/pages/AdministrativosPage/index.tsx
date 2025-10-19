import React, { useState, useRef } from 'react';
import styles from './AdministrativosPage.module.css';

interface Member {
  name: string;
  position?: string;
  faculty?: string;
  image: string | null;
}

const AdministrativosPage: React.FC = () => {
  const directivos: Member[] = [
    { name: 'Ing. Alfredo Cordero', position: 'Rector', image: 'alfredo.webp' },
    { name: 'Sofía Mendoza', position: 'Vicerrector Académico', image: 'sofia.webp' },
    { name: 'Jairo Moreno', position: 'Vicerrector Administrativo', image: 'jairo.webp' },
  ];

  const decanos: Member[] = [
    { name: 'Dr. Manuel Parra', faculty: 'Ingeniería', image: 'manuel.webp' },
    { name: 'Mg. Andrés Contreras', faculty: 'Artes', image: 'andres.webp' },
    { name: 'Dr. Vanessa Rodríguez', faculty: 'Ciencias de la Salud', image: 'vanessa.webp' },
    { name: 'Dr. Nicolás Torres', faculty: 'Ciencias Sociales y Jurídicas', image: 'nicolas.webp' },
    { name: 'Dr. Wadeth Mendoza', faculty: 'Educación y Ciencias Básicas', image: 'wadeth.webp' },
  ];

  const [activeMember, setActiveMember] = useState<Member>(directivos[0]);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMemberClick = (member: Member) => {
    if (member.image) {
      setActiveMember(member);
      if (window.innerWidth < 769) {
        imageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleMemberHover = (member: Member) => {
    if (member.image) {
      setActiveMember(member);
    }
  };

  return (
    <div className={styles.container}>
      <header className="pageHeaderBox">
        <h1>Información Administrativa</h1>
        <p>Conoce la estructura jerárquica, contactos y correos de interés de la Universidad de Arauca.</p>
      </header>

      <div className={styles.bentoGrid}>
        <section className={`${styles.bentoBox} ${styles.spanTwoColumns}`}>
          <h2>Estructura Jerárquica</h2>
          <p>Conoce a los líderes que guían nuestra institución:</p>
          <ul className={styles.hierarchyList}>
            {directivos.map((directivo) => (
              <li
                key={directivo.name}
                onMouseEnter={() => handleMemberHover(directivo)}
                onClick={() => handleMemberClick(directivo)}
                className={activeMember.name === directivo.name ? styles.active : ''}>
                <strong>{directivo.position}:</strong> {directivo.name}
              </li>
            ))}
          </ul>
          <h3>Facultades y Decanos:</h3>
          <ul className={styles.facultyList}>
            {decanos.map((decano) => (
              <li
                key={decano.name}
                onMouseEnter={() => handleMemberHover(decano)}
                onClick={() => handleMemberClick(decano)}
                className={activeMember.name === decano.name ? styles.active : ''}>
                <strong>{decano.faculty}:</strong> {decano.name}
              </li>
            ))}
          </ul>
        </section>

        <section ref={imageRef} className={`${styles.bentoBox} ${styles.imageContainer}`}>
          {activeMember.image && (
            <img src={`/images/${activeMember.image}`} alt={activeMember.name} />
          )}
          <div className={styles.imageBanner}>{activeMember.name}</div>
        </section>

        <div className={`${styles.spanThreeColumns} ${styles.subGrid}`}>
            <section className={styles.bentoBox}>
                <h2>Correos de Interés</h2>
                <p>Aquí encontrarás una lista de correos electrónicos importantes para la comunidad universitaria:</p>
                <ul className={styles.contactList}>
                    <li><strong>Admisiones:</strong> admisiones@unar.edu.co</li>
                    <li><strong>Secretaría Académica:</strong> secretaria.academica@unar.edu.co</li>
                    <li><strong>Soporte Técnico:</strong> soporte@unar.edu.co</li>
                    <li><strong>Bienestar Universitario:</strong> bienestar@unar.edu.co</li>
                </ul>
            </section>

            <section className={styles.bentoBox}>
                <h2>Directorio Telefónico</h2>
                <p>Números de contacto de las principales dependencias:</p>
                <ul className={styles.contactList}>
                    <li><strong>Central Telefónica:</strong> +57 (607) 888 8888</li>
                    <li><strong>Admisiones:</strong> +57 (607) 888 8889</li>
                    <li><strong>Biblioteca:</strong> +57 (607) 888 8890</li>
                </ul>
            </section>
        </div>
      </div>
    </div>
  );
};

export default AdministrativosPage;