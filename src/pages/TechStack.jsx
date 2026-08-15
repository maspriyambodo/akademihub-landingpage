import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  UsersIcon,
  CpuIcon,
  DatabaseIcon,
  WhatsAppIcon,
  ShieldCheckIcon,
  ZapIcon,
  LayersIcon,
  ActivityIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
  ServerIcon,
  SmartphoneIcon
} from '../components/Icons';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.08); }
`;
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const PageContainer = styled.div`
  min-height: calc(100vh - 72px);
  background: #030712;
  color: #f8fafc;
`;

/* ── Hero ── */
const HeroSection = styled.section`
  background: radial-gradient(circle at 50% -20%, #083344 0%, #090d16 50%, #030712 100%);
  padding: 6rem 2rem 5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  &::before {
    content: '';
    position: absolute;
    top: -20%; left: 50%;
    transform: translateX(-50%);
    width: 700px; height: 500px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 65%);
    pointer-events: none;
    animation: ${pulseGlow} 8s ease-in-out infinite;
  }
`;

const HeroGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, transparent 70%);
`;

const HeroTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.3);
  color: #67e8f9;
  padding: 0.45rem 1.15rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 900;
  color: #f8fafc;
  margin-bottom: 1.25rem;
  letter-spacing: -0.035em;
  line-height: 1.12;
  position: relative;
  z-index: 1;

  span {
    background: linear-gradient(135deg, #67e8f9 0%, #38bdf8 50%, #a78bfa 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientShift} 6s ease infinite;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  color: #94a3b8;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.8;
  position: relative;
  z-index: 1;
`;

/* ── Flow Section ── */
const FlowSection = styled.section`
  padding: 5.5rem 2rem;
  background: #030712;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const FlowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  position: relative;
  margin-bottom: 4rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const FlowCard = styled.div`
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  backdrop-filter: blur(16px);
  animation: ${fadeUp} 0.5s ease-out ${props => props.$delay}s both;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
    border-color: ${props => props.$color}40;
  }
`;

const FlowNum = styled.div`
  width: 44px;
  height: 44px;
  background: ${props => props.$color}15;
  border: 1.5px solid ${props => props.$color}30;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 900;
  font-family: 'JetBrains Mono', monospace;
  color: ${props => props.$color};
  margin: 0 auto 1.25rem;
`;

const FlowIconWrap = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  color: ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
`;

const FlowTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 800;
  color: #f8fafc;
  margin-bottom: 0.6rem;
  letter-spacing: -0.02em;
`;

const FlowDesc = styled.p`
  font-size: 0.85rem;
  color: #94a3b8;
  line-height: 1.7;
`;

/* ── Architecture Layers ── */
const ArchSection = styled.section`
  padding: 5.5rem 2rem 6rem;
  background: #090d16;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const ArchDiagram = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ArchLayer = styled.div`
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 4px solid ${props => props.$color};
  border-radius: 16px;
  padding: 1.5rem 2rem;
  transition: all 0.3s;
  backdrop-filter: blur(12px);

  &:hover {
    background: rgba(15, 23, 42, 0.95);
    border-color: ${props => props.$color}40;
    transform: translateX(4px);
  }
`;

const ArchLayerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ArchLayerTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 800;
  color: ${props => props.$color};
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ArchLayerSub = styled.span`
  font-size: 0.75rem;
  color: #64748b;
  font-family: 'JetBrains Mono', monospace;
`;

const ArchChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ArchChip = styled.span`
  background: rgba(255, 255, 255, 0.04);
  color: #cbd5e1;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.35rem 0.85rem;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
`;

/* ── CTA Banner ── */
const CTASection = styled.section`
  padding: 6rem 2rem;
  background: #030712;
`;

const CTABox = styled.div`
  background: radial-gradient(circle at center, #083344 0%, #0f172a 70%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 28px;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 60px rgba(6, 182, 212, 0.15);
`;

const GlowPrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.95rem 2.2rem;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%);
  color: #ffffff;
  border-radius: 12px;
  font-weight: 800;
  font-size: 0.98rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 0 25px rgba(6, 182, 212, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 35px rgba(6, 182, 212, 0.6);
  }
`;

const GlassSecondaryBtn = styled(Link)`
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
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(6, 182, 212, 0.4);
    transform: translateY(-2px);
  }
`;

const TechStack = () => {
  const flowSteps = [
    {
      num: '01',
      icon: UsersIcon,
      color: '#38bdf8',
      title: '1. Akses Multi-Device',
      desc: 'Pengguna (Kepsek, Guru, Siswa, Ortu) mengakses platform melalui browser laptop atau smartphone dengan otentikasi aman.',
    },
    {
      num: '02',
      icon: CpuIcon,
      color: '#a78bfa',
      title: '2. Backend Processing Engine',
      desc: 'Request diproses oleh arsitektur backend berkecepatan tinggi yang menangani logika KBM, CBT, dan kalkulasi e-Rapor.',
    },
    {
      num: '03',
      icon: DatabaseIcon,
      color: '#34d399',
      title: '3. Database & Realtime Sync',
      desc: 'Setiap entri nilai, presensi, dan pembayaran langsung tersinkronisasi aman ke cloud database terenkripsi.',
    },
    {
      num: '04',
      icon: WhatsAppIcon,
      color: '#22d3ee',
      title: '4. Automated WhatsApp Dispatch',
      desc: 'Bot automation mengirimkan notifikasi tagihan SPP, kehadiran, dan link dokumen langsung ke nomor wali murid.',
    },
  ];

  const archLayers = [
    {
      color: '#38bdf8',
      icon: SmartphoneIcon,
      title: 'Client Presentation Layer',
      sub: 'Single Page Application / Modern Web UI',
      chips: ['React 18', 'Vite', 'Styled Components', 'PWA Support', 'Responsive Web Layout', 'Hardware Accelerated CSS'],
    },
    {
      color: '#a78bfa',
      icon: CpuIcon,
      title: 'Application & Business Engine',
      sub: 'Robust Modular Backend Architecture',
      chips: ['Laravel Core Framework', 'Go Microservices (Presensi & CBT)', 'RESTful API v1', 'Multi-Role Access Control', 'SPK Engine (SAW & TOPSIS)'],
    },
    {
      color: '#34d399',
      icon: DatabaseIcon,
      title: 'Data & Persistence Layer',
      sub: 'Relational & Cached Storage',
      chips: ['MySQL Enterprise Storage', 'Redis Cache Queue', 'Automatic Daily Backups', 'Encrypted Student Records', 'ACID Compliance'],
    },
    {
      color: '#22d3ee',
      icon: WhatsAppIcon,
      title: 'Integration & Gateway Layer',
      sub: 'External Services & Notification Pipelines',
      chips: ['WhatsApp Gateway Automation', 'PDF Print Engine', 'Zonasi Maps API', 'Payment Gateway Ready', 'Export Excel / CSV Engine'],
    },
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroGrid />
        <HeroTag>
          <ZapIcon size={14} />
          <span>Arsitektur & Alur Kerja</span>
        </HeroTag>
        <HeroTitle>
          Teknologi Cepat, <span>Aman & Terdistribusi</span>
        </HeroTitle>
        <HeroSubtitle>
          Pelajari bagaimana data sekolah Anda mengalir dari perangkat pengguna, diproses oleh engine komputasi modern, hingga menghasilkan otomasi WhatsApp.
        </HeroSubtitle>
      </HeroSection>

      <FlowSection>
        <Container>
          <SectionHeader>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#06b6d4', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
              Alur Kerja End-to-End
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#f8fafc', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
              Bagaimana AkademiHub Bekerja
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '580px', margin: '0 auto', lineHeight: '1.75' }}>
              Empat tahapan otomatisasi yang menghilangkan beban administratif berulang bagi guru dan staf tata usaha.
            </p>
          </SectionHeader>

          <FlowGrid>
            {flowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <FlowCard key={step.num} $color={step.color} $delay={idx * 0.1}>
                  <FlowNum $color={step.color}>{step.num}</FlowNum>
                  <FlowIconWrap $color={step.color}>
                    <StepIcon size={24} />
                  </FlowIconWrap>
                  <FlowTitle>{step.title}</FlowTitle>
                  <FlowDesc>{step.desc}</FlowDesc>
                </FlowCard>
              );
            })}
          </FlowGrid>
        </Container>
      </FlowSection>

      <ArchSection>
        <Container>
          <SectionHeader>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#a78bfa', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
              Spesifikasi Sistem
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#f8fafc', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
              Arsitektur Cloud Enterprise
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '580px', margin: '0 auto', lineHeight: '1.75' }}>
              Setiap lapisan didesain modular untuk memastikan uptime tinggi, kecepatan respons di bawah 1 detik, dan proteksi data maksimal.
            </p>
          </SectionHeader>

          <ArchDiagram>
            {archLayers.map((layer, idx) => {
              const LayerIcon = layer.icon;
              return (
                <ArchLayer key={idx} $color={layer.color}>
                  <ArchLayerHeader>
                    <ArchLayerTitle $color={layer.color}>
                      <LayerIcon size={18} />
                      <span>{layer.title}</span>
                    </ArchLayerTitle>
                    <ArchLayerSub>{layer.sub}</ArchLayerSub>
                  </ArchLayerHeader>

                  <ArchChips>
                    {layer.chips.map((chip, cIdx) => (
                      <ArchChip key={cIdx}>{chip}</ArchChip>
                    ))}
                  </ArchChips>
                </ArchLayer>
              );
            })}
          </ArchDiagram>
        </Container>
      </ArchSection>

      <CTASection>
        <Container>
          <CTABox>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: '#f8fafc', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Ingin Mencoba Platform AkademiHub?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto 2.25rem', lineHeight: '1.8' }}>
              Buka aplikasi live demo dan rasakan performa tinggi serta kemudahan navigasi sistem secara langsung.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <GlowPrimaryBtn href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
                <span>Coba Demo Sekarang</span>
                <ArrowUpRightIcon size={16} />
              </GlowPrimaryBtn>
              <GlassSecondaryBtn to="/contact">
                <span>Hubungi Kami</span>
                <ArrowRightIcon size={16} />
              </GlassSecondaryBtn>
            </div>
          </CTABox>
        </Container>
      </CTASection>
    </PageContainer>
  );
};

export default TechStack;
