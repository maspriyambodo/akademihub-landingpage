import { lazy, Suspense, useEffect } from 'react';
import App from '../App.jsx';
import Home from '../pages/Home.jsx';

const Pillars = lazy(() => import('../pages/Pillars.jsx'));
const TechStack = lazy(() => import('../pages/TechStack.jsx'));
const Contact = lazy(() => import('../pages/Contact.jsx'));

const REFERRAL_TRACKING_ENDPOINT =
  import.meta.env.VITE_REFERRAL_TRACKING_ENDPOINT ||
  'https://app.akademihub.id/api/v1/landing/referrals';

const trackProductHuntReferral = () => {
  const { pathname, search, href } = window.location;
  if (new URLSearchParams(search).get('ref')?.trim().toLowerCase() !== 'producthunt') return;

  const eventKey = `akademihub:ref-track:${pathname}:${search}`;
  if (sessionStorage.getItem(eventKey)) return;

  const timestamp = new Date().toISOString();
  const payload = {
    event: 'referral_visit',
    source: 'producthunt',
    page_path: pathname,
    page_search: search,
    page_location: href,
    timestamp,
    referrer: document.referrer || null,
  };

  sessionStorage.setItem(eventKey, timestamp);

  const statsKey = 'akademihub:referral-stats';
  const currentStats = JSON.parse(localStorage.getItem(statsKey) || '{}');
  localStorage.setItem(statsKey, JSON.stringify({
    total: (currentStats.total ?? 0) + 1,
    producthunt: (currentStats.producthunt ?? 0) + 1,
    pages: {
      ...(currentStats.pages ?? {}),
      [pathname]: (currentStats.pages?.[pathname] ?? 0) + 1,
    },
    lastVisitAt: timestamp,
    lastUrl: href,
  }));

  if (Array.isArray(window.dataLayer)) window.dataLayer.push(payload);
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'producthunt_referral_visit', {
      page_path: pathname,
      page_location: href,
      source: 'producthunt',
    });
  }

  if (REFERRAL_TRACKING_ENDPOINT) {
    void fetch(REFERRAL_TRACKING_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  }
};

const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <h2>Halaman Tidak Ditemukan</h2>
    <p>Maaf, halaman yang Anda cari tidak tersedia.</p>
    <a href="/">Kembali ke Beranda</a>
  </div>
);

const pages = {
  '/': Home,
  '/pillars': Pillars,
  '/techstack': TechStack,
  '/contact': Contact,
};

const AppRoutes = () => {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const Page = pages[pathname] || NotFound;

  useEffect(trackProductHuntReferral, []);

  return (
    <App>
      <Suspense fallback={<div className="route-loading" aria-label="Memuat halaman" />}>
        <Page />
      </Suspense>
    </App>
  );
};

export default AppRoutes;