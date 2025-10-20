import React from 'react';
import styles from './EnrollmentFormPage.module.css';

const EnrollmentFormPage: React.FC = () => {
  return (
    <div className={styles.enrollmentFormPage}>
      <h1 className={styles.title}>Formulario de Inscripción</h1>
      <form className={styles.enrollmentForm}>
        {/* Sección 1: Datos Personales Básicos */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>1. Datos Personales Básicos</legend>
          <div className={styles.bentoGrid}>
            <div className={styles.formGroup}>
              <input type="text" id="nombres" name="nombres" placeholder=" " required />
              <label htmlFor="nombres">Nombres</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="apellidos" name="apellidos" placeholder=" " required />
              <label htmlFor="apellidos">Apellidos</label>
            </div>
            <div className={styles.formGroup}>
              <select id="tipoDocumento" name="tipoDocumento" required>
                <option value="" disabled selected>Seleccione</option>
                <option value="DNI">DNI</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="Cedula">Cédula</option>
              </select>
              <label htmlFor="tipoDocumento">Tipo de Documento</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="numeroDocumento" name="numeroDocumento" placeholder=" " required />
              <label htmlFor="numeroDocumento">Número de Documento</label>
            </div>
            <div className={styles.formGroup}>
              <input type="date" id="fechaNacimiento" name="fechaNacimiento" required />
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
            </div>
            <div className={styles.formGroup}>
              <select id="genero" name="genero" required>
                <option value="" disabled selected>Seleccione</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
              <label htmlFor="genero">Género</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="nacionalidad" name="nacionalidad" placeholder=" " required />
              <label htmlFor="nacionalidad">Nacionalidad</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="paisNacimiento" name="paisNacimiento" placeholder=" " required />
              <label htmlFor="paisNacimiento">País de Nacimiento</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="provinciaNacimiento" name="provinciaNacimiento" placeholder=" " />
              <label htmlFor="provinciaNacimiento">Provincia/Estado de Nacimiento</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="ciudadNacimiento" name="ciudadNacimiento" placeholder=" " required />
              <label htmlFor="ciudadNacimiento">Ciudad de Nacimiento</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="cuilCuit" name="cuilCuit" placeholder=" " />
              <label htmlFor="cuilCuit">Número de CUIL/CUIT</label>
            </div>
          </div>
        </fieldset>

        {/* Sección 2: Información de Contacto */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>2. Información de Contacto</legend>
          <div className={styles.bentoGrid}>
            <div className={styles.formGroup}>
              <input type="text" id="calle" name="calle" placeholder=" " required />
              <label htmlFor="calle">Calle</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="numero" name="numero" placeholder=" " required />
              <label htmlFor="numero">Número</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="piso" name="piso" placeholder=" " />
              <label htmlFor="piso">Piso</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="departamento" name="departamento" placeholder=" " />
              <label htmlFor="departamento">Departamento</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="codigoPostal" name="codigoPostal" placeholder=" " required />
              <label htmlFor="codigoPostal">Código Postal</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="ciudad" name="ciudad" placeholder=" " required />
              <label htmlFor="ciudad">Ciudad</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="provincia" name="provincia" placeholder=" " required />
              <label htmlFor="provincia">Provincia</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="pais" name="pais" placeholder=" " required />
              <label htmlFor="pais">País</label>
            </div>
            <div className={styles.formGroup}>
              <input type="tel" id="telefonoFijo" name="telefonoFijo" placeholder=" " />
              <label htmlFor="telefonoFijo">Teléfono Fijo</label>
            </div>
            <div className={styles.formGroup}>
              <input type="tel" id="telefonoMovil" name="telefonoMovil" placeholder=" " required />
              <label htmlFor="telefonoMovil">Teléfono/Celular Móvil</label>
            </div>
            <div className={styles.formGroup}>
              <input type="email" id="emailPrincipal" name="emailPrincipal" placeholder=" " required />
              <label htmlFor="emailPrincipal">Correo Electrónico Principal</label>
            </div>
            <div className={styles.formGroup}>
              <input type="email" id="emailSecundario" name="emailSecundario" placeholder=" " />
              <label htmlFor="emailSecundario">Correo Electrónico Secundario</label>
            </div>
          </div>
        </fieldset>

        {/* Sección 3: Datos Académicos y de la Solicitud */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>3. Datos Académicos y de la Solicitud</legend>
          <div className={styles.bentoGrid}>
            <div className={styles.formGroup}>
              <select id="carreraInteres" name="carreraInteres" required>
                <option value="" disabled selected>Seleccione una carrera</option>
                {/* Opciones de carrera se cargarían dinámicamente */}
                <option value="Ingenieria de Sistemas">Ingeniería de Sistemas</option>
                <option value="Licenciatura en Artes">Licenciatura en Artes</option>
                <option value="Medicina">Medicina</option>
              </select>
              <label htmlFor="carreraInteres">Carrera o Programa de Interés</label>
            </div>
            <div className={styles.formGroup}>
              <select id="turnoPreferencia" name="turnoPreferencia">
                <option value="" disabled selected>Seleccione</option>
                <option value="Mañana">Mañana</option>
                <option value="Tarde">Tarde</option>
                <option value="Noche">Noche</option>
              </select>
              <label htmlFor="turnoPreferencia">Turno de Preferencia</label>
            </div>
            <div className={styles.formGroup}>
              <select id="modalidad" name="modalidad" required>
                <option value="" disabled selected>Seleccione</option>
                <option value="Presencial">Presencial</option>
                <option value="Hibrida">Híbrida</option>
                <option value="Virtual">Virtual</option>
              </select>
              <label htmlFor="modalidad">Modalidad</label>
            </div>
            <div className={styles.formGroup}>
              <input type="number" id="anioIngresoPrevisto" name="anioIngresoPrevisto" min="2024" max="2030" placeholder=" " required />
              <label htmlFor="anioIngresoPrevisto">Año de Ingreso Previsto</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="cicloPeriodoIngreso" name="cicloPeriodoIngreso" placeholder=" " required />
              <label htmlFor="cicloPeriodoIngreso">Ciclo/Periodo de Ingreso</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="tituloSecundario" name="tituloSecundario" placeholder=" " required />
              <label htmlFor="tituloSecundario">Título Secundario Obtenido</label>
            </div>
            <div className={styles.formGroup}>
              <input type="number" id="promedioNotas" name="promedioNotas" step="0.01" min="1" max="10" placeholder=" " />
              <label htmlFor="promedioNotas">Promedio de Notas de la Educación Media</label>
            </div>
          </div>
        </fieldset>

        {/* Sección 4: Información Educativa Previa */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>4. Información Educativa Previa</legend>
          <div className={styles.bentoGrid}>
            <div className={styles.formGroup}>
              <input type="text" id="nombreInstitucionSecundaria" name="nombreInstitucionSecundaria" placeholder=" " required />
              <label htmlFor="nombreInstitucionSecundaria">Nombre de la Institución Secundaria</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="paisInstitucion" name="paisInstitucion" placeholder=" " required />
              <label htmlFor="paisInstitucion">País de la Institución</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="provinciaInstitucion" name="provinciaInstitucion" placeholder=" " />
              <label htmlFor="provinciaInstitucion">Provincia de la Institución</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="ciudadInstitucion" name="ciudadInstitucion" placeholder=" " required />
              <label htmlFor="ciudadInstitucion">Ciudad de la Institución</label>
            </div>
            <div className={styles.formGroup}>
              <input type="number" id="anioEgreso" name="anioEgreso" min="1900" max="2030" placeholder=" " required />
              <label htmlFor="anioEgreso">Año de Egreso / Finalización</label>
            </div>
            <div className={styles.formGroup}>
              <select id="situacionActual" name="situacionActual" required>
                <option value="" disabled selected>Seleccione</option>
                <option value="Egresado">Egresado</option>
                <option value="Cursando ultimo año">Cursando el último año</option>
                <option value="Abandono">Abandonó</option>
              </select>
              <label htmlFor="situacionActual">Situación Actual</label>
            </div>
          </div>
        </fieldset>

        {/* Sección 5: Datos de Salud y Emergencias */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>5. Datos de Salud y Emergencias</legend>
          <div className={styles.bentoGrid}>
            <div className={styles.formGroup}>
              <select id="grupoSanguineo" name="grupoSanguineo">
                <option value="" disabled selected>Seleccione</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              <label htmlFor="grupoSanguineo">Grupo Sanguíneo</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="coberturaSalud" name="coberturaSalud" placeholder=" " />
              <label htmlFor="coberturaSalud">Cobertura de Salud / Obra Social</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="numeroAfiliado" name="numeroAfiliado" placeholder=" " />
              <label htmlFor="numeroAfiliado">Número de Afiliado</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="contactoEmergenciaNombre" name="contactoEmergenciaNombre" placeholder=" " required />
              <label htmlFor="contactoEmergenciaNombre">Nombre Contacto de Emergencia</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="contactoEmergenciaApellido" name="contactoEmergenciaApellido" placeholder=" " required />
              <label htmlFor="contactoEmergenciaApellido">Apellido Contacto de Emergencia</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="contactoEmergenciaParentesco" name="contactoEmergenciaParentesco" placeholder=" " required />
              <label htmlFor="contactoEmergenciaParentesco">Parentesco Contacto de Emergencia</label>
            </div>
            <div className={styles.formGroup}>
              <input type="tel" id="contactoEmergenciaTelefono" name="contactoEmergenciaTelefono" placeholder=" " required />
              <label htmlFor="contactoEmergenciaTelefono">Teléfono Contacto de Emergencia</label>
            </div>
          </div>
        </fieldset>

        {/* Sección 6: Información Familiar */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>6. Información Familiar (Opcional)</legend>
          <div className={styles.bentoGrid}>
            <div className={styles.formGroup}>
              <input type="text" id="nombreMadre" name="nombreMadre" placeholder=" " />
              <label htmlFor="nombreMadre">Nombre de la Madre</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="apellidoMadre" name="apellidoMadre" placeholder=" " />
              <label htmlFor="apellidoMadre">Apellido de la Madre</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="nombrePadre" name="nombrePadre" placeholder=" " />
              <label htmlFor="nombrePadre">Nombre del Padre</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="apellidoPadre" name="apellidoPadre" placeholder=" " />
              <label htmlFor="apellidoPadre">Apellido del Padre</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="ocupacionPadres" name="ocupacionPadres" placeholder=" " />
              <label htmlFor="ocupacionPadres">Ocupación de los Padres</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="nivelEducativoPadres" name="nivelEducativoPadres" placeholder=" " />
              <label htmlFor="nivelEducativoPadres">Nivel Educativo de los Padres</label>
            </div>
          </div>
        </fieldset>

        {/* Sección 7: Configuración de la Cuenta y Seguridad */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>7. Configuración de la Cuenta y Seguridad</legend>
          <div className={styles.bentoGrid}>
            <div className={styles.formGroup}>
              <input type="text" id="nombreUsuario" name="nombreUsuario" placeholder=" " />
              <label htmlFor="nombreUsuario">Nombre de Usuario</label>
            </div>
            <div className={styles.formGroup}>
              <input type="password" id="contrasena" name="contrasena" placeholder=" " required />
              <label htmlFor="contrasena">Contraseña</label>
            </div>
            <div className={styles.formGroup}>
              <input type="password" id="confirmarContrasena" name="confirmarContrasena" placeholder=" " required />
              <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="preguntaSeguridad" name="preguntaSeguridad" placeholder=" " />
              <label htmlFor="preguntaSeguridad">Pregunta de Seguridad</label>
            </div>
            <div className={styles.formGroup}>
              <input type="text" id="respuestaSeguridad" name="respuestaSeguridad" placeholder=" " />
              <label htmlFor="respuestaSeguridad">Respuesta de Seguridad</label>
            </div>
          </div>
        </fieldset>

        <button type="submit" className={styles.submitButton}>Enviar Inscripción</button>
      </form>
    </div>
  );
};

export default EnrollmentFormPage;