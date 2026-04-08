import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

/* ── Animations ── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

/* ── Hero ── */
const HeroSection = styled.section`
  background: linear-gradient(160deg, #0a0f1e 0%, #0f172a 40%, #1a0a2e 100%);
  min-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 7rem 2rem 5rem;
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -10%;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, transparent 60%);
    border-radius: 50%;
    animation: ${pulse} 6s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15%;
    right: -5%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 60%);
    border-radius: 50%;
    animation: ${pulse} 8s ease-in-out infinite reverse;
  }
`;

const HeroOrb = styled.div`
  position: absolute;
  top: 30%;
  right: 15%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 65%);
  border-radius: 50%;
  animation: ${float} 7s ease-in-out infinite;
  pointer-events: none;
`;

const HeroGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 860px;
  position: relative;
  z-index: 1;
  animation: ${fadeUp} 0.8s ease-out;
`;

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(37, 99, 235, 0.12);
  border: 1px solid rgba(37, 99, 235, 0.3);
  color: #93c5fd;
  padding: 0.45rem 1.1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;

  .dot {
    width: 7px;
    height: 7px;
    background: #22d3ee;
    border-radius: 50%;
    animation: ${blink} 1.8s ease-in-out infinite;
    box-shadow: 0 0 6px #22d3ee;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.25rem);
  font-weight: 900;
  color: white;
  line-height: 1.1;
  letter-spacing: -2px;
  margin-bottom: 1.75rem;

  .line2 {
    display: block;
    background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 45%, #34d399 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientMove} 4s ease infinite;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.85;
  max-width: 640px;
  margin: 0 auto 2.75rem;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4.5rem;
`;

const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: white;
  border-radius: 12px;
  font-weight: 800;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 6px 28px rgba(37, 99, 235, 0.45);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(37, 99, 235, 0.55);
    &::before { opacity: 1; }
  }
`;

const BtnSecondary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: white;
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-3px);
  }
`;

const HeroStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
  animation: ${fadeUp} 1s ease-out 0.3s both;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 1.5rem 2rem;
  max-width: 680px;
  margin: 0 auto;
  backdrop-filter: blur(12px);

  @media (max-width: 640px) {
    gap: 0;
    padding: 1.25rem 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  flex: 1;
  min-width: 120px;
  padding: 0.5rem 1rem;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: rgba(255,255,255,0.1);
  }

  .num {
    font-size: 2rem;
    font-weight: 900;
    background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 0.35rem;
  }

  .label {
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.38);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    min-width: 80px;
    .num { font-size: 1.5rem; }
  }
`;

/* ── Trust Strip ── */
const TrustSection = styled.section`
  padding: 2.5rem 2rem;
  background: white;
  border-bottom: 1px solid #f1f5f9;
`;

const TrustInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const TrustLabel = styled.p`
  text-align: center;
  font-size: 0.72rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const TrustBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.625rem;
`;

const TrustBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #475569;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
    color: #1e293b;
    transform: translateY(-1px);
  }

  .icon { font-size: 1rem; }
`;

/* ── Why Section ── */
const WhySection = styled.section`
  padding: 6rem 2rem;
  background: #f8fafc;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionEyebrow = styled.div`
  text-align: center;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  color: #2563eb;
  padding: 0.35rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
`;

const SectionEyebrowWrap = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 1.25rem;
  letter-spacing: -1px;
  line-height: 1.2;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 1.05rem;
  max-width: 580px;
  margin: 0 auto 3.5rem;
  line-height: 1.8;
`;

const FeatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const FeatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 18px;
  border: 1px solid #e2e8f0;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.$gradient || 'linear-gradient(90deg, #2563eb, #7c3aed)'};
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.1);
    border-color: transparent;
    &::before { opacity: 1; }
  }
`;

const FeatIconWrap = styled.div`
  width: 56px;
  height: 56px;
  background: ${props => props.$bg || '#dbeafe'};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin-bottom: 1.25rem;
`;

const FeatTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.625rem;
`;

const FeatDesc = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.75;
`;

/* ── Modules Section ── */
const ModulesSection = styled.section`
  padding: 6rem 2rem;
  background: #0f172a;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent);
  }
`;

const ModulesBg = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: -5%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.07) 0%, transparent 65%);
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    right: -5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.07) 0%, transparent 65%);
    border-radius: 50%;
  }
`;

const ModulesSectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  font-weight: 900;
  color: white;
  margin-bottom: 1.25rem;
  letter-spacing: -1px;
  line-height: 1.2;
