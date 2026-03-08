import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ── Hero ── */
const HeroSection = styled.section`
  background: #0f172a;
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 6rem 2rem 5rem;
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: -15%;
    left: 5%;
    width: 650px;
    height: 650px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, transparent 65%);
    border-radius: 50%;
    animation: ${pulse} 5s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    right: 5%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.13) 0%, transparent 65%);
    border-radius: 50%;
    animation: ${pulse} 6s ease-in-out infinite reverse;
  }
`;

const HeroGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 820px;
  position: relative;
  z-index: 1;
  animation: ${fadeSlideUp} 0.7s ease-out;
`;

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(37, 99, 235, 0.12);
  border: 1px solid rgba(37, 99, 235, 0.28);
  color: #93c5fd;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  margin-bottom: 2rem;

  .dot {
    width: 6px;
    height: 6px;
    background: #3b82f6;
    border-radius: 50%;
    animation: ${pulse} 1.5s ease-in-out infinite;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 800;
  color: white;
  line-height: 1.15;
  letter-spacing: -1.5px;
  margin-bottom: 1.5rem;

  .gradient {
    background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #34d399 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.58);
  line-height: 1.8;
  max-width: 620px;
  margin: 0 auto 2.5rem;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2.1rem;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: white;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.975rem;
  text-decoration: none;
  transition: all 0.25s;
  box-shadow: 0 4px 24px rgba(37, 99, 235, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(37, 99, 235, 0.5);
  }
`;

const BtnSecondary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2.1rem;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.975rem;
  text-decoration: none;
  transition: all 0.25s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const HeroMetrics = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  flex-wrap: wrap;
  animation: ${fadeSlideUp} 0.9s ease-out 0.2s both;

  @media (max-width: 640px) {
    gap: 2rem;
  }
`;

const HeroMetric = styled.div`
  text-align: center;

  .num {
    font-size: 1.9rem;
    font-weight: 800;
    background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 0.3rem;
  }

  .label {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.38);
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: 600;
  }
`;

/* ── Tech Strip ── */
const TechSection = styled.section`
  padding: 2.5rem 2rem;
  background: white;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
`;

const TechTitle = styled.p`
  text-align: center;
  font-size: 0.75rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const TechBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.625rem;
`;

const TechBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.425rem 0.9rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #475569;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
    color: #1e293b;
  }

  .icon {
    font-size: 0.95rem;
  }
`;

/* ── Why Section ── */
const WhySection = styled.section`
  padding: 5.5rem 2rem;
  background: #f8fafc;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTag = styled.div`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 1rem;
  letter-spacing: -0.75px;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 1.05rem;
  max-width: 560px;
  margin: 0 auto 3.5rem;
  line-height: 1.75;
`;

const FeatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const FeatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border-color: transparent;
  }
`;

const FeatIconWrap = styled.div`
  width: 52px;
  height: 52px;
  background: ${props => props.$bg || '#dbeafe'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
`;

const FeatTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.625rem;
`;

const FeatDesc = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.7;
`;

/* ── Modules Section ── */
const ModulesSection = styled.section`
  padding: 5.5rem 2rem;
  background: #0f172a;
`;

const ModulesSectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: -0.75px;
`;

const ModulesSectionSub = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.45);
  font-size: 1.05rem;
  max-width: 520px;
  margin: 0 auto 3rem;
  line-height: 1.75;
`;

const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  gap: 1.25rem;
`;

const ModuleCard = styled.div`
  background: #1e293b;
  border: 1px solid ${props => props.$color}20;
  border-left: 3px solid ${props => props.$color};
  padding: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s;

  &:hover {
    background: #243349;
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  }
`;

const ModuleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.875rem;
`;

const ModuleIcon = styled.div`
  width: 38px;
  height: 38px;
  background: ${props => props.$color}18;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

const ModuleMeta = styled.div``;

const ModuleNum = styled.div`
  font-size: 0.67rem;
  font-weight: 800;
  color: ${props => props.$color};
  letter-spacing: 0.5px;
  opacity: 0.7;
  line-height: 1;
`;

const ModuleTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: white;
  margin-top: 0.1rem;
`;

const ModuleDesc = styled.p`
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.42);
  line-height: 1.65;
`;

const ModuleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.875rem;
`;

const ModuleTag = styled.span`
  font-size: 0.7rem;
  background: ${props => props.$color}15;
  color: ${props => props.$color};
  border: 1px solid ${props => props.$color}28;
  padding: 0.18rem 0.55rem;
  border-radius: 4px;
  font-weight: 600;
