# UNAR - Universidad Nacional de la Amazonia y la Orinoquía

Este es el repositorio del sitio web de la Universidad Nacional de la Amazonia y la Orinoquía (UNAR), una universidad ficticia. El proyecto es una aplicación web moderna, diseñada con un enfoque "mobile-first" y con un fuerte énfasis en la accesibilidad.

## Sobre el Proyecto

El sitio web de la UNAR sirve como portal principal para estudiantes, aspirantes y personal administrativo. Proporciona información sobre la universidad, sus facultades, programas académicos, noticias y eventos. También incluye un formulario de inscripción completo y una sección de campus virtual.

## Características

- **Diseño Responsivo:** La interfaz se adapta a cualquier tamaño de pantalla, desde dispositivos móviles hasta computadoras de escritorio.
- **Accesibilidad:** Incluye un menú de accesibilidad para ajustar el tamaño del texto, el contraste y otras opciones para una mejor experiencia de usuario.
- **Navegación Intuitiva:** Sistema de enrutamiento claro y fácil de usar para navegar por las diferentes secciones del sitio.
- **Componentes Reutilizables:** Construido con un sistema de componentes modulares para facilitar el mantenimiento y la escalabilidad.
- **Formulario de Inscripción Dinámico:** Un formulario de inscripción completo con campos que se actualizan dinámicamente (países, provincias, ciudades).

## Páginas y Secciones

- **Inicio:** Página principal con noticias y eventos destacados.
- **Facultades:** Lista de las facultades de la universidad.
- **Programas Académicos:** Información detallada sobre los programas ofrecidos.
- **Noticias:** Sección de noticias y comunicados.
- **Admisiones:** Información sobre el proceso de admisión y formulario de inscripción.
- **Campus Virtual:** Enlace al portal del campus virtual.
- **Sobre la Universidad:** Información general sobre la UNAR.

## Tecnologías Utilizadas

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript:** Superset de JavaScript que añade tipado estático.
- **Vite:** Herramienta de desarrollo frontend para un desarrollo rápido.
- **React Router:** Para el enrutamiento del lado del cliente.
- **CSS Modules:** Para estilos de componentes encapsulados.
- **country-state-city:** Biblioteca para obtener datos de países, provincias y ciudades.

## Cómo Empezar

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_DIRECTORIO>
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Esto iniciará la aplicación en modo de desarrollo. Abre [http://localhost:5173](http://localhost:5173) para verla en tu navegador.

## Scripts Disponibles

En el archivo `package.json`, encontrarás los siguientes scripts:

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run lint`: Ejecuta el linter de ESLint para revisar el código.
- `npm run preview`: Inicia un servidor local para previsualizar la compilación de producción.