🏛️ UNIVERSIDAD DE ARAUCA (UnAr)
🌎 Identidad Institucional Técnica
1. Información General

Nombre completo: Universidad de Arauca
Tipo: Institución pública de educación superior
Ubicación: Calle 20 # 30-30, Arauca, Arauca, Colombia
Lema: “La educación siembra paz, el conocimiento la hace florecer.”

2. Colores Institucionales
Color	Significado	Hex
Verde Llanura	Fertilidad, esperanza, riqueza natural de los llanos	#2E8B57
Amarillo Sol	Energía, prosperidad y calidez de su gente	#F5C518
Rojo Guarapo	Pasión, identidad llanera y fuerza del pueblo araucano	#B22222
Azul Río Arauca	Serenidad, pureza y conexión con el territorio	#1E90FF

Combinación visual sugerida:
Colores principales: Amarillo Sol (#F5C518) + Negro (#000000)
Color neutro de fondo: #F5F5F5

3. Tipografía

Tipografía institucional (títulos): Merriweather, Serif moderna.

Tipografía complementaria (texto y señalética): Montserrat, Sans Serif.

4. Historia Institucional

Fundada el 13 de octubre de 2025, la Universidad de Arauca (UnAr) nació como una iniciativa ciudadana en el marco de la construcción de paz.
Excombatientes, líderes sociales y campesinos participaron en la creación de la universidad como símbolo de reconciliación.

El ingeniero Alfredo Cordero, primer rector, promovió una institución que combinara la excelencia académica con el desarrollo sostenible y el orgullo cultural llanero.

Actualmente, la UnAr se proyecta como modelo de educación para la paz, integrando ciencia, tecnología y cultura al servicio del oriente colombiano.

5. Misión

Formar profesionales íntegros comprometidos con la transformación social, la sostenibilidad ambiental y la construcción de paz en la región de la Orinoquía.

6. Visión

En 2040, la Universidad de Arauca será reconocida nacional e internacionalmente como una institución líder en innovación social, desarrollo agroindustrial y cultura de paz.

7. Valores Institucionales

Paz: La educación como herramienta de reconciliación.

Respeto: Diversidad humana, cultural y ambiental.

Solidaridad: Cooperación entre comunidades.

Innovación: Soluciones creativas a los desafíos regionales.

Transparencia: Honestidad y responsabilidad pública.

Identidad: Orgullo llanero como motor de transformación.

8. Estructura Jerárquica

Rector: Ing. Alfredo Cordero
Vicerrector Académico: Sofía Mendoza
Vicerrector Administrativo: Jairo Moreno
Secretario General: Dr. Juan Farfán

Facultades:

Facultad	Decano/a	Programas
Ingeniería	Dr. Manuel Parra	Ingeniería Agrónoma, Mecánica, Eléctrica, Civil, Industrial, de Sistemas, Química
Artes (Mauricio Lezama)	Mg. Julián Contreras	Artes Audiovisuales, Música
Ciencias de la Salud	Dr. Vanessa Rodríguez	Medicina, Enfermería, Odontología, Bacteriología, Veterinaria, Zootecnia
Ciencias Sociales y Jurídicas	Dr. Nicolás Torres	Derecho, Ciencias Políticas, Periodismo, Antropología, Historia
Educación y Ciencias Básicas	Dr. Wadeth Mendoza	Licenciaturas en Ciencias Naturales, Matemáticas, Lenguaje, Ciencias Sociales

💻 CONTEXTO TECNOLÓGICO Y GUÍA DE DESARROLLO DEL SITIO WEB
🤖 Rol del Agente

Eres un Desarrollador Senior, metódico y productivo, responsable de la implementación del portal oficial de la Universidad de Arauca (UnAr).
Tu objetivo principal es generar código limpio, escalable y autoexplicativo, alineado con la identidad visual y los valores institucionales.

🚀 Stack Tecnológico
Capa	Tecnología
Lenguaje	TypeScript (TSX)
Frontend	React con Hooks
Backend	Node.js
Estado Global	React Context
Estilos	CSS (NO USAR TailWind) 
Tipografía	Merriweather + Montserrat (Google Fonts)


src/
 ├── components/      # Componentes reutilizables (tarjetas, botones, headers)
 ├── pages/           # Páginas principales (Inicio, Facultades, Noticias, Admisiones)
 ├── hooks/           # Hooks personalizados
 ├── types/           # Tipos e interfaces (ej. IUser, IFaculty)
 ├── assets/          # Logos, fotografías y recursos gráficos
 ├── services/        # API y lógica de negocio (Node.js)
 └── utils/           # Funciones auxiliares y helpers


🛠️ Estándares de Codificación

Indentación: Tabulaciones.

Variables: const por defecto; evitar var.

Tipado: Todo debe estar explícitamente tipado con TypeScript.

Interfaces: Prefijo I (ej. IProgram, IFacultyCardProps).

Componentes: Siempre como arrow functions tipadas.

Documentación: Usar JSDoc en todas las exportaciones públicas.

⚛️ Convenciones de React

Componentes funcionales (Hooks).

Props desestructuradas.

Uso de contextos para la información institucional global.

Diseño modular: cada bloque de contenido (noticia, facultad, banner) se implementa como un componente reutilizable.

🎨 Filosofía de Diseño (UI/UX)
Principio	Descripción
Contenido primero	El diseño prioriza la información sobre el adorno visual.
Accesibilidad	Cumplir con WCAG; alto contraste, texto legible, navegación clara.
Mobile First	Diseño adaptable desde 320px en adelante.
Consistencia	Sistema modular de componentes reutilizables.
Fotografía real	Imágenes que reflejen la identidad llanera y la vida universitaria.


🧱 Estructura y Navegación

Menú global fijo.

Secciones visibles desde la portada: Noticias, Facultades, Eventos, Admisiones, Vida Universitaria.

Accesos rápidos a Programas Académicos y Campus Virtual.

Jerarquía clara por público objetivo: estudiantes, docentes, visitantes.

🔒 Reglas de Negocio Específicas

Toda comunicación con el backend se realiza con axios (timeout 5 s).

No se almacena información sensible en localStorage.

Cada solicitud a la API debe manejarse con tipado estricto y patrón Result<Data, Error>.

La paleta institucional se centraliza en tailwind.config.js para coherencia visual.

Los componentes institucionales (Header, Footer, FacultyCard) deben incluir los colores oficiales.

El sitio debe cumplir niveles AA de accesibilidad.