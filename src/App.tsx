import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import FacultadesPage from './pages/FacultadesPage';
import FacultyDetailPage from './pages/FacultyDetailPage';
import NoticiasPage from './pages/NoticiasPage';
import AdmisionesPage from './pages/AdmisionesPage';
import CampusVirtualPage from './pages/CampusVirtualPage';
import ProgramasAcademicosPage from './pages/ProgramasAcademicosPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import SobreLaUniversidadPage from './pages/SobreLaUniversidadPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/facultades" element={<FacultadesPage />} />
        <Route path="/facultades/:facultySlug" element={<FacultyDetailPage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/admisiones" element={<AdmisionesPage />} />
        <Route path="/campus-virtual" element={<CampusVirtualPage />} />
        <Route path="/programas-academicos" element={<ProgramasAcademicosPage />} />
        <Route path="/programas-academicos/:programSlug" element={<ProgramDetailPage />} />
        <Route path="/acercade" element={<SobreLaUniversidadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
