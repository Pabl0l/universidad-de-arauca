import React, { useState } from 'react';
import { FormField } from '../../components';
import styles from './EnrollmentFormPage.module.css';

const EnrollmentFormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    tipoDocumento: '',
    numeroDocumento: '',
    fechaNacimiento: '',
    genero: '',
    nacionalidad: '',
    paisNacimiento: '',
    provinciaNacimiento: '',
    ciudadNacimiento: '',
    cuilCuit: '',
    calle: '',
    numero: '',
    piso: '',
    departamento: '',
    codigoPostal: '',
    ciudad: '',
    provincia: '',
    pais: '',
    telefonoFijo: '',
    telefonoMovil: '',
    emailPrincipal: '',
    emailSecundario: '',
    carreraInteres: '',
    turnoPreferencia: '',
    modalidad: '',
    anioIngresoPrevisto: '',
    cicloPeriodoIngreso: '',
    tituloSecundario: '',
    promedioNotas: '',
    nombreInstitucionSecundaria: '',
    paisInstitucion: '',
    provinciaInstitucion: '',
    ciudadInstitucion: '',
    anioEgreso: '',
    situacionActual: '',
    grupoSanguineo: '',
    coberturaSalud: '',
    numeroAfiliado: '',
    contactoEmergenciaNombre: '',
    contactoEmergenciaApellido: '',
    contactoEmergenciaParentesco: '',
    contactoEmergenciaTelefono: '',
    nombreMadre: '',
    apellidoMadre: '',
    nombrePadre: '',
    apellidoPadre: '',
    ocupacionPadres: '',
    nivelEducativoPadres: '',
    nombreUsuario: '',
    contrasena: '',
    confirmarContrasena: '',
    preguntaSeguridad: '',
    respuestaSeguridad: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
            <FormField id="nombres" name="nombres" label="Nombres" required value={formData.nombres} onChange={handleChange} />
            <FormField id="apellidos" name="apellidos" label="Apellidos" required value={formData.apellidos} onChange={handleChange} />
            <FormField
              id="tipoDocumento"
              name="tipoDocumento"
              label="Tipo de Documento"
              type="select"
              required
              options={[
                { value: 'DNI', label: 'DNI' },
                { value: 'Pasaporte', label: 'Pasaporte' },
                { value: 'Cedula', label: 'Cédula' },
              ]}
              value={formData.tipoDocumento}
              onChange={handleChange}
            />
            <FormField id="numeroDocumento" name="numeroDocumento" label="Número de Documento" required value={formData.numeroDocumento} onChange={handleChange} />
            <FormField id="fechaNacimiento" name="fechaNacimiento" label="Fecha de Nacimiento" type="date" required value={formData.fechaNacimiento} onChange={handleChange} />
            <FormField
              id="genero"
              name="genero"
              label="Género"
              type="select"
              required
              options={[
                { value: 'Masculino', label: 'Masculino' },
                { value: 'Femenino', label: 'Femenino' },
                { value: 'Otro', label: 'Otro' },
              ]}
              value={formData.genero}
              onChange={handleChange}
            />
            <FormField id="nacionalidad" name="nacionalidad" label="Nacionalidad" required value={formData.nacionalidad} onChange={handleChange} />
            <FormField id="paisNacimiento" name="paisNacimiento" label="País de Nacimiento" required value={formData.paisNacimiento} onChange={handleChange} />
            <FormField id="provinciaNacimiento" name="provinciaNacimiento" label="Provincia/Estado de Nacimiento" value={formData.provinciaNacimiento} onChange={handleChange} />
            <FormField id="ciudadNacimiento" name="ciudadNacimiento" label="Ciudad de Nacimiento" required value={formData.ciudadNacimiento} onChange={handleChange} />
            <FormField id="cuilCuit" name="cuilCuit" label="Número de CUIL/CUIT" value={formData.cuilCuit} onChange={handleChange} />
          </div>
        </fieldset>

        {/* Sección 2: Información de Contacto */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>2. Información de Contacto</legend>
          <div className={styles.bentoGrid}>
            <FormField id="calle" name="calle" label="Calle" required value={formData.calle} onChange={handleChange} />
            <FormField id="numero" name="numero" label="Número" required value={formData.numero} onChange={handleChange} />
            <FormField id="piso" name="piso" label="Piso" value={formData.piso} onChange={handleChange} />
            <FormField id="departamento" name="departamento" label="Departamento" value={formData.departamento} onChange={handleChange} />
            <FormField id="codigoPostal" name="codigoPostal" label="Código Postal" required value={formData.codigoPostal} onChange={handleChange} />
            <FormField id="ciudad" name="ciudad" label="Ciudad" required value={formData.ciudad} onChange={handleChange} />
            <FormField id="provincia" name="provincia" label="Provincia" required value={formData.provincia} onChange={handleChange} />
            <FormField id="pais" name="pais" label="País" required value={formData.pais} onChange={handleChange} />
            <FormField id="telefonoFijo" name="telefonoFijo" label="Teléfono Fijo" type="tel" value={formData.telefonoFijo} onChange={handleChange} />
            <FormField id="telefonoMovil" name="telefonoMovil" label="Teléfono/Celular Móvil" type="tel" required value={formData.telefonoMovil} onChange={handleChange} />
            <FormField id="emailPrincipal" name="emailPrincipal" label="Correo Electrónico Principal" type="email" required value={formData.emailPrincipal} onChange={handleChange} />
            <FormField id="emailSecundario" name="emailSecundario" label="Correo Electrónico Secundario" type="email" value={formData.emailSecundario} onChange={handleChange} />
          </div>
        </fieldset>

        {/* Sección 3: Datos Académicos y de la Solicitud */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>3. Datos Académicos y de la Solicitud</legend>
          <div className={styles.bentoGrid}>
            <FormField
              id="carreraInteres"
              name="carreraInteres"
              label="Carrera o Programa de Interés"
              type="select"
              required
              options={[
                { value: 'Ingenieria de Sistemas', label: 'Ingeniería de Sistemas' },
                { value: 'Licenciatura en Artes', label: 'Licenciatura en Artes' },
                { value: 'Medicina', label: 'Medicina' },
              ]}
              value={formData.carreraInteres}
              onChange={handleChange}
            />
            <FormField
              id="turnoPreferencia"
              name="turnoPreferencia"
              label="Turno de Preferencia"
              type="select"
              options={[
                { value: 'Mañana', label: 'Mañana' },
                { value: 'Tarde', label: 'Tarde' },
                { value: 'Noche', label: 'Noche' },
              ]}
              value={formData.turnoPreferencia}
              onChange={handleChange}
            />
            <FormField
              id="modalidad"
              name="modalidad"
              label="Modalidad"
              type="select"
              required
              options={[
                { value: 'Presencial', label: 'Presencial' },
                { value: 'Hibrida', label: 'Híbrida' },
                { value: 'Virtual', label: 'Virtual' },
              ]}
              value={formData.modalidad}
              onChange={handleChange}
            />
            <FormField id="anioIngresoPrevisto" name="anioIngresoPrevisto" label="Año de Ingreso Previsto" type="number" required value={formData.anioIngresoPrevisto} onChange={handleChange} />
            <FormField id="cicloPeriodoIngreso" name="cicloPeriodoIngreso" label="Ciclo/Periodo de Ingreso" required value={formData.cicloPeriodoIngreso} onChange={handleChange} />
            <FormField id="tituloSecundario" name="tituloSecundario" label="Título Secundario Obtenido" required value={formData.tituloSecundario} onChange={handleChange} />
            <FormField id="promedioNotas" name="promedioNotas" label="Promedio de Notas de la Educación Media" type="number" value={formData.promedioNotas} onChange={handleChange} />
          </div>
        </fieldset>

        {/* Sección 4: Información Educativa Previa */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>4. Información Educativa Previa</legend>
          <div className={styles.bentoGrid}>
            <FormField id="nombreInstitucionSecundaria" name="nombreInstitucionSecundaria" label="Nombre de la Institución Secundaria" required value={formData.nombreInstitucionSecundaria} onChange={handleChange} />
            <FormField id="paisInstitucion" name="paisInstitucion" label="País de la Institución" required value={formData.paisInstitucion} onChange={handleChange} />
            <FormField id="provinciaInstitucion" name="provinciaInstitucion" label="Provincia de la Institución" value={formData.provinciaInstitucion} onChange={handleChange} />
            <FormField id="ciudadInstitucion" name="ciudadInstitucion" label="Ciudad de la Institución" required value={formData.ciudadInstitucion} onChange={handleChange} />
            <FormField id="anioEgreso" name="anioEgreso" label="Año de Egreso / Finalización" type="number" required value={formData.anioEgreso} onChange={handleChange} />
            <FormField
              id="situacionActual"
              name="situacionActual"
              label="Situación Actual"
              type="select"
              required
              options={[
                { value: 'Egresado', label: 'Egresado' },
                { value: 'Cursando ultimo año', label: 'Cursando el último año' },
                { value: 'Abandono', label: 'Abandonó' },
              ]}
              value={formData.situacionActual}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* Sección 5: Datos de Salud y Emergencias */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>5. Datos de Salud y Emergencias</legend>
          <div className={styles.bentoGrid}>
            <FormField
              id="grupoSanguineo"
              name="grupoSanguineo"
              label="Grupo Sanguíneo"
              type="select"
              options={[
                { value: 'A+', label: 'A+' },
                { value: 'A-', label: 'A-' },
                { value: 'B+', label: 'B+' },
                { value: 'B-', label: 'B-' },
                { value: 'AB+', label: 'AB+' },
                { value: 'AB-', label: 'AB-' },
                { value: 'O+', label: 'O+' },
                { value: 'O-', label: 'O-' },
              ]}
              value={formData.grupoSanguineo}
              onChange={handleChange}
            />
            <FormField id="coberturaSalud" name="coberturaSalud" label="Cobertura de Salud / Obra Social" value={formData.coberturaSalud} onChange={handleChange} />
            <FormField id="numeroAfiliado" name="numeroAfiliado" label="Número de Afiliado" value={formData.numeroAfiliado} onChange={handleChange} />
            <FormField id="contactoEmergenciaNombre" name="contactoEmergenciaNombre" label="Nombre Contacto de Emergencia" required value={formData.contactoEmergenciaNombre} onChange={handleChange} />
            <FormField id="contactoEmergenciaApellido" name="contactoEmergenciaApellido" label="Apellido Contacto de Emergencia" required value={formData.contactoEmergenciaApellido} onChange={handleChange} />
            <FormField id="contactoEmergenciaParentesco" name="contactoEmergenciaParentesco" label="Parentesco Contacto de Emergencia" required value={formData.contactoEmergenciaParentesco} onChange={handleChange} />
            <FormField id="contactoEmergenciaTelefono" name="contactoEmergenciaTelefono" label="Teléfono Contacto de Emergencia" type="tel" required value={formData.contactoEmergenciaTelefono} onChange={handleChange} />
          </div>
        </fieldset>

        {/* Sección 6: Información Familiar */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>6. Información Familiar (Opcional)</legend>
          <div className={styles.bentoGrid}>
            <FormField id="nombreMadre" name="nombreMadre" label="Nombre de la Madre" value={formData.nombreMadre} onChange={handleChange} />
            <FormField id="apellidoMadre" name="apellidoMadre" label="Apellido de la Madre" value={formData.apellidoMadre} onChange={handleChange} />
            <FormField id="nombrePadre" name="nombrePadre" label="Nombre del Padre" value={formData.nombrePadre} onChange={handleChange} />
            <FormField id="apellidoPadre" name="apellidoPadre" label="Apellido del Padre" value={formData.apellidoPadre} onChange={handleChange} />
            <FormField id="ocupacionPadres" name="ocupacionPadres" label="Ocupación de los Padres" value={formData.ocupacionPadres} onChange={handleChange} />
            <FormField id="nivelEducativoPadres" name="nivelEducativoPadres" label="Nivel Educativo de los Padres" value={formData.nivelEducativoPadres} onChange={handleChange} />
          </div>
        </fieldset>

        {/* Sección 7: Configuración de la Cuenta y Seguridad */}
        <fieldset className={styles.formSection}>
          <legend className={styles.sectionTitle}>7. Configuración de la Cuenta y Seguridad</legend>
          <div className={styles.bentoGrid}>
            <FormField id="nombreUsuario" name="nombreUsuario" label="Nombre de Usuario" value={formData.nombreUsuario} onChange={handleChange} />
            <FormField id="contrasena" name="contrasena" label="Contraseña" type="password" required value={formData.contrasena} onChange={handleChange} />
            <FormField id="confirmarContrasena" name="confirmarContrasena" label="Confirmar Contraseña" type="password" required value={formData.confirmarContrasena} onChange={handleChange} />
            <FormField id="preguntaSeguridad" name="preguntaSeguridad" label="Pregunta de Seguridad" value={formData.preguntaSeguridad} onChange={handleChange} />
            <FormField id="respuestaSeguridad" name="respuestaSeguridad" label="Respuesta de Seguridad" value={formData.respuestaSeguridad} onChange={handleChange} />
          </div>
        </fieldset>

        <button type="submit" className={styles.submitButton}>Enviar Inscripción</button>
      </form>
    </div>
  );
};

export default EnrollmentFormPage;
