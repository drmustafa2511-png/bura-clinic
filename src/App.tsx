
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AdminProvider } from './contexts/AdminContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingBooking from './components/FloatingBooking';
import { ProtectedRoute } from './components/admin/ProtectedRoute';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import TeamPage from './pages/TeamPage';
import OffersPage from './pages/OffersPage';
import LoginPage from './pages/admin/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import ContactInfoPage from './pages/admin/ContactInfoPage';
import ServicesManagePage from './pages/admin/ServicesManagePage';

function App() {
  return (
    <LanguageProvider>
      <AdminProvider>
        <Router>
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<LoginPage />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/contact"
              element={
                <ProtectedRoute>
                  <ContactInfoPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/services"
              element={
                <ProtectedRoute>
                  <ServicesManagePage />
                </ProtectedRoute>
              }
            />

            {/* Public Routes */}
            <Route
              path="/*"
              element={
                <div className="min-h-screen bg-white">
                  <Navigation />
                  <main>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/gallery" element={<GalleryPage />} />
                      <Route path="/team" element={<TeamPage />} />
                      <Route path="/offers" element={<OffersPage />} />
                    </Routes>
                  </main>
                  <Footer />
                  <FloatingBooking />
                </div>
              }
            />
          </Routes>
        </Router>
      </AdminProvider>
    </LanguageProvider>
  );
}

export default App;
