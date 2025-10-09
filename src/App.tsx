import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NoticiasPage from './pages/NoticiasPage';
import EventosPage from './pages/EventosPage';
import FacultadesPage from './pages/FacultadesPage';
import FacultyDetailPage from './pages/FacultyDetailPage';
import AdmisionesPage from './pages/AdmisionesPage';
import VidaUniversitariaPage from './pages/VidaUniversitariaPage';
import ProgramasAcademicosPage from './pages/ProgramasAcademicosPage';
import CampusVirtualPage from './pages/CampusVirtualPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { EnrollButton } from './components';

/**
 * @typedef {object} AppProps
 */

/**
 * Main application component.
 * @param {AppProps} props - The properties for the App component.
 * @returns {JSX.Element} The rendered App component.
 */
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/eventos" element={<EventosPage />} />
        <Route path="/facultades" element={<FacultadesPage />} />
        <Route path="/facultades/:facultyName" element={<FacultyDetailPage />} />
        <Route path="/facultades/:facultyName/:programName" element={<ProgramDetailPage />} />
        <Route path="/admisiones" element={<AdmisionesPage />} />
        <Route path="/vida-universitaria" element={<VidaUniversitariaPage />} />
        <Route path="/programas-academicos" element={<ProgramasAcademicosPage />} />
        <Route path="/campus-virtual" element={<CampusVirtualPage />} />
      </Routes>
      <EnrollButton />
      <Footer />
    </Router>
  );
};

export default App;
