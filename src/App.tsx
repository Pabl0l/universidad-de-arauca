import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import FacultadesPage from './pages/FacultadesPage';
import FacultyDetailPage from './pages/FacultyDetailPage';
import NoticiasPage from './pages/NoticiasPage';
import AdmisionesPage from './pages/AdmisionesPage';
import CampusVirtualPage from './pages/CampusVirtualPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import SobreLaUniversidadPage from './pages/SobreLaUniversidadPage';
import AdministrativosPage from './pages/AdministrativosPage';
import EnrollmentFormPage from './pages/EnrollmentFormPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { AccessibilityMenu, FloatingEnrollButton } from './components';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="page-content">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/facultades" element={<FacultadesPage />} />
          <Route path="/facultades/:facultySlug" element={<FacultyDetailPage />} />
          <Route path="/noticias" element={<NoticiasPage />} />
          <Route path="/admisiones" element={<AdmisionesPage />} />
          <Route path="/campus-virtual" element={<CampusVirtualPage />} />
          <Route path="/facultades/:facultySlug/:programSlug" element={<ProgramDetailPage />} />
          <Route path="/acercade" element={<SobreLaUniversidadPage />} />
          <Route path="/administrativos" element={<AdministrativosPage />} />
          <Route path="/inscripcion" element={<EnrollmentFormPage />} />
        </Routes>
        <Footer />
      </div>
      <FloatingEnrollButton />
      <AccessibilityMenu />
      <Toaster position="bottom-center" />
    </Router>
  );
}

export default App;
