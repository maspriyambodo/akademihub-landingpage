/**
 * AppRoutes
 * Konfigurasi routing utama aplikasi menggunakan React Router v7
 * Semua route didefinisikan di sini
 */
import { Routes, Route } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../pages/Home';
import Pillars from '../pages/Pillars';
import TechStack from '../pages/TechStack';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout Route dengan App sebagai wrapper */}
      <Route path="/" element={<App />}>
        {/* Route Beranda */}
        <Route index element={<Home />} />
      
      {/* Route 7 Pilar */}
      <Route path="/pillars" element={<Pillars />} />
      
      {/* Route Tech Stack */}
      <Route path="/techstack" element={<TechStack />} />
      
      {/* Route Kontak */}
      <Route path="/contact" element={<Contact />} />
      
      {/* Route 404 - Halaman Tidak Ditemukan */}
      <Route 
        path="*" 
        element={
          <div style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem'
          }}>
            <h1 style={{
              fontSize: '6rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              404
            </h1>
            <h2 style={{
              fontSize: '1.5rem',
              color: '#1e293b',
              marginBottom: '0.5rem'
            }}>
              Halaman Tidak Ditemukan
            </h2>
            <p style={{
              color: '#64748b',
              marginBottom: '2rem'
            }}>
              Maaf, halaman yang Anda cari tidak tersedia.
            </p>
            <a 
              href="/" 
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                color: 'white',
                padding: '0.875rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 20px rgba(37, 99, 235, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Kembali ke Beranda
            </a>
          </div>
        } 
      />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
