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
    { icon: '🔄', bg: '#dbeafe', title: 'Semua Bagian Saling Terhubung', desc: 'Data nilai, absensi, pembayaran, dan laporan saling terhubung dalam satu aplikasi.' },
    { icon: '📡', bg: '#ede9fe', title: 'Perubahan Langsung Terlihat', desc: 'Saat ada perubahan data seperti absensi, nilai, atau pembayaran, informasi bisa langsung muncul tanpa menunggu lama.' },
    { icon: '💬', bg: '#d1fae5', title: 'Pesan WhatsApp Otomatis', desc: 'Sekolah bisa mengirim pesan otomatis ke orang tua untuk tagihan, kehadiran siswa, dan informasi pendaftaran.' },
    { icon: '🔐', bg: '#fee2e2', title: 'Akses Lebih Aman', desc: 'Setiap pengguna seperti admin, guru, siswa, dan wali murid hanya bisa membuka fitur yang sesuai kebutuhannya.' },
    { icon: '📊', bg: '#fef3c7', title: 'Laporan dan Penilaian Otomatis', desc: 'Sistem membantu menampilkan ringkasan data, menyusun peringkat siswa, dan memberi tanda jika ada hal penting yang perlu diperhatikan.' },
    { icon: '☁️', bg: '#cffafe', title: 'Siap Dipakai Secara Stabil', desc: 'Sistem disusun agar tetap aman, rapi, dan siap digunakan untuk kebutuhan sekolah dalam jangka panjang.' },
  ];

  const modules = [
    { num: '01', icon: '🏛️', title: 'Data Sekolah Utama', desc: 'Mengelola data dasar sekolah seperti kelas, guru, siswa, wali murid, dan tahun ajaran.', color: '#3b82f6', tags: ['Data Sekolah', 'Hak Akses', 'Profil Sekolah'] },
    { num: '02', icon: '📚', title: 'Kegiatan Belajar', desc: 'Mengatur materi, tugas, ujian, nilai, rapor digital, absensi, dan jadwal pelajaran.', color: '#7c3aed', tags: ['Rapor Digital', 'Ujian Online', 'Soal'] },
    { num: '03', icon: '💰', title: 'Pembayaran Sekolah', desc: 'Mengatur tagihan, pembayaran, bukti tagihan otomatis, dan laporan keuangan sekolah.', color: '#059669', tags: ['Tagihan', 'WhatsApp', 'Laporan'] },
    { num: '04', icon: '🤝', title: 'Bimbingan Konseling', desc: 'Mencatat masalah siswa, sesi konseling, tindak lanjut, dan saran untuk perkembangan siswa.', color: '#dc2626', tags: ['Catatan Siswa', 'Konseling', 'Tindak Lanjut'] },
    { num: '05', icon: '📖', title: 'Perpustakaan Digital', desc: 'Mengatur daftar buku, peminjaman, pengembalian, dan catatan denda bila ada keterlambatan.', color: '#d97706', tags: ['Daftar Buku', 'Peminjaman', 'Denda'] },
    { num: '06', icon: '📝', title: 'Pendaftaran Siswa Baru', desc: 'Melayani pendaftaran online, pengecekan dokumen, proses seleksi, dan pengumuman hasil.', color: '#0891b2', tags: ['Pendaftaran', 'Dokumen', 'Seleksi'] },
    { num: '07', icon: '🎯', title: 'Laporan dan Rekomendasi', desc: 'Membantu melihat peringkat siswa, memberi rekomendasi beasiswa, dan menampilkan data penting sekolah.', color: '#be123c', tags: ['Peringkat', 'Peringatan Dini', 'Beasiswa'] },
  ];

  const techStack = [
    { icon: '⚡', label: 'Aplikasi terasa cepat' },
    { icon: '🔒', label: 'Data lebih aman' },
    { icon: '📱', label: 'Nyaman di HP & laptop' },
    { icon: '🔄', label: 'Perubahan cepat terlihat' },
    { icon: '🗂️', label: 'Data tersimpan rapi' },
    { icon: '🚀', label: 'Akses halaman lebih ringan' },
    { icon: '🖼️', label: 'File & dokumen tersimpan aman' },
    { icon: '🛠️', label: 'Mudah dikelola tim teknis' },
    { icon: '📡', label: 'Info penting tampil langsung' },
    { icon: '💬', label: 'Pesan WhatsApp otomatis' },
    { icon: '👤', label: 'Hak akses tiap pengguna jelas' },
    { icon: '🌐', label: 'Website stabil saat diakses' },
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
            Aplikasi sekolah lengkap dengan 7 bagian utama untuk mengelola kegiatan belajar,
            pembayaran, pendaftaran siswa baru, hingga bimbingan konseling. Informasi penting
            juga bisa langsung diperbarui dan dikirim otomatis ke orang tua lewat WhatsApp.
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
              <div className="label">Sistem Stabil</div>
            </HeroMetric>
            <HeroMetric>
              <div className="num">4</div>
              <div className="label">Jenis Pengguna</div>
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
            Bukan hanya tempat menyimpan data, tetapi aplikasi yang membantu sekolah,
            guru, siswa, dan orang tua tetap terhubung dalam satu sistem.
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
            Dari pengelolaan data sekolah sampai laporan penting,
            semuanya berada dalam satu aplikasi yang saling terhubung.
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
            Coba demo langsung atau pelajari cara kerja sistemnya untuk melihat
            apakah Sekolah Pintar cocok untuk kebutuhan sekolah Anda.
          </CTASub>
          <CTAButtons>
            <CTAPrimary href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
              🚀 Akses Demo
            </CTAPrimary>
            <CTASecondary to="/techstack">
              📐 Lihat Cara Kerja Sistem
            </CTASecondary>
          </CTAButtons>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default Home;
