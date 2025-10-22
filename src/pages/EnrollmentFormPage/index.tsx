import React from 'react';
import styles from './EnrollmentFormPage.module.css';

const EnrollmentFormPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className="pageHeaderBox">
        <h1>Formulario de Inscripción</h1>
        <p>Completa el siguiente formulario para iniciar tu proceso de admisión en la UNAR.</p>
      </header>

      <form className={styles.enrollmentForm}>
        {/* Sección 1: Datos Personales Básicos */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>1. Datos Personales Básicos</legend>
          <div className={styles.bentoGrid}>
            <div className={styles.formGroup}>
              <input type="text" id="nombres" name="nombres" className={styles.formInput} placeholder=" " required />
              <label htmlFor="nombres" className={styles.formLabel}>Nombres</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="apellidos" name="apellidos" className={styles.formInput} placeholder=" " required />
              <label htmlFor="apellidos" className={styles.formLabel}>Apellidos</label>
            </div>
            <div className={styles.formGroup}>
              <select id="tipoDocumento" name="tipoDocumento" className={styles.formSelect} required defaultValue="">
                <option value="" disabled>Seleccione</option>
                <option value="DNI">DNI</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="Cedula">Cédula</option>
              </select>
              <label htmlFor="tipoDocumento" className={styles.formLabel}>Tipo de Documento</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="numeroDocumento" name="numeroDocumento" className={styles.formInput} placeholder=" " required />
              <label htmlFor="numeroDocumento" className={styles.formLabel}>Número de Documento</label>
            </div>
            <div className={styles.formGroup}>
              <input type="date" id="fechaNacimiento" name="fechaNacimiento" className={styles.formInput} required />
              <label htmlFor="fechaNacimiento" className={styles.formLabel}>Fecha de Nacimiento</label>
            </div>
            <div className={styles.formGroup}>
              <select id="genero" name="genero" className={styles.formSelect} required defaultValue="">
                <option value="" disabled>Seleccione</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
              <label htmlFor="genero" className={styles.formLabel}>Género</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="nacionalidad" name="nacionalidad" className={styles.formInput} placeholder=" " required />
              <label htmlFor="nacionalidad" className={styles.formLabel}>Nacionalidad</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="paisNacimiento" name="paisNacimiento" className={styles.formInput} placeholder=" " required />
              <label htmlFor="paisNacimiento" className={styles.formLabel}>País de Nacimiento</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="provinciaNacimiento" name="provinciaNacimiento" className={styles.formInput} placeholder=" " />
              <label htmlFor="provinciaNacimiento" className={styles.formLabel}>Provincia/Estado de Nacimiento</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="ciudadNacimiento" name="ciudadNacimiento" className={styles.formInput} placeholder=" " required />
              <label htmlFor="ciudadNacimiento" className={styles.formLabel}>Ciudad de Nacimiento</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="cuilCuit" name="cuilCuit" className={styles.formInput} placeholder=" " />
              <label htmlFor="cuilCuit" className={styles.formLabel}>Número de CUIL/CUIT</label>
            </div>
          </div>
        </fieldset>

        {/* Sección 2: Información de Contacto */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>2. Información de Contacto</legend>
          <div className={styles.bentoGrid}>
            <div className={styles.formGroup}>
              <input type="text" id="calle" name="calle" className={styles.formInput} placeholder=" " required />
              <label htmlFor="calle" className={styles.formLabel}>Calle</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="numero" name="numero" className={styles.formInput} placeholder=" " required />
              <label htmlFor="numero" className={styles.formLabel}>Número</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="piso" name="piso" className={styles.formInput} placeholder=" " />
              <label htmlFor="piso" className={styles.formLabel}>Piso</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="departamento" name="departamento" className={styles.formInput} placeholder=" " />
              <label htmlFor="departamento" className={styles.formLabel}>Departamento</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="codigoPostal" name="codigoPostal" className={styles.formInput} placeholder=" " required />
              <label htmlFor="codigoPostal" className={styles.formLabel}>Código Postal</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="ciudad" name="ciudad" className={styles.formInput} placeholder=" " required />
              <label htmlFor="ciudad" className={styles.formLabel}>Ciudad</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="provincia" name="provincia" className={styles.formInput} placeholder=" " required />
              <label htmlFor="provincia" className={styles.formLabel}>Provincia</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="pais" name="pais" className={styles.formInput} placeholder=" " required />
              <label htmlFor="pais" className={styles.formLabel}>País</label>
            </div>
            <div className={styles.formGroup}>
              <input type="tel" id="telefonoFijo" name="telefonoFijo" className={styles.formInput} placeholder=" " />
              <label htmlFor="telefonoFijo" className={styles.formLabel}>Teléfono Fijo</label>
            </div>
            <div className={styles.formGroup}>
              <input type="tel" id="telefonoMovil" name="telefonoMovil" className={styles.formInput} placeholder=" " required />
              <label htmlFor="telefonoMovil" className={styles.formLabel}>Teléfono/Celular Móvil</label>
            </div>
            <div className={styles.formGroup}>
              <input type="email" id="emailPrincipal" name="emailPrincipal" className={styles.formInput} placeholder=" " required />
              <label htmlFor="emailPrincipal" className={styles.formLabel}>Correo Electrónico Principal</label>
            </div>
            <div className={styles.formGroup}>
              <input type="email" id="emailSecundario" name="emailSecundario" className={styles.formInput} placeholder=" " />
              <label htmlFor="emailSecundario" className={styles.formLabel}>Correo Electrónico Secundario</label>
            </div>
          </div>
        </fieldset>

        {/* Sección 3: Datos Académicos y de la Solicitud */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>3. Datos Académicos y de la Solicitud</legend>
          <div className={styles.bentoGrid}>
            <div className={styles.formGroup}>
              <select id="carreraInteres" name="carreraInteres" className={styles.formSelect} required defaultValue="">
                <option value="" disabled>Seleccione una carrera</option>
                {/* Opciones de carrera se cargarían dinámicamente */}
                <option value="Ingenieria de Sistemas">Ingeniería de Sistemas</option>
                <option value="Licenciatura en Artes">Licenciatura en Artes</option>
                <option value="Medicina">Medicina</option>
              </select>
              <label htmlFor="carreraInteres" className={styles.formLabel}>Carrera o Programa de Interés</label>
            </div>
            <div className={styles.formGroup}>
              <select id="turnoPreferencia" name="turnoPreferencia" className={styles.formSelect} defaultValue="">
                <option value="" disabled>Seleccione</option>
                <option value="Mañana">Mañana</option>
                <option value="Tarde">Tarde</option>
                <option value="Noche">Noche</option>
              </select>
              <label htmlFor="turnoPreferencia" className={styles.formLabel}>Turno de Preferencia</label>
            </div>
            <div className={styles.formGroup}>
              <select id="modalidad" name="modalidad" className={styles.formSelect} required defaultValue="">
                <option value="" disabled>Seleccione</option>
                <option value="Presencial">Presencial</option>
                <option value="Hibrida">Híbrida</option>
                <option value="Virtual">Virtual</option>
              </select>
              <label htmlFor="modalidad" className={styles.formLabel}>Modalidad</label>
            </div>
            <div className={styles.formGroup}>
              <input type="number" id="anioIngresoPrevisto" name="anioIngresoPrevisto" min="2024" max="2030" className={styles.formInput} placeholder=" " required />
              <label htmlFor="anioIngresoPrevisto" className={styles.formLabel}>Año de Ingreso Previsto</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="cicloPeriodoIngreso" name="cicloPeriodoIngreso" className={styles.formInput} placeholder=" " required />
              <label htmlFor="cicloPeriodoIngreso" className={styles.formLabel}>Ciclo/Periodo de Ingreso</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="tituloSecundario" name="tituloSecundario" className={styles.formInput} placeholder=" " required />
              <label htmlFor="tituloSecundario" className={styles.formLabel}>Título Secundario Obtenido</label>
            </div>
            <div className={styles.formGroup}>
              <input type="number" id="promedioNotas" name="promedioNotas" step="0.01" min="1" max="10" className={styles.formInput} placeholder=" " />
              <label htmlFor="promedioNotas" className={styles.formLabel}>Promedio de Notas de la Educación Media</label>
            </div>
          </div>
        </fieldset>

        {/* Sección 4: Información Educativa Previa */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>4. Información Educativa Previa</legend>
          <div className={styles.bentoGrid}>
            <div className={styles.formGroup}>
              <input type="text" id="nombreInstitucionSecundaria" name="nombreInstitucionSecundaria" className={styles.formInput} placeholder=" " required />
              <label htmlFor="nombreInstitucionSecundaria" className={styles.formLabel}>Nombre de la Institución Secundaria</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="paisInstitucion" name="paisInstitucion" className={styles.formInput} placeholder=" " required />
              <label htmlFor="paisInstitucion" className={styles.formLabel}>País de la Institución</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="provinciaInstitucion" name="provinciaInstitucion" className={styles.formInput} placeholder=" " />
              <label htmlFor="provinciaInstitucion" className={styles.formLabel}>Provincia de la Institución</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="ciudadInstitucion" name="ciudadInstitucion" className={styles.formInput} placeholder=" " required />
              <label htmlFor="ciudadInstitucion" className={styles.formLabel}>Ciudad de la Institución</label>
            </div>
            <div className={styles.formGroup}>
              <input type="number" id="anioEgreso" name="anioEgreso" min="1900" max="2030" className={styles.formInput} placeholder=" " required />
              <label htmlFor="anioEgreso" className={styles.formLabel}>Año de Egreso / Finalización</label>
            </div>
            <div className={styles.formGroup}>
              <select id="situacionActual" name="situacionActual" className={styles.formSelect} required defaultValue="">
                <option value="" disabled>Seleccione</option>
                <option value="Egresado">Egresado</option>
                <option value="Cursando ultimo año">Cursando el último año</option>
                <option value="Abandono">Abandonó</option>
              </select>
              <label htmlFor="situacionActual" className={styles.formLabel}>Situación Actual</label>
            </div>
          </div>
        </fieldset>

        {/* Sección 5: Datos de Salud y Emergencias */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>5. Datos de Salud y Emergencias</legend>
          <div className={styles.bentoGrid}>
            <div className={styles.formGroup}>
              <select id="grupoSanguineo" name="grupoSanguineo" className={styles.formSelect} defaultValue="">
                <option value="" disabled>Seleccione</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              <label htmlFor="grupoSanguineo" className={styles.formLabel}>Grupo Sanguíneo</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="coberturaSalud" name="coberturaSalud" className={styles.formInput} placeholder=" " />
              <label htmlFor="coberturaSalud" className={styles.formLabel}>Cobertura de Salud / Obra Social</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="numeroAfiliado" name="numeroAfiliado" className={styles.formInput} placeholder=" " />
              <label htmlFor="numeroAfiliado" className={styles.formLabel}>Número de Afiliado</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="contactoEmergenciaNombre" name="contactoEmergenciaNombre" className={styles.formInput} placeholder=" " required />
              <label htmlFor="contactoEmergenciaNombre" className={styles.formLabel}>Nombre Contacto de Emergencia</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="contactoEmergenciaApellido" name="contactoEmergenciaApellido" className={styles.formInput} placeholder=" " required />
              <label htmlFor="contactoEmergenciaApellido" className={styles.formLabel}>Apellido Contacto de Emergencia</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="contactoEmergenciaParentesco" name="contactoEmergenciaParentesco" className={styles.formInput} placeholder=" " required />
              <label htmlFor="contactoEmergenciaParentesco" className={styles.formLabel}>Parentesco Contacto de Emergencia</label>
            </div>
            <div className={styles.formGroup}>
              <input type="tel" id="contactoEmergenciaTelefono" name="contactoEmergenciaTelefono" className={styles.formInput} placeholder=" " required />
              <label htmlFor="contactoEmergenciaTelefono" className={styles.formLabel}>Teléfono Contacto de Emergencia</label>
            </div>
          </div>
        </fieldset>

        {/* Sección 6: Información Familiar */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>6. Información Familiar (Opcional)</legend>
          <div className={styles.bentoGrid}>
            <div className={styles.formGroup}>
              <input type="text" id="nombreMadre" name="nombreMadre" className={styles.formInput} placeholder=" " />
              <label htmlFor="nombreMadre" className={styles.formLabel}>Nombre de la Madre</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="apellidoMadre" name="apellidoMadre" className={styles.formInput} placeholder=" " />
              <label htmlFor="apellidoMadre" className={styles.formLabel}>Apellido de la Madre</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="nombrePadre" name="nombrePadre" className={styles.formInput} placeholder=" " />
              <label htmlFor="nombrePadre" className={styles.formLabel}>Nombre del Padre</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="apellidoPadre" name="apellidoPadre" className={styles.formInput} placeholder=" " />
              <label htmlFor="apellidoPadre" className={styles.formLabel}>Apellido del Padre</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="ocupacionPadres" name="ocupacionPadres" className={styles.formInput} placeholder=" " />
              <label htmlFor="ocupacionPadres" className={styles.formLabel}>Ocupación de los Padres</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="nivelEducativoPadres" name="nivelEducativoPadres" className={styles.formInput} placeholder=" " />
              <label htmlFor="nivelEducativoPadres" className={styles.formLabel}>Nivel Educativo de los Padres</label>
            </div>
          </div>
        </fieldset>

        {/* Sección 7: Configuración de la Cuenta y Seguridad */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>7. Configuración de la Cuenta y Seguridad</legend>
          <div className={styles.bentoGrid}>
            <div className={styles.formGroup}>
              <input type="text" id="nombreUsuario" name="nombreUsuario" className={styles.formInput} placeholder=" " />
              <label htmlFor="nombreUsuario" className={styles.formLabel}>Nombre de Usuario</label>
            </div>
            <div className={styles.formGroup}>
              <input type="password" id="contrasena" name="contrasena" className={styles.formInput} placeholder=" " required />
              <label htmlFor="contrasena" className={styles.formLabel}>Contraseña</label>
            </div>
            <div className={styles.formGroup}>
              <input type="password" id="confirmarContrasena" name="confirmarContrasena" className={styles.formInput} placeholder=" " required />
              <label htmlFor="confirmarContrasena" className={styles.formLabel}>Confirmar Contraseña</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="preguntaSeguridad" name="preguntaSeguridad" className={styles.formInput} placeholder=" " />
              <label htmlFor="preguntaSeguridad" className={styles.formLabel}>Pregunta de Seguridad</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="respuestaSeguridad" name="respuestaSeguridad" className={styles.formInput} placeholder=" " />
              <label htmlFor="respuestaSeguridad" className={styles.formLabel}>Respuesta de Seguridad</label>
            </div>
          </div>
        </fieldset>

        <button type="submit" className={styles.submitButton}>Enviar Inscripción</button>
      </form>
    </div>
  );
};

export default EnrollmentFormPage;