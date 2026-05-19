/**
 * AppRoutes
 * Konfigurasi routing utama aplikasi menggunakan React Router v7
 * Semua route didefinisikan di sini
 */
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../pages/Home';
import Pillars from '../pages/Pillars';
import TechStack from '../pages/TechStack';
import Contact from '../pages/Contact';

const REFERRAL_TRACKING_ENDPOINT =
  import.meta.env.VITE_REFERRAL_TRACKING_ENDPOINT ||
  'https://app.akademihub.id/api/v1/landing/referrals';

const sendReferralToBackend = (payload) => {
  if (!REFERRAL_TRACKING_ENDPOINT) {
    return;
  }

  void fetch(REFERRAL_TRACKING_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {
    // Keep client-side UX unaffected when tracking endpoint is unavailable.
  });
};

const trackProductHuntReferral = ({ pathname, search }) => {
  const params = new URLSearchParams(search);
  const ref = params.get('ref')?.trim().toLowerCase();

  if (ref !== 'producthunt') {
    return;
  }

  // Prevent duplicate events in StrictMode and route re-renders.
  const sessionEventKey = `akademihub:ref-track:${pathname}:${search}`;
  if (sessionStorage.getItem(sessionEventKey)) {
    return;
  }
  sessionStorage.setItem(sessionEventKey, new Date().toISOString());

  const nowIso = new Date().toISOString();
  const currentUrl = window.location.href;
  const payload = {
    event: 'referral_visit',
    source: 'producthunt',
    page_path: pathname,
    page_search: search,
    page_location: currentUrl,
    timestamp: nowIso,
    referrer: document.referrer || null,
  };

  const statsKey = 'akademihub:referral-stats';
  const statsRaw = localStorage.getItem(statsKey);
  const currentStats = statsRaw ? JSON.parse(statsRaw) : {};
  const currentPageCount = currentStats.pages?.[pathname] ?? 0;

  const nextStats = {
    total: (currentStats.total ?? 0) + 1,
    producthunt: (currentStats.producthunt ?? 0) + 1,
    pages: {
      ...(currentStats.pages ?? {}),
      [pathname]: currentPageCount + 1,
    },
    lastVisitAt: nowIso,
    lastUrl: currentUrl,
  };

  localStorage.setItem(statsKey, JSON.stringify(nextStats));

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'producthunt_referral_visit', {
      page_path: pathname,
      page_location: currentUrl,
      source: 'producthunt',
    });
  }

  sendReferralToBackend(payload);

  window.dispatchEvent(
    new CustomEvent('akademihub:referral', {
      detail: payload,
    }),
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

const ReferralStatsTracker = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    trackProductHuntReferral({ pathname, search });
  }, [pathname, search]);

  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <ReferralStatsTracker />
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
    </>
  );
};

export default AppRoutes;