`;

const ModulesViewAll = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 2.5rem;
  color: #60a5fa;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #93c5fd;
  }
`;

/* ── CTA Section ── */
const CTASection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #1e40af 0%, #7c3aed 60%, #0891b2 100%);
  position: relative;
  overflow: hidden;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: -40%;
    left: -15%;
    width: 600px;
    height: 600px;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 50%;
  }
`;

const CTAContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: -0.75px;
`;

const CTASub = styled.p`
  color: rgba(255, 255, 255, 0.72);
  font-size: 1.05rem;
  line-height: 1.75;
  margin-bottom: 2.5rem;
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
  gap: 0.4rem;
  padding: 0.9rem 2.1rem;
  background: white;
  color: #1e40af;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.975rem;
  text-decoration: none;
  transition: all 0.25s;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const CTASecondary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.9rem 2.1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.975rem;
  text-decoration: none;
  transition: all 0.25s;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
    transform: translateY(-2px);
  }
`;

const Home = () => {
  const features = [
    { icon: '🔄', bg: '#dbeafe', title: 'Terintegrasi Penuh', desc: 'Semua modul saling terhubung—nilai, absensi, SPP, dan laporan dalam satu ekosistem digital.' },
    { icon: '📡', bg: '#ede9fe', title: 'Real-Time WebSocket', desc: 'Notifikasi live via Laravel Reverb: update absensi, nilai posting, dan konfirmasi pembayaran.' },
    { icon: '💬', bg: '#d1fae5', title: 'Notifikasi WhatsApp', desc: 'Kirim otomatis ke orang tua—tagihan SPP, kehadiran siswa, status PPDB, dan alert EWS.' },
    { icon: '🔐', bg: '#fee2e2', title: 'RBAC & Keamanan', desc: '4 role pengguna: Admin, Guru, Siswa, Wali—dengan JWT auth, Redis blacklist, dan hak akses granular.' },
    { icon: '📊', bg: '#fef3c7', title: 'Analytics & SPK', desc: 'Dashboard analitik, perangkingan siswa otomatis, Early Warning System, dan rekomendasi beasiswa.' },
    { icon: '☁️', bg: '#cffafe', title: 'Cloud-Ready & Docker', desc: 'Arsitektur containerized dengan MinIO S3, Redis cache, Nginx reverse proxy—siap produksi.' },
  ];

  const modules = [
    { num: '01', icon: '🏛️', title: 'Manajemen & Master', desc: 'Data sekolah, tahun ajaran, kelas, guru, siswa, wali murid.', color: '#3b82f6', tags: ['Multi-Tenant', 'RBAC', 'Profil Sekolah'] },
    { num: '02', icon: '📚', title: 'Akademik Digital', desc: 'Materi, tugas, ujian online, nilai, e-rapor, absensi, jadwal.', color: '#7c3aed', tags: ['E-Rapor', 'Ujian Online', 'Bank Soal'] },
    { num: '03', icon: '💰', title: 'Keuangan SPP', desc: 'Tarif per kelas, pembayaran, invoice otomatis, laporan real-time.', color: '#059669', tags: ['Invoice', 'WhatsApp', 'Laporan'] },
    { num: '04', icon: '🤝', title: 'Bimbingan Konseling', desc: 'Kasus BK, sesi konseling, tindakan, dan rekomendasi karir.', color: '#dc2626', tags: ['Kasus BK', 'Konseling', 'Rekomendasi'] },
    { num: '05', icon: '📖', title: 'Perpustakaan Digital', desc: 'Katalog buku, peminjaman & pengembalian, tracking denda.', color: '#d97706', tags: ['Katalog', 'Peminjaman', 'Denda'] },
    { num: '06', icon: '📝', title: 'PPDB Online', desc: 'Pendaftaran 24/7, verifikasi dokumen, seleksi, dan pengumuman.', color: '#0891b2', tags: ['Pendaftaran', 'Dokumen', 'Seleksi'] },
    { num: '07', icon: '🎯', title: 'SPK & Analytics', desc: 'Perangkingan siswa, rekomendasi beasiswa, EWS, dan statistik.', color: '#be123c', tags: ['Ranking', 'EWS', 'Beasiswa'] },
  ];

  const techStack = [
    { icon: '🐘', label: 'PHP 8.3' },
    { icon: '🔥', label: 'Laravel 12' },
    { icon: '⚛️', label: 'React 18' },
    { icon: '⚡', label: 'Vite 5' },
    { icon: '🐬', label: 'MySQL 8' },
    { icon: '🔴', label: 'Redis' },
    { icon: '🗄️', label: 'MinIO S3' },
    { icon: '🐳', label: 'Docker' },
    { icon: '📡', label: 'Reverb WS' },
    { icon: '💬', label: 'WAHA WA' },
    { icon: '🔐', label: 'JWT Auth' },
    { icon: '🌐', label: 'Nginx' },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection>
        <HeroBg />
        <HeroGrid />
        <HeroContent>
          <HeroBadge>
            <span className="dot" />
            Platform aktif · app.akademihub.id
          </HeroBadge>
          <HeroTitle>
            Kelola Sekolah Lebih<br />
            <span className="gradient">Cerdas &amp; Terintegrasi</span>
          </HeroTitle>
          <HeroSubtitle>
            Platform manajemen sekolah lengkap dengan 7 modul utama—dari akademik,
            keuangan, PPDB, hingga BK—didukung real-time WebSocket dan notifikasi
            WhatsApp otomatis untuk seluruh stakeholder.
          </HeroSubtitle>
          <HeroButtons>
            <BtnPrimary href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
              🚀 Coba Demo
            </BtnPrimary>
            <BtnSecondary to="/pillars">
              Lihat 7 Modul →
            </BtnSecondary>
          </HeroButtons>
          <HeroMetrics>
            <HeroMetric>
              <div className="num">7</div>
              <div className="label">Modul Utama</div>
            </HeroMetric>
            <HeroMetric>
              <div className="num">40+</div>
              <div className="label">Halaman Fitur</div>
            </HeroMetric>
            <HeroMetric>
              <div className="num">99.9%</div>
              <div className="label">Uptime SLA</div>
            </HeroMetric>
            <HeroMetric>
              <div className="num">4</div>
              <div className="label">Role Pengguna</div>
            </HeroMetric>
          </HeroMetrics>
        </HeroContent>
      </HeroSection>

      {/* ── Tech Strip ── */}
      <TechSection>
        <TechTitle>Dibangun dengan teknologi modern &amp; production-grade</TechTitle>
        <TechBadges>
          {techStack.map((t, i) => (
            <TechBadge key={i}>
              <span className="icon">{t.icon}</span>
              {t.label}
            </TechBadge>
          ))}
        </TechBadges>
      </TechSection>

      {/* ── Why Section ── */}
      <WhySection>
        <Container>
          <SectionTag>Keunggulan Platform</SectionTag>
          <SectionTitle>Kenapa Sekolah Pintar?</SectionTitle>
          <SectionSubtitle>
            Bukan sekadar sistem informasi—Sekolah Pintar menghadirkan ekosistem
            digital lengkap yang terhubung real-time untuk seluruh stakeholder.
          </SectionSubtitle>
          <FeatGrid>
            {features.map((f, i) => (
              <FeatCard key={i}>
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
        <Container>
          <SectionTag style={{ color: '#60a5fa' }}>7 Modul Terintegrasi</SectionTag>
          <ModulesSectionTitle>Satu Platform, Semua Kebutuhan</ModulesSectionTitle>
          <ModulesSectionSub>
            Dari manajemen data master hingga sistem pendukung keputusan—
            semua terhubung, semua real-time.
          </ModulesSectionSub>
          <ModulesGrid>
            {modules.map((m, i) => (
              <ModuleCard key={i} $color={m.color}>
                <ModuleHeader>
                  <ModuleIcon $color={m.color}>{m.icon}</ModuleIcon>
                  <ModuleMeta>
                    <ModuleNum $color={m.color}>{m.num}</ModuleNum>
                    <ModuleTitle>{m.title}</ModuleTitle>
                  </ModuleMeta>
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
          <ModulesViewAll to="/pillars">Lihat detail semua modul →</ModulesViewAll>
        </Container>
      </ModulesSection>

      {/* ── CTA ── */}
      <CTASection>
        <CTAContent>
          <CTATitle>Siap Transformasi Digital?</CTATitle>
          <CTASub>
            Akses demo langsung atau pelajari arsitektur teknis platform untuk memastikan
            Sekolah Pintar sesuai kebutuhan institusi pendidikan Anda.
          </CTASub>
          <CTAButtons>
            <CTAPrimary href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
              🚀 Akses Demo
            </CTAPrimary>
            <CTASecondary to="/techstack">
              📐 Lihat Tech Stack
            </CTASecondary>
          </CTAButtons>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default Home;