`;

const ModulesSectionSub = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.45);
  font-size: 1.05rem;
  max-width: 540px;
  margin: 0 auto 3.5rem;
  line-height: 1.8;
`;

const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
`;

const ModuleCard = styled.div`
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  padding: 1.75rem;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${props => props.$color}, ${props => props.$color2 || props.$color});
    opacity: 0.6;
    transition: opacity 0.3s;
  }

  &:hover {
    background: rgba(36, 51, 73, 0.9);
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
    border-color: ${props => props.$color}30;
    &::before { opacity: 1; }
  }
`;

const ModuleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 1rem;
`;

const ModuleIcon = styled.div`
  width: 44px;
  height: 44px;
  background: ${props => props.$color}18;
  border: 1px solid ${props => props.$color}25;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ModuleTitle = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  color: white;
  line-height: 1.3;
`;

const ModuleNum = styled.div`
  font-size: 0.65rem;
  font-weight: 800;
  color: ${props => props.$color};
  letter-spacing: 0.5px;
  opacity: 0.7;
  margin-bottom: 0.1rem;
`;

const ModuleDesc = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.7;
  margin-bottom: 1rem;
`;

const ModuleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

const ModuleTag = styled.span`
  font-size: 0.7rem;
  background: ${props => props.$color}12;
  color: ${props => props.$color};
  border: 1px solid ${props => props.$color}25;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  font-weight: 700;
`;

const ModulesViewAll = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
  color: #60a5fa;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(96, 165, 250, 0.25);
  border-radius: 10px;
  background: rgba(96, 165, 250, 0.06);

  &:hover {
    color: #93c5fd;
    border-color: rgba(96, 165, 250, 0.4);
    background: rgba(96, 165, 250, 0.1);
    transform: translateX(3px);
  }
`;

const ModulesFooter = styled.div`
  text-align: center;
`;

/* ── Testimonial / Social Proof ── */
const ProofSection = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const ProofGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
`;

const ProofCard = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 2rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.08);
    border-color: #cbd5e1;
  }
`;

const ProofQuote = styled.p`
  font-size: 0.95rem;
  color: #334155;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const ProofAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ProofAvatar = styled.div`
  width: 44px;
  height: 44px;
  background: ${props => props.$bg || 'linear-gradient(135deg, #2563eb, #7c3aed)'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ProofName = styled.div`
  font-weight: 800;
  font-size: 0.9rem;
  color: #0f172a;
`;

const ProofRole = styled.div`
  font-size: 0.78rem;
  color: #94a3b8;
  font-weight: 500;
`;

/* ── CTA Section ── */
const CTASection = styled.section`
  padding: 7rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  position: relative;
  overflow: hidden;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const CTAContent = styled.div`
  max-width: 640px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: white;
  margin-bottom: 1.25rem;
  letter-spacing: -1px;
  line-height: 1.2;
`;

const CTASub = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2.75rem;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTAPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: white;
  color: #1e40af;
  border-radius: 12px;
  font-weight: 800;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3);
  }
`;

const CTASecondary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
  }
