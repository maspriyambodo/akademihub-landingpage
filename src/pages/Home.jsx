import styled, { keyframes } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import {
  SchoolIcon,
  BookOpenIcon,
  WalletIcon,
  UsersIcon,
  LibraryIcon,
  UserCheckIcon,
  SparklesIcon,
  WhatsAppIcon,
  ZapIcon,
  ShieldCheckIcon,
  BarChartIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
  ClockIcon,
  ActivityIcon,
  LayersIcon,
  SmartphoneIcon,
  CpuIcon,
  DatabaseIcon,
  FileTextIcon
} from '../components/Icons';

/* ── Keyframes ── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.35; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.08); }
`;
const floatCard = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;
const floatBadge = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(1deg); }
`;
const livePing = keyframes`
  0% { transform: scale(0.9); opacity: 1; }
  70% { transform: scale(2.2); opacity: 0; }
  100% { transform: scale(0.9); opacity: 0; }
`;

/* ── Hooks ── */
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const useCounter = (target, duration = 1600, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const startT = performance.now();
    const tick = (now) => {
      const p = Math.min((now - startT) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return count;
};

/* ── Hero Components ── */
const HeroSection = styled.section`
  background: radial-gradient(circle at 50% -20%, #1e1b4b 0%, #090d16 50%, #030712 100%);
  min-height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 6rem 2rem 5rem;
`;

const HeroGridBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, transparent 75%);
  pointer-events: none;
`;

const GlowOrb1 = styled.div`
  position: absolute;
  top: 10%;
  left: 15%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 65%);
  border-radius: 50%;
  animation: ${pulseGlow} 8s ease-in-out infinite;
  pointer-events: none;
`;

const GlowOrb2 = styled.div`
  position: absolute;
  top: 20%;
  right: 12%;
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.14) 0%, transparent 65%);
  border-radius: 50%;
  animation: ${pulseGlow} 10s ease-in-out infinite reverse;
  pointer-events: none;
`;

const HeroHeader = styled.div`
  text-align: center;
  max-width: 900px;
  position: relative;
  z-index: 2;
  animation: ${fadeUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1);
`;

const PillBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(6, 182, 212, 0.08);
  border: 1px solid rgba(6, 182, 212, 0.25);
  color: #38bdf8;
  padding: 0.45rem 1.15rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1.75rem;
  backdrop-filter: blur(10px);

  .live-dot {
    position: relative;
    width: 8px;
    height: 8px;
    background: #06b6d4;
    border-radius: 50%;

    &::after {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: 50%;
      background: #06b6d4;
      animation: ${livePing} 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
  }
`;

const MainHeading = styled.h1`
  font-size: clamp(2.4rem, 6vw, 4.4rem);
  font-weight: 900;
  color: #f8fafc;
  line-height: 1.08;
  letter-spacing: -0.035em;
  margin-bottom: 1.5rem;

  .glow-text {
    background: linear-gradient(135deg, #38bdf8 0%, #a78bfa 50%, #34d399 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SubHeading = styled.p`
  font-size: clamp(1rem, 2vw, 1.18rem);
  color: #94a3b8;
  line-height: 1.8;
  max-width: 680px;
  margin: 0 auto 2.5rem;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 1.1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
`;

const GlowPrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.95rem 2.2rem;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%);
  background-size: 200% auto;
  color: #ffffff;
  border-radius: 12px;
  font-weight: 800;
  font-size: 0.98rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 40px rgba(6, 182, 212, 0.65);
  }
`;

const GlassSecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.95rem 2.2rem;
  background: rgba(255, 255, 255, 0.04);
  color: #f8fafc;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.98rem;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(12px);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(6, 182, 212, 0.4);
    transform: translateY(-3px);
  }
`;

/* ── Floating Mockup Dashboard in Hero ── */
const MockupContainer = styled.div`
  width: 100%;
  max-width: 1040px;
  position: relative;
  margin-top: 1rem;
  z-index: 2;
  perspective: 1000px;
