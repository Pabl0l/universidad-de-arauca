import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5C518', // Amarillo Sol
    },
    secondary: {
      main: '#2E8B57', // Verde Llanura
    },
    error: {
      main: '#B22222', // Rojo Guarapo
    },
    info: {
      main: '#1E90FF', // Azul Río Arauca
    },
    text: {
      primary: '#000000', // Negro
      secondary: '#FFFFFF', // Blanco
    },
    background: {
      default: '#F5F5F5', // Neutro de fondo
      paper: '#FFFFFF', // Blanco
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontFamily: 'Merriweather, serif',
    },
    h2: {
      fontFamily: 'Merriweather, serif',
    },
    h3: {
      fontFamily: 'Merriweather, serif',
    },
    h4: {
      fontFamily: 'Merriweather, serif',
    },
    h5: {
      fontFamily: 'Merriweather, serif',
    },
    h6: {
      fontFamily: 'Merriweather, serif',
    },
  },
});

export default theme;
