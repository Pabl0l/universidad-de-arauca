import React from 'react';
import styles from './SobreLaUniversidadPage.module.css';

/**
 * @typedef {object} SobreLaUniversidadPageProps
 */

/**
 * SobreLaUniversidad page component.
 * @param {SobreLaUniversidadPageProps} props - The properties for the SobreLaUniversidadPage component.
 * @returns {JSX.Element} The rendered SobreLaUniversidadPage component.
 */
const SobreLaUniversidadPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className="pageHeaderBox">
        <h1>Sobre la Universidad de Arauca</h1>
        <p>Conoce nuestra historia, misión, visión y valores.</p>
      </header>

      <section className={styles.section}>
        <h2>Historia Institucional</h2>
        <p>
          Fundada el 13 de octubre de 2025, la Universidad de Arauca (UNAR) nació como una iniciativa ciudadana en el marco de la construcción de paz.
          Excombatientes, líderes sociales y campesinos participaron en la creación de la universidad como símbolo de reconciliación.
        </p>
        <p>
          El ingeniero Alfredo Cordero, primer rector, promovió una institución que combinara la excelencia académica con el desarrollo sostenible y el orgullo cultural llanero.
        </p>
        <p>
          Actualmente, la UNAR se proyecta como modelo de educación para la paz, integrando ciencia, tecnología y cultura al servicio del oriente colombiano.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Misión</h2>
        <p>
          Formar profesionales íntegros comprometidos con la transformación social, la sostenibilidad ambiental y la construcción de paz en la región de la Orinoquía.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Visión</h2>
        <p>
          En 2040, la Universidad de Arauca será reconocida nacional e internacionalmente como una institución líder en innovación social, desarrollo agroindustrial y cultura de paz.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Valores Institucionales</h2>
        <ul className={styles.valuesList}>
          <li><strong>Paz:</strong> La educación como herramienta de reconciliación.</li>
          <li><strong>Respeto:</strong> Diversidad humana, cultural y ambiental.</li>
          <li><strong>Solidaridad:</strong> Cooperación entre comunidades.</li>
          <li><strong>Innovación:</strong> Soluciones creativas a los desafíos regionales.</li>
          <li><strong>Transparencia:</strong> Honestidad y responsabilidad pública.</li>
          <li><strong>Identidad:</strong> Orgullo llanero como motor de transformación.</li>
        </ul>
      </section>
    </div>
  );
};

export default SobreLaUniversidadPage;