`;

const MockupWindow = styled.div`
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(6, 182, 212, 0.15);
  backdrop-filter: blur(20px);
  transition: transform 0.5s ease;

  &:hover {
    border-color: rgba(6, 182, 212, 0.3);
  }
`;

const MockupTopBar = styled.div`
  background: rgba(3, 7, 18, 0.6);
  padding: 0.85rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  .dots {
    display: flex;
    gap: 6px;
    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #334155;
    }
  }

  .title-tag {
    font-size: 0.75rem;
    color: #64748b;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const MockupBody = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MockupSidebar = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .nav-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    font-size: 0.8rem;
    color: #94a3b8;
    background: transparent;

    &.active {
      background: rgba(6, 182, 212, 0.12);
      color: #38bdf8;
      border: 1px solid rgba(6, 182, 212, 0.25);
    }
  }
`;

const MockupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MockupStatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.85rem;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const MockupMiniStat = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 0.85rem;

  .label { font-size: 0.72rem; color: #94a3b8; margin-bottom: 0.25rem; }
  .val { font-size: 1.25rem; font-weight: 800; color: #f8fafc; font-family: 'JetBrains Mono', monospace; }
  .status { font-size: 0.68rem; color: #34d399; display: flex; align-items: center; gap: 0.2rem; margin-top: 0.25rem; }
`;

