export const faculties: IFaculty[] = [
  {
    name: 'Ingeniería',
    dean: 'Dr. Manuel Parra',
    slogan: 'De la teoría a la tierra, forjando el futuro del Llano.',
    description: 'Bienvenidos a la Facultad de Ingeniería de la Universidad del Llano Oriental, el epicentro académico donde la innovación se encuentra con la tradición. Bajo el liderazgo visionario del Dr. Manuel Parra, nuestra facultad se ha consolidado como un pilar para el desarrollo regional. No solo formamos ingenieros; formamos agentes de cambio. Nuestros programas están diseñados con un profundo sentido de pertenencia, abordando los retos más apremiantes de la Orinoquía colombiana: la transición energética, la eficiencia agroindustrial, la infraestructura resiliente y la conservación de sus ecosistemas únicos. Contamos con laboratorios de vanguardia, convenios con el sector productivo y un enfoque de "aprender-haciendo" que lleva a nuestros estudiantes del aula directamente a los campos, plantas y comunidades.',
    programs: [
      {
        name: 'Ingeniería Agrónoma',
        slogan: 'Donde la sabiduría del campo se encuentra con la tecnología del futuro.',
        description: 'Este programa va más allá de los cultivos tradicionales. Formamos ingenieros que revolucionarán el sector agropecuario del Llano, integrando técnicas de agricultura de precisión, manejo sostenible de suelos (especialmente las sabanas naturales), biotecnología aplicada a cultivos resilientes y sistemas de riego inteligente que optimizan el uso del agua. Los estudiantes aprenden a gestionar cadenas de valor completas, desde la siembra hasta la comercialización de productos.',
        uniqueFocus: 'Investigación aplicada en Agro-silvo-pastoril, un sistema que integra árboles, pastos y ganado para crear fincas regenerativas y biodiversas, típicas de la región.',
        graduateProfile: 'Podrá diseñar y dirigir empresas agroindustriales sostenibles, implementar tecnologías para aumentar la productividad sin dañar el medio ambiente, y asesorar a comunidades rurales en la optimización de sus recursos.',
      },
      {
        name: 'Ingeniería Mecánica',
        slogan: 'La fuerza que mueve la industria llanera.',
        description: 'Nuestros ingenieros mecánicos son expertos en diseñar, construir y mantener la maquinaria que impulsa el desarrollo. El programa se especializa en dos áreas clave: Mecanización Agrícola (diseño y adaptación de maquinaria para las condiciones específicas del Llano) y Energías Alternativas (desarrollo de sistemas de biodiesel y mantenimiento de turbinas eólicas).',
        uniqueFocus: 'Prototipado y mantenimiento de la maquinaria para la ganadería extensiva y la agricultura a gran escala, considerando la durabilidad y la facilidad de reparación en entornos remotos.',
        graduateProfile: 'Estará capacitado para liderar plantas de producción agroindustrial, gestionar flotas vehiculares y maquinaria pesada, e innovar en el diseño de equipos más eficientes y menos contaminantes.',
      },
      {
        name: 'Ingeniería Civil',
        slogan: 'Construyendo las bases para una región próspera y conectada.',
        description: 'Este programa forma profesionales que enfrentan el reto de construir infraestructura en un territorio de sabanas inundables y suelos particulares. Se enfoca en Geotecnia Llanera, Materiales de Construcción Locales, diseño de Vías Terciarias y Secundarias que resistan los inviernos, y gestión de recursos hídricos (diques, canales y sistemas de drenaje).',
        uniqueFocus: 'Especialización en infraestructura para la transición energética, como los cimientos para parques eólicos y solares, y en el desarrollo de soluciones de vivienda bioclimática adaptada al clima tropical.',
        graduateProfile: 'Será un profesional capaz de planificar y ejecutar proyectos de infraestructura vial, hidráulica y sanitaria, con un fuerte compromiso con la sostenibilidad y la reducción del impacto ambiental.',
      },
      {
        name: 'Ingeniería Eléctrica',
        slogan: 'Electrificando el futuro con energías limpias.',
        description: 'La Orinoquía es una potencia en energía renovable. Nuestro programa forma ingenieros para liderar esta revolución. El plan de estudios hace hincapié en los Sistemas de Potencia, la Generación Distribuida (como granjas solares y micro-redes) y la Integración de Fuentes No Convencionales a la red nacional.',
        uniqueFocus: 'Investigación y desarrollo de soluciones para la electrificación rural en zonas aisladas del Llano, utilizando sistemas híbridos (solar-eólico-biomasa) que llegan energía a comunidades que antes carecían de ella.',
        graduateProfile: 'Podrá diseñar, operar y mantener sistemas de generación, transmisión y distribución de energía eléctrica, con una clara vocación hacia las energías renovables y la eficiencia energética.',
      },
      {
        name: 'Ingeniería Industrial',
        slogan: 'Optimizando los recursos para un Llano más productivo.',
        description: 'Formamos los arquitectos de los procesos. Este programa combina los principios clásicos de la ingeniería industrial con las particularidades de la agroindustria y la cadena de suministro en una región de grandes distancias. Se estudia Logística y Cadena de Frío, Gestión de la Calidad en productos perecederos y Modelado de Sistemas Complejos.',
        uniqueFocus: 'Aplicación de herramientas de Industria 4.0 (IoT, Big Data) a la cadena de valor de la carne, la leche y los cultivos, desde el hatillo hasta el consumidor final.',
        graduateProfile: 'Será un gestor de operaciones y procesos, capaz de aumentar la productividad y competitividad de cualquier organización, reduciendo desperdicios y optimizando el uso de la energía, el tiempo y los materiales.',
      },
      {
        name: 'Ingeniería Química',
        slogan: 'Transformando los recursos naturales en progreso.',
        description: 'Este programa se centra en el diseño de procesos para transformar la riqueza natural del Llano. Los estudiantes exploran la producción de biocombustibles (a partir de aceites de palma y otros cultivos), el desarrollo de bioplásticos a partir de almidones, la química de los alimentos para la agroindustria y el tratamiento de aguas residuales de los procesos productivos.',
        uniqueFocus: 'Investigación en Biorrefinerías, donde se aprovecha integralmente la biomasa local para crear una amplia gama de productos de valor agregado, promoviendo una economía circular.',
        graduateProfile: 'Estará preparado para trabajar en plantas de procesamiento agroindustrial, en la industria de polímeros y materiales, y en el desarrollo de procesos químicos más limpios y seguros.',
      },
      {
        name: 'Ingeniería de Sistemas',
        slogan: 'La columna vertebral digital de la nueva Orinoquía.',
        description: 'Formamos a los creadores de la infraestructura digital que requiere la región. El programa cubre Desarrollo de Software, Ciberseguridad, Inteligencia Artificial y Ciencia de Datos, con una aplicación transversal a todos los sectores.',
        uniqueFocus: 'Desarrollo de Software y Soluciones TI para el Agro (AgTech), como aplicaciones para monitoreo de cultivos con drones, plataformas de comercio electrónico para productos llaneros y sistemas de trazabilidad ganadera usando blockchain.',
        graduateProfile: 'Será un profesional capaz de crear soluciones tecnológicas a medida, liderar proyectos de transformación digital y gestionar sistemas de información complejos, siempre con una visión ética y de servicio a la comunidad.',
      },
    ],
    slug: ""
  },
  {
    name: 'Artes “Mauricio Lezama”',
    dean: 'Mg. Julián Contreras',
    slogan: 'Donde la creatividad teje el alma del Arauca',
    description: 'La Facultad de Artes “Mauricio Lezama” de la UNAR es un vibrante ecosistema de creación, reflexión y encuentro. Inspirados en el legado del cineasta araucano, quien retrató con profunda humanidad las historias del llano y el conflicto, nuestra misión es formar artistas conscientes y ciudadanos críticos. Creemos firmemente que el arte no es un lujo, sino una herramienta fundamental para la reconstrucción del tejido social, la preservación de la memoria y la proyección de una cultura de paz. Aquí, los estudiantes no solo dominan técnicas y teorías; aprenden a escuchar a su territorio, a dialogar con sus comunidades y a convertir sus vivencias en obras poderosas que interpelen al mundo.',
    programs: [
      {
        name: 'Artes Audiovisuales',
        slogan: 'Contamos las historias que el río Arauca se lleva, pero nosotros recuperamos.',
        description: 'Este programa forma narradores visuales con una clara vocación social y un profundo conocimiento de su entorno. El plan de estudios integra el dominio técnico (guion, dirección, fotografía, sonido y edición) con una sólida formación en documental social, cine etnográfico y nuevos medios. Los estudiantes exploran el poder del audiovisual como instrumento de investigación, denuncia y celebración de la identidad llanera.',
        uniqueFocus: 'Especialización en Cine de No-Ficción y Memoria, con talleres prácticos en comunidades para co-crear relatos que rescaten las tradiciones orales y las historias de vida de la región.',
        graduateProfile: 'Será un cineasta o documentalista capaz de dirigir proyectos autónomos o integrarse a equipos de producción, con habilidades para gestionar recursos, obtener financiación a través de fondos culturales y producir contenidos de impacto para cine, televisión y plataformas digitales.',
      },
      {
        name: 'Música',
        slogan: 'Donde el corrío llanero dialoga con el jazz y la sinfonía.',
        description: 'Nuestra Escuela de Música entiende que el llano es una tierra de ricas sonoridades. Formamos músicos integrales que, partiendo de las raíces del joropo, el corrío y el pasaje, se abren a los lenguajes universales de la música. El programa ofrece énfasis en Interpretación (arpa, cuatro, maracas, voz, y instrumentos sinfónicos), Composición y Arreglos y Producción Musical.',
        uniqueFocus: 'Fusión y Experimentación Sonora. Investigamos cómo los ritmos y instrumentos tradicionales llaneros pueden conversar con géneros contemporáneos, creando una nueva sonoridad araucana. Contamos con un Laboratorio de Sonido donde se experimenta con grabaciones de campo del paisaje llanero.',
        graduateProfile: 'Podrá desarrollarse como intérprete solista o de ensemble, compositor para proyectos propios o de otros artistas, arreglista, productor musical en estudios de grabación o gestor de proyectos culturales musicales.',
      },
    ],
    emblematicProjects: [
      'Cine por la Paz: Llevando la pantalla donde nace la historia.',
    ],
    slug: ""
  },
  {
    name: 'Ciencias de la Salud',
    dean: 'Dra. Vanessa Rodríguez',
    slogan: 'Cuidando la vida, tejiendo bienestar en la comunidad araucana',
    description: 'Bajo el liderazgo de la Dra. Vanessa Rodríguez, la Facultad de Ciencias de la Salud de la UNAR se erige como un pilar de esperanza y bienestar para la región. Nuestra filosofía se centra en formar profesionales de la salud con una sólida base científica, pero, sobre todo, con una profunda sensibilidad humana y un entendimiento claro de los determinantes sociales de la salud. Reconocemos las particularidades del territorio araucano—su dispersión geográfica, su diversidad cultural y sus desafíos en acceso a servicios—para formar agentes de cambio capaces de innovar, liderar y servir con ética y compromiso. Formamos equipos, no solo profesionales individuales.',
    programs: [
      {
        name: 'Medicina',
        slogan: 'Formando médicos para la Arauca profunda, con rigor científico y calidez humana.',
        description: 'Nuestro programa de Medicina va más allá del modelo hospitalario tradicional. Desde los primeros semestres, los estudiantes tienen contacto con la comunidad, entendiendo la salud desde un enfoque biopsicosocial y territorial. El plan de estudios hace énfasis en Medicina Familiar y Comunitaria, Salud Pública, Epidemiología regional y Urgencias médicas en contextos rurales.',
        uniqueFocus: 'Medicina Tropical y Zoonótica, profundizando en el diagnóstico y manejo de enfermedades prevalentes en el llano como dengue, malaria, leishmaniasis y otras transmitidas por animales.',
        graduateProfile: 'Será un médico general con capacidad de liderazgo en equipos interdisciplinarios, apto para trabajar en primer nivel de atención, con habilidades para la investigación aplicada y la gestión de programas de salud pública.',
      },
      {
        name: 'Enfermería',
        slogan: 'El cuidado como arte y ciencia, al servicio de la comunidad.',
        description: 'Formamos enfermeras y enfermeros como gestores del cuidado integral. El programa integra la teoría con la práctica en escenarios reales, fortaleciendo competencias en atención primaria en salud, salud familiar, cuidados críticos y educación para la salud.',
        uniqueFocus: 'Especialización en Enfermería Comunitaria y Salud Rural, con entrenamiento específico para realizar visitas domiciliarias, seguimiento a pacientes crónicos en zonas dispersas y promoción de la salud en entornos escolares y comunitarios.',
        graduateProfile: 'Será un profesional autónomo, con una fuerte capacidad de empatía y liderazgo, preparado para educar, prevenir y cuidar a las personas, familias y comunidades a lo largo de todo el ciclo vital.',
      },
      {
        name: 'Odontología',
        slogan: 'Promoviendo sonrisas saludables desde la primera infancia.',
        description: 'Este programa forma odontólogos con un enfoque preventivo y comunitario. Además de las competencias clínicas tradicionales, se especializa en Odontopediatría, Salud Pública Dental y el manejo de traumatismos dento-faciales.',
        uniqueFocus: 'Estomatología y Atención en Entornos No Convencionales, aprendiendo a adaptar los procedimientos odontológicos para llevar salud bucal a escuelas rurales y comunidades a través de unidades portátiles.',
        graduateProfile: 'Estará capacitado para diagnosticar, tratar y prevenir enfermedades bucales, con una clara vocación de servicio y la habilidad de diseñar e implementar programas de promoción de la salud bucal a nivel comunitario.',
      },
      {
        name: 'Bacteriología',
        slogan: 'Los detectives de la salud: detectando, previniendo y controlando.',
        description: 'Formamos profesionales esenciales para el diagnóstico y la vigilancia epidemiológica. El programa combina el trabajo en laboratorio clínico con un fuerte componente de salud pública y investigación. Los estudiantes se especializan en microbiología clínica, biología molecular y control de calidad de alimentos y aguas.',
        uniqueFocus: 'Diagnóstico de Enfermedades Infecciosas Desatendidas y Zoonosis, siendo un soporte fundamental para los programas de vigilancia epidemiológica del departamento.',
        graduateProfile: 'Podrá desempeñarse en laboratorios clínicos, bancos de sangre, instituciones de salud pública, la industria de alimentos y en proyectos de investigación.',
      },
      {
        name: 'Medicina Veterinaria y Zootecnia',
        slogan: 'Una sola salud: cuidando a los animales, protegemos a las personas.',
        description: 'Este programa integra dos disciplinas inseparables para el desarrollo araucano. Formamos médicos veterinarios y zootecnistas con un profundo conocimiento de la ganadería extensiva, la producción sostenible y el concepto Una Sola Salud (One Health), que reconoce la inextricable conexión entre la salud animal, humana y ambiental.',
        uniqueFocus: 'Sanidad y Producción Bovina en el Trópico, con énfasis en el manejo de hatos ganaderos, prevención de enfermedades que afectan la productividad y que pueden transmitirse a humanos (zoonosis), y bienestar animal.',
        graduateProfile: 'Será un profesional capaz de optimizar los sistemas de producción pecuaria, garantizar la inocuidad de los alimentos de origen animal, dirigir clínicas y granjas, y liderar programas de salud pública veterinaria.',
      },
    ],
    emblematicProjects: [
      'Clínica Móvil UNAR: Llevando la universidad y la salud a tu vereda.',
    ],
    facilities: [
      'Centro de Simulación Clínica "Héroes de la Salud"',
      'Granja Experimental "El Porvenir"',
      'Laboratorio de Salud Pública',
      'Consultorios Jurisdiccionales',
    ],
    slug: ""
  },
  {
    name: 'Ciencias Sociales y Jurídicas',
    dean: 'Dr. Nicolás Torres',
    slogan: 'Analizamos el pasado, actuamos en el presente y construimos el futuro del Arauca.',
    description: 'Bajo la dirección del Dr. Nicolás Torres, un reconocido defensor de derechos humanos, esta facultad es el epicentro del pensamiento crítico y la reflexión sobre la sociedad araucana y colombiana. Formamos profesionales que no solo interpretan las leyes y los fenómenos sociales, sino que se comprometen activamente con la construcción de una sociedad más justa, equitativa y en paz. Nuestra metodología se basa en el "aprendizaje situado", donde el aula se expande hacia los barrios, las comunidades rurales, los juzgados y los escenarios de participación ciudadana. Aquí, la teoría cobra vida al servicio de la transformación social.',
    programs: [
      {
        name: 'Derecho',
        slogan: 'La justicia no solo se estudia en los códigos, se vive en el territorio.',
        description: 'Este programa forma juristas con una sólida base doctrinal y una profunda conciencia social. Más allá de la ley, estudiamos su aplicación en el contexto del posconflicto, los derechos de las víctimas, la jurisdicción especial para la paz (JEP) y el derecho agrario y ambiental tan relevante para el Llano.',
        uniqueFocus: 'Clínica Jurídica de Interés Público y Derechos Humanos, donde los estudiantes, bajo la supervisión de docentes, ofrecen asesoría legal gratuita a comunidades vulnerables, víctimas del conflicto y organizaciones sociales.',
        graduateProfile: 'Será un abogado litigante, asesor o juez con capacidad de argumentación, conciliación y un firme compromiso ético. Estará preparado para trabajar en la defensa de los derechos humanos, la justicia transicional y el desarrollo legal de la región.',
      },
      {
        name: 'Ciencias Políticas',
        slogan: 'Formando líderes para la Arauca del futuro.',
        description: 'Formamos politólogos y analistas capaces de entender y transformar las dinámicas de poder. El programa combina la teoría política clásica con el análisis de la realidad colombiana y fronteriza, la gobernanza local, las políticas públicas y la resolución de conflictos.',
        uniqueFocus: 'Observatorio de Procesos Electorales y Gobernabilidad del Arauca, un espacio de investigación donde los estudiantes monitorean las campañas, los resultados y la gestión de los gobernantes locales.',
        graduateProfile: 'Podrá desempeñarse como asesor de entidades públicas, consultor en organizaciones no gubernamentales, analista político, gestor de proyectos de desarrollo o candidato a cargos de elección popular con una base técnica y ética sólida.',
      },
      {
        name: 'Periodismo',
        slogan: 'Contamos las historias con rigor, ética y un profundo respeto por la verdad.',
        description: 'Formamos comunicadores sociales y periodistas que priorizan el servicio a la ciudadanía. El programa hace énfasis en el periodismo de investigación, el periodismo de paz y posconflicto, la comunicación comunitaria y las narrativas digitales.',
        uniqueFocus: 'Medio Universitario "Voz UNAR", una plataforma multimedia (radio, web, TV) donde los estudiantes producen contenidos periodísticos de alto impacto, enfocados en las problemáticas y logros de la región, sirviendo como un contrapeso a los medios tradicionales.',
        graduateProfile: 'Será un periodista capaz de trabajar en redacciones, crear su propio emprendimiento mediático, ser gestor de comunicación en organizaciones o un documentalista de las realidades de su entorno.',
      },
      {
        name: 'Antropología',
        slogan: 'Escuchando las voces del Arauca para entender su alma.',
        description: 'Este programa forma antropólogos que investigan la diversidad cultural del departamento. Se especializa en antropología social, estudios rurales, antropología del conflicto y la paz, y patrimonio cultural inmaterial.',
        uniqueFocus: 'Etnografía Aplicada al Desarrollo, trabajando codo a codo con comunidades indígenas, campesinas y afrodescendientes para diagnosticar necesidades y co-diseñar proyectos de intervención social que respeten sus cosmovisiones.',
        graduateProfile: 'Estará capacitado para trabajar en investigación social, consultoría para entidades del Estado y ONGs, gestión cultural y en procesos de reparación colectiva a víctimas, aportando una mirada profunda y contextual.',
      },
      {
        name: 'Historia',
        slogan: 'Desenterramos el pasado para iluminar el presente.',
        description: 'Formamos historiadores críticos que investigan los procesos de larga duración que han configurado el Arauca. El programa estudia la historia regional y local, la historia de la violencia y el conflicto armado, la historia agraria y la memoria histórica.',
        uniqueFocus: 'Historia Pública y Divulgación, traduciendo el conocimiento académico en productos accesibles para la comunidad: museos itinerantes, documentales, cápsulas informativas y libros para bibliotecas escolares.',
        graduateProfile: 'Podrá trabajar como investigador, docente, archivista, asesor en proyectos de memoria histórica o gestor cultural, contribuyendo a que la sociedad araucana se reconozca en su propia historia.',
      },
    ],
    emblematicProjects: [
      'Memorias del Río Arauca: El río cuenta su historia, nosotros la escribimos con la comunidad.',
    ],
    facilities: [
      'Centro de Conciliación y Justicia Comunitaria "Esperanza Arauca"',
      'Laboratorio de Comunicaciones "Voz UNAR"',
      'Archivo Histórico Regional "Arauca Viva"',
      'Salón de Juicios Orales Simulados',
    ],
    slug: ""
  },
  {
    name: 'Educación y Ciencias Básicas',
    dean: 'Dra. Wadeth Mendoza',
    slogan: 'Formando los maestros que transformarán las aulas del Arauca.',
    description: 'Bajo la inspiradora guía de la Dra. Wadeth Mendoza, una reconocida investigadora en pedagogías críticas, esta facultad es el semillero de los líderes educativos que la región necesita. Rechazamos un modelo de educación bancaria y, en su lugar, formamos maestros como agentes de cambio, investigadores en su propia aula y facilitadores de un aprendizaje significativo y contextualizado. Nuestros programas integran de manera indisoluble el dominio de las disciplinas (las ciencias, las matemáticas, la lengua y las sociales) con las más innovadoras metodologías pedagógicas, poniendo siempre al estudiante y su entorno en el centro del proceso de enseñanza-aprendizaje.',
    programs: [
      {
        name: 'Licenciatura en Ciencias Naturales',
        slogan: 'Despertando la curiosidad científica para entender y cuidar nuestro llano.',
        description: 'Formamos docentes que no solo enseñan biología, química y física, sino que fomentan la indagación y el amor por el mundo natural. El plan de estudios tiene un fuerte componente de educación ambiental y se especializa en los ecosistemas de la Orinoquía: sabanas, morichales y ríos.',
        uniqueFocus: 'Laboratorios Vivos, donde las salidas de campo a reservas naturales y fincas de la región se convierten en el aula principal para estudiar la biodiversidad, la química de los suelos y los principios físicos del entorno.',
        graduateProfile: 'Será un maestro capaz de diseñar proyectos pedagógicos para conservar el medio ambiente, dirigir ferias científicas escolares y enseñar ciencias de una manera dinámica y aplicada a la realidad araucana.',
      },
      {
        name: 'Licenciatura en Matemáticas',
        slogan: 'Descifrando el lenguaje del universo en la vida cotidiana del Llano.',
        description: 'Formamos docentes que rompen el mito de la dificultad de las matemáticas. Nuestro enfoque es práctico, lúdico y contextual, vinculando los conceptos abstractos con problemas reales de la agroindustria, la economía local, la topografía y las tradiciones llaneras.',
        uniqueFocus: 'Matemáticas Aplicadas al Contexto Llanero, utilizando datos de producción ganadera, medidas de tierra (hectáreas), diseños de mangas y curvas de crecimiento de cultivos para enseñar álgebra, geometría y estadística.',
        graduateProfile: 'Será un profesor innovador, capaz de generar en sus estudiantes un pensamiento lógico y crítico, utilizando herramientas tecnológicas y situaciones cotidianas para hacer las matemáticas accesibles y relevantes.',
      },
      {
        name: 'Licenciatura en Lengua Castellana',
        slogan: 'Tejiendo nuestra identidad a través de la palabra, la lectura y la escucha.',
        description: 'Formamos maestros que entienden el lenguaje como un instrumento de poder, liberación y construcción de ciudadanía. El programa profundiza en la literatura colombiana y llanera, la oralitura (tradición oral), la lingüística y las pedagogías críticas de la lectura y la escritura.',
        uniqueFocus: 'Semillero de Narradores Orales "El Corrío de la Escuela", donde los estudiantes aprenden y enseñan a rescatar y recrear las historias, leyendas y cantos del Llano, fortaleciendo la identidad cultural desde las aulas.',
        graduateProfile: 'Será un docente que fomenta la comunicación asertiva, la producción de textos creativos y críticos, y un profundo amor por la lectura, entendida como una ventana al mundo y un espejo de la propia realidad.',
      },
      {
        name: 'Licenciatura en Ciencias Sociales',
        slogan: 'Formando ciudadanos críticos para la paz y la memoria de Arauca.',
        description: 'Formamos maestros que enseñan a pensar la sociedad, no solo a memorizar fechas. El programa combina historia, geografía, filosofía y ciencias políticas con un enfoque en pedagogía de la memoria, construcción de paz, derechos humanos y estudios territoriales.',
        uniqueFocus: 'Cartografía Social de la Memoria, una metodología donde los estudiantes y sus futuros alumnos mapean los territorios, identificando lugares de importancia histórica, conflictos socioambientales y espacios para la reconciliación.',
        graduateProfile: 'Será un profesor que promueve la participación ciudadana, el análisis crítico de la realidad y la comprensión de los procesos históricos que han configurado el Arauca, contribuyendo a la formación de una ciudadanía activa y comprometida.',
      },
    ],
    emblematicProjects: [
      'Aulas para la Paz: Llevando innovación pedagógica a la escuela rural, donde más se necesita.',
    ],
    facilities: [
      'Aula Viva "Sabana y Río"',
      'Laboratorio de Didáctica de las Matemáticas "Pensar Jugando"',
      'Centro de Recursos para la Enseñanza (CRE)',
      'Estudio de Grabación Pedagógico "La Voz del Maestro"',
    ],
    slug: ""
  },
];