`;

const Home = () => {
  const features = [
    {
      icon: '🔗',
      bg: '#dbeafe',
      gradient: 'linear-gradient(90deg, #2563eb, #3b82f6)',
      title: 'Semua Data Terhubung Otomatis',
      desc: 'Nilai, absensi, tagihan, dan laporan saling terhubung. Tidak perlu input ulang data yang sama di tempat berbeda.',
    },
    {
      icon: '⚡',
      bg: '#ede9fe',
      gradient: 'linear-gradient(90deg, #7c3aed, #a78bfa)',
      title: 'Informasi Langsung Diperbarui',
      desc: 'Saat guru mencatat kehadiran atau nilai, orang tua dan kepala sekolah bisa langsung melihatnya tanpa menunggu.',
    },
    {
      icon: '💬',
      bg: '#d1fae5',
      gradient: 'linear-gradient(90deg, #059669, #10b981)',
      title: 'Notifikasi WhatsApp ke Orang Tua',
      desc: 'Tagihan, kehadiran, dan pengumuman penting dikirim otomatis ke WhatsApp orang tua. Tidak ada yang terlewat.',
    },
    {
      icon: '🔐',
      bg: '#fee2e2',
      gradient: 'linear-gradient(90deg, #dc2626, #f87171)',
      title: 'Akses Sesuai Peran Masing-Masing',
      desc: 'Kepala sekolah, guru, siswa, dan orang tua masing-masing hanya melihat informasi yang relevan untuk mereka.',
    },
    {
      icon: '📊',
      bg: '#fef3c7',
      gradient: 'linear-gradient(90deg, #d97706, #fbbf24)',
      title: 'Laporan & Peringatan Otomatis',
      desc: 'Sistem mendeteksi siswa yang perlu perhatian lebih, menyusun peringkat, dan membuat laporan tanpa kerja manual.',
    },
    {
      icon: '📱',
      bg: '#cffafe',
      gradient: 'linear-gradient(90deg, #0891b2, #22d3ee)',
      title: 'Nyaman di HP maupun Komputer',
      desc: 'Bisa diakses dari mana saja, kapan saja. Tampilan menyesuaikan layar HP, tablet, maupun komputer.',
    },
  ];

  const modules = [
    {
      num: '01', icon: '🏫', title: 'Data Induk Sekolah',
      desc: 'Kelola data guru, siswa, kelas, dan orang tua dalam satu tempat yang rapi dan mudah dicari.',
      color: '#3b82f6', color2: '#60a5fa',
      tags: ['Data Guru', 'Data Siswa', 'Manajemen Kelas'],
    },
    {
      num: '02', icon: '📚', title: 'Kegiatan Belajar Mengajar',
      desc: 'Materi, tugas, ujian online, nilai, rapor digital, absensi, dan jadwal pelajaran dalam satu platform.',
      color: '#7c3aed', color2: '#a78bfa',
      tags: ['Ujian Online', 'Rapor Digital', 'Absensi'],
    },
    {
      num: '03', icon: '💳', title: 'Pembayaran & Keuangan',
      desc: 'Tagihan SPP otomatis, pencatatan pembayaran, dan laporan keuangan yang transparan untuk sekolah.',
      color: '#059669', color2: '#34d399',
      tags: ['Tagihan SPP', 'Notif WhatsApp', 'Laporan'],
    },
    {
      num: '04', icon: '🤝', title: 'Bimbingan & Konseling',
      desc: 'Catatan perkembangan siswa, jadwal konseling, dan komunikasi dengan orang tua secara terstruktur.',
      color: '#dc2626', color2: '#f87171',
      tags: ['Catatan Kasus', 'Sesi Konseling', 'Orang Tua'],
    },
    {
      num: '05', icon: '📖', title: 'Perpustakaan Digital',
      desc: 'Katalog buku, peminjaman, pengembalian, dan catatan denda dikelola secara digital dan efisien.',
      color: '#d97706', color2: '#fbbf24',
      tags: ['Katalog Buku', 'Peminjaman', 'Denda'],
    },
    {
      num: '06', icon: '📝', title: 'Pendaftaran Siswa Baru',
      desc: 'Calon siswa bisa mendaftar online 24 jam. Dokumen diverifikasi digital, hasil seleksi diumumkan otomatis.',
      color: '#0891b2', color2: '#22d3ee',
      tags: ['Daftar Online', 'Verifikasi Dokumen', 'Seleksi'],
    },
    {
      num: '07', icon: '🎯', title: 'Analisis & Rekomendasi Cerdas',
      desc: 'Sistem mendeteksi siswa berisiko, memberi rekomendasi beasiswa, dan menyajikan data penting untuk pengambilan keputusan.',
      color: '#be123c', color2: '#fb7185',
      tags: ['Peringatan Dini', 'Rekomendasi', 'Dashboard'],
    },
    {
      num: '08', icon: '🗓️', title: 'Kalender Akademik',
      desc: 'Jadwal kegiatan sekolah, hari libur, dan event penting tersusun rapi dan bisa dilihat semua pihak.',
      color: '#6366f1', color2: '#818cf8',
      tags: ['Jadwal Kegiatan', 'Hari Libur', 'Event Sekolah'],
    },
    {
      num: '09', icon: '⚽', title: 'Ekstrakurikuler',
      desc: 'Kelola kegiatan ekstrakurikuler, pendaftaran siswa, dan pantau keaktifan peserta secara digital.',
      color: '#f59e0b', color2: '#fbbf24',
      tags: ['Daftar Ekskul', 'Pendaftaran', 'Keaktifan'],
    },
    {
      num: '10', icon: '🏛️', title: 'Organisasi Siswa',
      desc: 'Catat struktur organisasi siswa, jabatan pengurus, dan keanggotaan aktif di setiap periode.',
      color: '#8b5cf6', color2: '#a78bfa',
      tags: ['Struktur Organisasi', 'Jabatan', 'Keanggotaan'],
    },
    {
      num: '11', icon: '🧠', title: 'Tes Minat & Bakat',
      desc: 'Bantu siswa mengenali potensi diri melalui tes terstruktur dengan hasil dan rekomendasi yang jelas.',
      color: '#ec4899', color2: '#f472b6',
      tags: ['Tes Online', 'Hasil Tes', 'Rekomendasi'],
    },
    {
      num: '12', icon: '🔍', title: 'Profil Risiko Siswa 360°',
      desc: 'Analisis kondisi siswa dari 5 dimensi: akademik, kehadiran, perilaku, keuangan, dan sosial untuk deteksi dini.',
      color: '#be123c', color2: '#f43f5e',
      tags: ['5 Dimensi', 'Deteksi Dini', 'Profil Siswa'],
    },
  ];

  const trustBadges = [
    { icon: '⚡', label: 'Aplikasi Cepat & Ringan' },
    { icon: '🔒', label: 'Data Aman & Terenkripsi' },
    { icon: '📱', label: 'Bisa di HP & Laptop' },
    { icon: '🔄', label: 'Info Langsung Diperbarui' },
    { icon: '💬', label: 'Notifikasi WhatsApp Otomatis' },
    { icon: '👥', label: '4 Jenis Pengguna' },
    { icon: '📊', label: 'Laporan Otomatis' },
    { icon: '🌐', label: 'Akses 24 Jam Online' },
    { icon: '🛡️', label: 'Hak Akses Terkontrol' },
    { icon: '📡', label: 'Update Data Real-Time' },
  ];

  const testimonials = [
    {
      quote: '"Sekarang orang tua langsung dapat notifikasi WhatsApp kalau anaknya tidak masuk. Tidak perlu telepon-teleponan lagi."',
      name: 'Kepala Sekolah',
      role: 'SMA Negeri, Jawa Tengah',
      avatar: '👨‍💼',
      bg: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    },
    {
      quote: '"Rapor digital sangat membantu. Orang tua bisa lihat nilai anak kapan saja dari HP mereka. Tidak perlu tunggu akhir semester."',
      name: 'Wali Kelas',
      role: 'SMP Swasta, Jakarta',
      avatar: '👩‍🏫',
      bg: 'linear-gradient(135deg, #059669, #0891b2)',
    },
    {
      quote: '"Pendaftaran siswa baru jadi jauh lebih mudah. Tidak ada lagi antrian panjang dan dokumen yang hilang."',
      name: 'Panitia PPDB',
      role: 'SMK Negeri, Surabaya',
      avatar: '👨‍💻',
      bg: 'linear-gradient(135deg, #d97706, #dc2626)',
    },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection>
        <HeroBg />
        <HeroGrid />
        <HeroOrb />
        <HeroContent>
          <HeroBadge>
            <span className="dot" />
            Platform Aktif · app.akademihub.id
          </HeroBadge>
          <HeroTitle>
            Kelola Sekolah Lebih Mudah,
            <span className="line2">Lebih Cerdas, Lebih Efisien</span>
          </HeroTitle>
          <HeroSubtitle>
            Satu aplikasi untuk semua kebutuhan sekolah — dari absensi, nilai, rapor,
            pembayaran, hingga pendaftaran siswa baru. Semua terhubung, semua otomatis,
            semua bisa dipantau dari mana saja.
          </HeroSubtitle>
          <HeroButtons>
            <BtnPrimary href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
              🚀 Coba Demo Gratis
            </BtnPrimary>
            <BtnSecondary to="/pillars">
              Lihat Semua Fitur →
            </BtnSecondary>
          </HeroButtons>
          <HeroStats>
            <StatItem>
              <div className="num">7</div>
              <div className="label">Modul Utama</div>
            </StatItem>
            <StatItem>
              <div className="num">40+</div>
              <div className="label">Fitur Tersedia</div>
            </StatItem>
            <StatItem>
              <div className="num">4</div>
              <div className="label">Jenis Pengguna</div>
            </StatItem>
            <StatItem>
              <div className="num">99.9%</div>
              <div className="label">Uptime Sistem</div>
            </StatItem>
          </HeroStats>
        </HeroContent>
      </HeroSection>

      {/* ── Trust Strip ── */}
      <TrustSection>
        <TrustInner>
          <TrustLabel>Apa yang bisa dilakukan Akademihub</TrustLabel>
          <TrustBadges>
            {trustBadges.map((t, i) => (
              <TrustBadge key={i}>
                <span className="icon">{t.icon}</span>
                {t.label}
              </TrustBadge>
            ))}
          </TrustBadges>
        </TrustInner>
      </TrustSection>

      {/* ── Why Section ── */}
      <WhySection>
        <Container>
          <SectionEyebrowWrap>
            <SectionEyebrow>✨ Keunggulan Platform</SectionEyebrow>
          </SectionEyebrowWrap>
          <SectionTitle>Mengapa Sekolah Memilih<br />Akademihub?</SectionTitle>
          <SectionSubtitle>
            Bukan sekadar aplikasi pencatat data. Akademihub adalah mitra digital
            yang membantu sekolah, guru, siswa, dan orang tua tetap terhubung setiap saat.
          </SectionSubtitle>
          <FeatGrid>
            {features.map((f, i) => (
              <FeatCard key={i} $gradient={f.gradient}>
                <FeatIconWrap $bg={f.bg}>{f.icon}</FeatIconWrap>
                <FeatTitle>{f.title}</FeatTitle>
                <FeatDesc>{f.desc}</FeatDesc>
              </FeatCard>
            ))}
          </FeatGrid>
        </Container>
      </WhySection>

      {/* ── 7 Modules ── */}
      <ModulesSection>
        <ModulesBg />
        <Container>
          <SectionEyebrowWrap>
            <SectionEyebrow style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.25)', color: '#60a5fa' }}>
              🧩 7 Modul Terintegrasi
            </SectionEyebrow>
          </SectionEyebrowWrap>
          <ModulesSectionTitle>Satu Platform,<br />Semua Kebutuhan Sekolah</ModulesSectionTitle>
          <ModulesSectionSub>
            Dari pengelolaan data harian hingga analisis cerdas,
            semua tersedia dalam satu aplikasi yang saling terhubung.
          </ModulesSectionSub>
          <ModulesGrid>
            {modules.map((m, i) => (
              <ModuleCard key={i} $color={m.color} $color2={m.color2}>
                <ModuleHeader>
                  <ModuleIcon $color={m.color}>{m.icon}</ModuleIcon>
                  <div>
                    <ModuleNum $color={m.color}>{m.num}</ModuleNum>
                    <ModuleTitle>{m.title}</ModuleTitle>
                  </div>
                </ModuleHeader>
                <ModuleDesc>{m.desc}</ModuleDesc>
                <ModuleTags>
                  {m.tags.map((tag, j) => (
                    <ModuleTag key={j} $color={m.color}>{tag}</ModuleTag>
                  ))}
                </ModuleTags>
              </ModuleCard>
            ))}
          </ModulesGrid>
          <ModulesFooter>
            <ModulesViewAll to="/pillars">
              Lihat detail semua fitur dan modul →
            </ModulesViewAll>
          </ModulesFooter>
        </Container>
      </ModulesSection>

      {/* ── Social Proof ── */}
      <ProofSection>
        <Container>
          <SectionEyebrowWrap>
            <SectionEyebrow>💬 Kata Mereka</SectionEyebrow>
          </SectionEyebrowWrap>
          <SectionTitle>Dipercaya oleh Sekolah<br />di Seluruh Indonesia</SectionTitle>
          <SectionSubtitle>
            Dengarkan pengalaman nyata dari kepala sekolah, guru, dan staf
            yang sudah menggunakan Akademihub.
          </SectionSubtitle>
          <ProofGrid>
            {testimonials.map((t, i) => (
              <ProofCard key={i}>
                <ProofQuote>{t.quote}</ProofQuote>
                <ProofAuthor>
                  <ProofAvatar $bg={t.bg}>{t.avatar}</ProofAvatar>
                  <div>
                    <ProofName>{t.name}</ProofName>
                    <ProofRole>{t.role}</ProofRole>
                  </div>
                </ProofAuthor>
              </ProofCard>
            ))}
          </ProofGrid>
        </Container>
      </ProofSection>

      {/* ── CTA ── */}
      <CTASection>
        <CTAContent>
          <CTATitle>Siap Membawa Sekolah Anda ke Level Berikutnya?</CTATitle>
          <CTASub>
            Coba demo gratis sekarang dan rasakan sendiri bagaimana Akademihub
            menyederhanakan pekerjaan sehari-hari di sekolah Anda.
          </CTASub>
          <CTAButtons>
            <CTAPrimary href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
              🚀 Mulai Demo Gratis
            </CTAPrimary>
            <CTASecondary to="/contact">
              💬 Konsultasi Dulu
            </CTASecondary>
          </CTAButtons>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default Home;