const MockupGraphBox = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.25rem;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .bar-chart {
    display: flex;
    align-items: flex-end;
    gap: 12px;
    height: 90px;
    padding-top: 0.5rem;
  }
  .bar {
    flex: 1;
    background: linear-gradient(180deg, #06b6d4 0%, rgba(6, 182, 212, 0.15) 100%);
    border-radius: 6px 6px 0 0;
    transition: height 0.3s;
    position: relative;
    &:hover { background: linear-gradient(180deg, #38bdf8 0%, rgba(56, 189, 248, 0.3) 100%); }
  }
`;

/* ── Floating Notification Cards around Hero ── */
const FloatingWidget = styled.div`
  position: absolute;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid ${props => props.$border || 'rgba(255, 255, 255, 0.12)'};
  border-radius: 16px;
  padding: 0.85rem 1.15rem;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6), 0 0 20px ${props => props.$glow || 'rgba(6, 182, 212, 0.2)'};
  backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  gap: 0.85rem;
  z-index: 3;
  animation: ${floatBadge} 6s ease-in-out infinite ${props => props.$delay || '0s'};

  @media (max-width: 860px) {
    display: none;
  }
`;

const FloatWA = styled(FloatingWidget)`
  top: 15%;
  left: -20px;
`;

const FloatAttend = styled(FloatingWidget)`
  bottom: 25%;
  right: -25px;
`;

/* ── Metric Bar Section ── */
const MetricsStrip = styled.section`
  padding: 3rem 2rem;
  background: #090d16;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
`;

const MetricsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled.div`
  text-align: center;
  padding: 1.5rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  transition: all 0.3s;

  &:hover {
    border-color: rgba(6, 182, 212, 0.3);
    background: rgba(255, 255, 255, 0.04);
    transform: translateY(-4px);
  }

  .number {
    font-size: 2.5rem;
    font-weight: 900;
    font-family: 'JetBrains Mono', monospace;
    background: linear-gradient(135deg, #38bdf8, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  .title {
    font-size: 0.85rem;
    font-weight: 700;
    color: #f8fafc;
    margin-bottom: 0.25rem;
  }
  .desc {
    font-size: 0.75rem;
    color: #64748b;
  }
`;

/* ── Bento Grid 2.0 Feature Section ── */
const BentoSection = styled.section`
  padding: 6.5rem 2rem;
  background: #030712;
  position: relative;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #c4b5fd;
  padding: 0.4rem 1.1rem;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1.25rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: #f8fafc;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  color: #94a3b8;
  font-size: 1.05rem;
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.8;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const BentoCard = styled.div`
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(16px);
  grid-column: ${props => props.$span ? `span ${props.$span}` : 'span 1'};

  @media (max-width: 960px) {
    grid-column: span 1;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, ${props => props.$glow || 'rgba(6, 182, 212, 0.1)'} 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.$border || 'rgba(6, 182, 212, 0.35)'};
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
    &::before { opacity: 1; }
  }
`;

const CardIconBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${props => props.$bg || 'rgba(6, 182, 212, 0.12)'};
  border: 1px solid ${props => props.$border || 'rgba(6, 182, 212, 0.25)'};
  color: ${props => props.$color || '#38bdf8'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: #f8fafc;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

const CardDesc = styled.p`
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.65;
`;


/* ── Interactive 7 Modules Tabs ── */
const ModulesSection = styled.section`
  padding: 6.5rem 2rem;
  background: #090d16;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.2rem;
  background: ${props => props.$active ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.03)'};
  border: 1px solid ${props => props.$active ? 'rgba(6, 182, 212, 0.4)' : 'rgba(255, 255, 255, 0.08)'};
  color: ${props => props.$active ? '#38bdf8' : '#94a3b8'};
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  transition: all 0.25s ease;

  &:hover {
    color: #f8fafc;
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.15);
  }
`;

const ActiveModuleShowcase = styled.div`
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  align-items: center;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

const ModuleInfo = styled.div`
  .mod-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    font-weight: 800;
    color: #06b6d4;
    margin-bottom: 0.5rem;
  }
  .mod-title {
    font-size: 1.85rem;
    font-weight: 900;
    color: #f8fafc;
    letter-spacing: -0.02em;
    margin-bottom: 1rem;
  }
  .mod-desc {
    color: #94a3b8;
    font-size: 0.98rem;
    line-height: 1.8;
    margin-bottom: 1.75rem;
  }
`;

const FeatureCheckList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: #cbd5e1;
  }
`;

const ModuleVisualPreview = styled.div`
  background: rgba(3, 7, 18, 0.8);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 18px;
  padding: 1.75rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%; right: -50%;
    width: 200%; height: 200%;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 60%);
    pointer-events: none;
  }
`;

const LiveFeaturePreviewCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .item-title { font-size: 0.85rem; font-weight: 700; color: #f8fafc; }
  .item-sub { font-size: 0.75rem; color: #64748b; }
  .item-tag {
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.25rem 0.6rem;
    border-radius: 50px;
    background: rgba(16, 185, 129, 0.15);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.3);
  }
`;

/* ── CTA Banner ── */
const CTABoxSection = styled.section`
  padding: 6rem 2rem 7rem;
  background: #030712;
  position: relative;
`;

const CTABox = styled.div`
  background: radial-gradient(circle at center, #1e1b4b 0%, #0f172a 70%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 28px;
  padding: 4.5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 60px rgba(6, 182, 212, 0.15);

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 20%; right: 20%;
    height: 1px;
    background: linear-gradient(90deg, transparent, #06b6d4, #8b5cf6, transparent);
  }
`;

/* ── MODULES DATA ── */
const MODULES_DATA = [
  {
    id: 'master',
    num: '01',
    name: 'Data Induk & Sekolah',
    icon: SchoolIcon,
    title: 'Pusat Manajemen Master Data Sekolah',
    desc: 'Kelola seluruh entitas sekolah dari satu dashboard sentral. Integrasi otomatis antara rombel, data NISN/NUPTK, tahun ajaran, dan status mutasi siswa.',
    features: ['Profil Lengkap Sekolah', 'Tahun Ajaran & Semester', 'Rombel & Ruang Kelas', 'Data Siswa & Wali', 'Data Guru & Pegawai', 'Riwayat Mutasi & Arsip'],
    preview: [
      { title: 'Tahun Ajaran 2024/2025 Genap', sub: 'Semester Aktif • 36 Rombel', tag: 'Aktif' },
      { title: 'Data Siswa Terverifikasi', sub: '1,248 Siswa • Sinkron NISN', tag: '100% Valid' },
      { title: 'Master PTK & Guru Mata Pelajaran', sub: '64 Guru & Staff Pegawai', tag: 'Tersinkron' },
    ]
  },
  {
    id: 'kbm',
    num: '02',
    name: 'KBM & Rapor Digital',
    icon: BookOpenIcon,
    title: 'Aktivitas Belajar & e-Rapor Otomatis',
    desc: 'Platform terpadu untuk materi digital, ujian online (CBT), bank soal terdistribusi, serta generate e-Rapor Kurikulum Merdeka secara instan.',
    features: ['Ujian Online / CBT', 'Bank Soal Otomatis', 'Input Nilai Formatif & Sumatif', 'Cetak Rapor Digital PDF', 'Jadwal Pelajaran Real-time', 'Presensi Harian QR/Mobile'],
    preview: [
      { title: 'CBT Ujian Tengah Semester', sub: 'Mata Pelajaran: Matematika • 120 Menit', tag: 'Live CBT' },
      { title: 'Generate e-Rapor Kurikulum Merdeka', sub: 'Format Otomatis • Cetak Masal PDF', tag: 'Siap Cetak' },
      { title: 'Jadwal & Agenda Mengajar Guru', sub: 'Kelas X-MIPA-1 • Bab 4 Aljabar', tag: 'Terjadwal' },
    ]
  },
  {
    id: 'finance',
    num: '03',
    name: 'Keuangan & SPP',
    icon: WalletIcon,
    title: 'Otomasi Tagihan & Notifikasi Pembayaran',
    desc: 'Lupakan pencatatan manual SPP yang rawan selisih. Sistem menerbitkan invoice otomatis, melacak tunggakan, dan mengirim bukti bayar ke WhatsApp.',
    features: ['Tagihan SPP & Uang Gedung', 'Kwitansi Digital Otomatis', 'Pengingat Otomatis via WA', 'Rekonsiliasi Kas Masuk', 'Buku Kas & Jurnal Umum', 'Laporan Keuangan Real-time'],
    preview: [
      { title: 'Tagihan SPP Bulan Berjalan', sub: 'Terbit Otomatis untuk Semua Siswa', tag: 'Auto-Bill' },
      { title: 'Notifikasi WhatsApp Tagihan Terkirim', sub: 'Terkirim ke 1,248 No. Orang Tua', tag: 'Terkirim' },
      { title: 'Rekap Pembayaran & Kas Harian', sub: 'Total Masuk: Rp 48.500.000', tag: 'Realtime' },
    ]
  },
  {
    id: 'bk',
    num: '04',
    name: 'Bimbingan Konseling',
    icon: UsersIcon,
    title: 'Pemantauan Karakter & Konseling Terarah',
    desc: 'Dokumentasikan perkembangan sikap, poin pelanggaran, konseling privat, serta koordinasi rahasia dengan wali murid untuk pembinaan intensif.',
    features: ['Buku Kasus Siswa & Poin', 'Jadwal Konseling Privat', 'Riwayat Pembinaan Siswa', 'Notifikasi Rahasia ke Ortu', 'Rekomendasi Minat Bakat', 'Lampiran Berita Acara'],
    preview: [
      { title: 'Sesi Konseling Minat Bakat', sub: 'Siswa: Ahmad Fauzi (XII-IPA-2)', tag: 'Terjadwal' },
      { title: 'Log Poin Kedisiplinan & Prestasi', sub: 'Pemberian Apresiasi Juara Olimpiade', tag: '+50 Poin' },
      { title: 'Koordinasi Wali Murid & BK', sub: 'Notifikasi Konsultasi Daring', tag: 'Terhubung' },
    ]
  },
  {
    id: 'perpus',
    num: '05',
    name: 'Perpustakaan Digital',
    icon: LibraryIcon,
    title: 'Katalog Buku & Sirkulasi Barcode',
    desc: 'Manajemen ribuan koleksi buku fisik dan e-book. Dilengkapi pemindai barcode sirkulasi, pelacakan denda, dan inventaris berkala.',
    features: ['Katalog E-Book & Fisik', 'Sirkulasi Peminjaman Barcode', 'Otomasi Denda & Jatuh Tempo', 'Statistik Pembaca Teraktif', 'Label Barcode Otomatis', 'Laporan Inventaris Stok'],
    preview: [
      { title: 'Peminjaman Buku: Fisika Dasar', sub: 'Barcode ID #BK-8842 • Jatuh Tempo 7 Hari', tag: 'Dipinjam' },
      { title: 'Koleksi E-Book Baru Ditambahkan', sub: '250 Judul Kurikulum Merdeka', tag: 'Digital' },
      { title: 'Otomasi Notifikasi Pengembalian', sub: 'Kirim Pengingat WA 1 Hari Sebelum', tag: 'Otomatis' },
    ]
  },
  {
    id: 'ppdb',
    num: '06',
    name: 'PPDB Online',
    icon: UserCheckIcon,
    title: 'Penerimaan Siswa Baru Multi Jalur',
    desc: 'Portal pendaftaran calon siswa online. Verifikasi berkas mandiri, ujian seleksi daring, perangkingan nilai, dan konfirmasi daftar ulang.',
    features: ['Portal Formulir Publik', 'Verifikasi Dokumen Digital', 'Jalur Zonasi, Prestasi & Afirmasi', 'Ujian Seleksi Online', 'Pengumuman Hasil Kelulusan', 'Konfirmasi Daftar Ulang'],
    preview: [
      { title: 'Gelombang 1 PPDB Online Dibuka', sub: 'Total 480 Pendaftar Hari Ini', tag: 'Open PPDB' },
      { title: 'Verifikasi Dokumen Digital', sub: 'Ijazah, KK, Akta Lahir Siap Review', tag: 'Tervalidasi' },
      { title: 'Perangkingan Nilai & Zonasi', sub: 'Algoritma Seleksi Kuota Otomatis', tag: 'Selesai' },
    ]
  },
  {
    id: 'spk',
    num: '07',
    name: 'SPK & Analisis AI',
    icon: SparklesIcon,
    title: 'Sistem Pendukung Keputusan Berbasis Data',
    desc: 'Gunakan metode analitik modern (SAW, TOPSIS) untuk pemilihan siswa teladan, penerima beasiswa, dan deteksi dini siswa butuh intervensi.',
    features: ['Perhitungan SAW & TOPSIS', 'Rekomendasi Beasiswa', 'Deteksi Dini Drop-Out', 'Analisis Tren Nilai', 'Kriteria Bobot Dinamis', 'Export Hasil Rekomendasi'],
    preview: [
      { title: 'Pemilihan Siswa Teladan 2025', sub: 'Metode TOPSIS • 12 Kriteria Penilaian', tag: 'Akurasi 99%' },
      { title: 'Rekomendasi Beasiswa Prestasi', sub: 'Ranking 1-10 Calon Penerima Terpilih', tag: 'Terpilih' },
      { title: 'Deteksi Penurunan Prestasi Akademik', sub: 'Early Warning System untuk Wali Kelas', tag: 'Siap Pantau' },
    ]
  }
];

/* ── Main Home Component ── */
const Home = () => {
  const [activeTab, setActiveTab] = useState('master');
  const [metricsRef, metricsInView] = useInView(0.2);

  const countStudents = useCounter(1250, 1600, metricsInView);
  const countFeatures = useCounter(80, 1600, metricsInView);
  const countSpeed = useCounter(99, 1600, metricsInView);
  const countSatisfaction = useCounter(100, 1600, metricsInView);

  const selectedModule = MODULES_DATA.find(m => m.id === activeTab) || MODULES_DATA[0];
  const IconComponent = selectedModule.icon;

  return (
    <>
      {/* ── HERO SECTION ── */}
      <HeroSection>
        <HeroGridBackground />
        <GlowOrb1 />
        <GlowOrb2 />

        <HeroHeader>
          <PillBadge>
            <span className="live-dot" />
            <span>Satu Ekosistem Sekolah Terpadu Masa Depan</span>
          </PillBadge>

          <MainHeading>
            Revolusi Manajemen Sekolah <br />
            <span className="glow-text">Modern, Otomatis & Cerdas.</span>
          </MainHeading>

          <SubHeading>
            Satukan operasional sekolah Anda dalam satu platform SaaS B2B terintegrasi. 
            Dari master data, KBM, ujian digital, SPP otomatis via WhatsApp, hingga sistem rekomendasi berbasis SPK.
          </SubHeading>

          <HeroActions>
            <GlowPrimaryBtn href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
              <span>Coba Demo Gratis</span>
              <ArrowUpRightIcon size={18} />
            </GlowPrimaryBtn>

            <GlassSecondaryBtn href="/pillars">
              <span>Eksplor 7 Modul</span>
              <ArrowRightIcon size={18} />
            </GlassSecondaryBtn>
          </HeroActions>
        </HeroHeader>
        {/* ── Interactive Dashboard Mockup Preview ── */}
        <MockupContainer>
          <FloatWA $glow="rgba(16, 185, 129, 0.25)" $border="rgba(16, 185, 129, 0.3)" $delay="0s">
            <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '0.5rem', borderRadius: '10px', color: '#34d399' }}>
              <WhatsAppIcon size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#f8fafc' }}>WhatsApp Otomatis</div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Tagihan SPP & Rapor Terkirim</div>
            </div>
          </FloatWA>

          <FloatAttend $glow="rgba(6, 182, 212, 0.25)" $border="rgba(6, 182, 212, 0.3)" $delay="1.5s">
            <div style={{ background: 'rgba(6, 182, 212, 0.2)', padding: '0.5rem', borderRadius: '10px', color: '#38bdf8' }}>
              <ActivityIcon size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#f8fafc' }}>Kehadiran Real-time</div>
              <div style={{ fontSize: '0.7rem', color: '#34d399' }}>98.4% Siswa Hadir Hari Ini</div>
            </div>
          </FloatAttend>

          <MockupWindow>
            <MockupTopBar>
              <div className="dots"><span /><span /><span /></div>
              <div className="title-tag">app.akademihub.id/dashboard</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontSize: '0.75rem', fontWeight: 700 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399' }} /> Live System
              </div>
            </MockupTopBar>

            <MockupBody>
              <MockupSidebar>
                <div className="nav-item active">
                  <BarChartIcon size={16} /> <span>Dashboard Ringkasan</span>
                </div>
                <div className="nav-item">
                  <SchoolIcon size={16} /> <span>Data Induk Siswa</span>
                </div>
                <div className="nav-item">
                  <BookOpenIcon size={16} /> <span>e-Rapor & Ujian</span>
                </div>
                <div className="nav-item">
                  <WalletIcon size={16} /> <span>Keuangan & SPP</span>
                </div>
                <div className="nav-item">
                  <SparklesIcon size={16} /> <span>SPK Decision</span>
                </div>
              </MockupSidebar>

              <MockupContent>
                <MockupStatsRow>
                  <MockupMiniStat>
                    <div className="label">Total Siswa Aktif</div>
                    <div className="val">1,248</div>
                    <div className="status"><CheckCircleIcon size={12} /> 100% Terdaftar</div>
                  </MockupMiniStat>
                  <MockupMiniStat>
                    <div className="label">Koleksi SPP Bulan Ini</div>
                    <div className="val">94.8%</div>
                    <div className="status"><CheckCircleIcon size={12} /> Auto WhatsApp</div>
                  </MockupMiniStat>
                  <MockupMiniStat>
                    <div className="label">Rapor Ter-generate</div>
                    <div className="val">100%</div>
                    <div className="status"><CheckCircleIcon size={12} /> Kurikulum Merdeka</div>
                  </MockupMiniStat>
                </MockupStatsRow>

                <MockupGraphBox>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc' }}>Statistik Kehadiran & Nilai Siswa</span>
                    <span style={{ fontSize: '0.7rem', color: '#06b6d4', fontWeight: 700 }}>Live Feed</span>
                  </div>
                  <div className="bar-chart">
                    <div className="bar" style={{ height: '50%' }} />
                    <div className="bar" style={{ height: '75%' }} />
                    <div className="bar" style={{ height: '60%' }} />
                    <div className="bar" style={{ height: '90%' }} />
                    <div className="bar" style={{ height: '85%' }} />
                    <div className="bar" style={{ height: '95%' }} />
                    <div className="bar" style={{ height: '80%' }} />
                  </div>
                </MockupGraphBox>
              </MockupContent>
            </MockupBody>
          </MockupWindow>
        </MockupContainer>
      </HeroSection>

      {/* ── METRICS STRIP ── */}
      <MetricsStrip ref={metricsRef}>
        <MetricsContainer>
          <MetricCard>
            <div className="number">{countFeatures}+</div>
            <div className="title">Fitur Siap Pakai</div>
            <div className="desc">Tercakup dalam 7 modul inti sekolah</div>
          </MetricCard>

          <MetricCard>
            <div className="number">{countStudents}+</div>
            <div className="title">Kapasitas Siswa/Sekolah</div>
            <div className="desc">Arsitektur multi-role yang scalable</div>
          </MetricCard>

          <MetricCard>
            <div className="number">{countSpeed}%</div>
            <div className="title">Uptime & Kecepatan</div>
            <div className="desc">Akses cepat tanpa perlu pasang server lokal</div>
          </MetricCard>

          <MetricCard>
            <div className="number">{countSatisfaction}%</div>
            <div className="title">Automated Notification</div>
            <div className="desc">Terhubung langsung ke WhatsApp Orang Tua</div>
          </MetricCard>
        </MetricsContainer>
      </MetricsStrip>

      {/* ── BENTO GRID 2.0 SPOTLIGHT ── */}
      <BentoSection>
        <Container>
          <SectionHeader>
            <SectionBadge>
              <ZapIcon size={14} />
              <span>Arsitektur & Keunggulan Modern</span>
            </SectionBadge>
            <SectionTitle>Mengapa AkademiHub Lebih Unggul?</SectionTitle>
            <SectionSubtitle>
              Dirancang khusus menjawab permasalahan kompleks manajemen sekolah Indonesia dengan teknologi enterprise modern.
            </SectionSubtitle>
          </SectionHeader>

          <BentoGrid>
            <BentoCard $span={2} $glow="rgba(6, 182, 212, 0.15)" $border="rgba(6, 182, 212, 0.35)">
              <CardIconBox $bg="rgba(6, 182, 212, 0.12)" $color="#38bdf8">
                <WhatsAppIcon size={24} />
              </CardIconBox>
              <CardTitle>WhatsApp Gateway Automation</CardTitle>
              <CardDesc>
                Kirim tagihan SPP, slip pembayaran, pengumuman darurat, absensi kehadiran siswa, dan tautan e-Rapor secara instan langsung ke nomor WhatsApp orang tua tanpa biaya SMS manual.
              </CardDesc>
            </BentoCard>

            <BentoCard $glow="rgba(139, 92, 246, 0.15)" $border="rgba(139, 92, 246, 0.35)">
              <CardIconBox $bg="rgba(139, 92, 246, 0.12)" $color="#a78bfa" $border="rgba(139, 92, 246, 0.25)">
                <SparklesIcon size={24} />
              </CardIconBox>
              <CardTitle>SPK & Analisis AI</CardTitle>
              <CardDesc>
                Sistem Pendukung Keputusan otomatis dengan metode SAW dan TOPSIS untuk penentuan beasiswa dan siswa teladan objektif.
              </CardDesc>
            </BentoCard>

            <BentoCard $glow="rgba(16, 185, 129, 0.15)" $border="rgba(16, 185, 129, 0.35)">
              <CardIconBox $bg="rgba(16, 185, 129, 0.12)" $color="#34d399" $border="rgba(16, 185, 129, 0.25)">
                <BookOpenIcon size={24} />
              </CardIconBox>
              <CardTitle>e-Rapor Kurikulum Merdeka</CardTitle>
              <CardDesc>
                Format penilaian formatif, sumatif, dan deskripsi capaian kompetensi terstandarisasi. Sekali klik untuk cetak PDF masal.
              </CardDesc>
            </BentoCard>

            <BentoCard $span={2} $glow="rgba(56, 189, 248, 0.15)" $border="rgba(56, 189, 248, 0.35)">
              <CardIconBox $bg="rgba(56, 189, 248, 0.12)" $color="#38bdf8" $border="rgba(56, 189, 248, 0.25)">
                <ShieldCheckIcon size={24} />
              </CardIconBox>
              <CardTitle>Multi-Role & Akses Terproteksi</CardTitle>
              <CardDesc>
                Akses khusus dan terisolasi untuk 5 jenis pengguna: Super Admin, Kepala Sekolah, Guru Pengajar, Siswa, dan Orang Tua Murid. Data terenkripsi dan aman.
              </CardDesc>
            </BentoCard>
          </BentoGrid>
        </Container>
      </BentoSection>

      {/* ── INTERACTIVE 7 MODULES SHOWCASE ── */}
      <ModulesSection>
        <Container>
          <SectionHeader>
            <SectionBadge>
              <LayersIcon size={14} />
              <span>7 Modul Lengkap</span>
            </SectionBadge>
            <SectionTitle>Satu Aplikasi untuk Seluruh Kebutuhan Sekolah</SectionTitle>
            <SectionSubtitle>
              Semua modul terhubung secara sinergis tanpa perlu integrasi rumit pihak ketiga.
            </SectionSubtitle>
          </SectionHeader>

          <TabsWrapper>
            {MODULES_DATA.map((mod) => {
              const TabIcon = mod.icon;
              return (
                <TabButton
                  key={mod.id}
                  $active={activeTab === mod.id}
                  onClick={() => setActiveTab(mod.id)}
                >
                  <TabIcon size={16} />
                  <span>{mod.name}</span>
                </TabButton>
              );
            })}
          </TabsWrapper>

          <ActiveModuleShowcase>
            <ModuleInfo>
              <div className="mod-num">MODUL {selectedModule.num}</div>
              <h3 className="mod-title">{selectedModule.title}</h3>
              <p className="mod-desc">{selectedModule.desc}</p>

              <FeatureCheckList>
                {selectedModule.features.map((feat, idx) => (
                  <li key={idx}>
                    <CheckCircleIcon size={16} color="#06b6d4" />
                    <span>{feat}</span>
                  </li>
                ))}
              </FeatureCheckList>

              <GlowPrimaryBtn href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex' }}>
                <span>Coba Modul Ini di Demo</span>
                <ArrowUpRightIcon size={16} />
              </GlowPrimaryBtn>
            </ModuleInfo>

            <ModuleVisualPreview>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <IconComponent size={20} color="#06b6d4" />
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f8fafc' }}>
                  Live Preview: {selectedModule.name}
                </span>
              </div>

              {selectedModule.preview.map((item, idx) => (
                <LiveFeaturePreviewCard key={idx}>
                  <div>
                    <div className="item-title">{item.title}</div>
                    <div className="item-sub">{item.sub}</div>
                  </div>
                  <span className="item-tag">{item.tag}</span>
                </LiveFeaturePreviewCard>
              ))}
            </ModuleVisualPreview>
          </ActiveModuleShowcase>
        </Container>
      </ModulesSection>

      {/* ── CTA BANNER ── */}
      <CTABoxSection>
        <Container>
          <CTABox>
            <PillBadge style={{ marginBottom: '1.5rem' }}>
              <SparklesIcon size={14} />
              <span>Mulai Transformasi Digital Sekarang</span>
            </PillBadge>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, color: '#f8fafc', letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
              Siap Membawa Sekolah Anda ke Era Modern?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.8' }}>
              Akses demo langsung AkademiHub tanpa syarat kartu kredit. Rasakan kemudahan manajemen sekolah serba otomatis hari ini.
            </p>
            <HeroActions style={{ marginBottom: 0 }}>
              <GlowPrimaryBtn href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
                <span>Buka Demo AkademiHub ↗</span>
              </GlowPrimaryBtn>
              <GlassSecondaryBtn href="/contact">
                <span>Hubungi Tim Sales</span>
                <ArrowRightIcon size={18} />
              </GlassSecondaryBtn>
            </HeroActions>
          </CTABox>
        </Container>
      </CTABoxSection>
    </>
  );
};

export default Home;
