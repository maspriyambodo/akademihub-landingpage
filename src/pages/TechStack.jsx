import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

/* ── Page Layout ── */
const PageContainer = styled.div`
  min-height: calc(100vh - 72px);
  background: white;
`;

/* ── Hero ── */
const HeroSection = styled.section`
  background: linear-gradient(160deg, #0a0f1e 0%, #0f172a 50%, #001a1a 100%);
  padding: 5.5rem 2rem 4.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 500px;
    background: radial-gradient(ellipse, rgba(6, 182, 212, 0.12) 0%, transparent 65%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent);
  }
`;

const HeroGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
`;

const HeroTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.25);
  color: #67e8f9;
  padding: 0.45rem 1.1rem;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1.75rem;
  position: relative;

  .dot {
    width: 6px;
    height: 6px;
    background: #22d3ee;
    border-radius: 50%;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: white;
  margin-bottom: 1.25rem;
  letter-spacing: -1.5px;
  line-height: 1.15;
  position: relative;

  span {
    background: linear-gradient(135deg, #67e8f9 0%, #60a5fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.5);
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.85;
  position: relative;
`;

/* ── How It Works Section ── */
const HowSection = styled.section`
  padding: 5rem 2rem;
  background: #f8fafc;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionEyebrowWrap = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionEyebrow = styled.div`
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
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 1rem;
  letter-spacing: -0.75px;
  line-height: 1.2;
`;

const SectionSub = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 1rem;
  max-width: 560px;
  margin: 0 auto 3.5rem;
  line-height: 1.8;
`;

/* ── Flow Steps ── */
const FlowSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

const FlowStep = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 2rem 1.75rem;
  text-align: center;
  transition: all 0.3s;
  position: relative;
  animation: ${fadeUp} 0.5s ease-out ${props => props.$delay}s both;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
    border-color: ${props => props.$color}30;
  }
`;

const FlowStepNum = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.$color}15;
  border: 2px solid ${props => props.$color}30;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 900;
  color: ${props => props.$color};
  margin: 0 auto 1.25rem;
`;

const FlowStepIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const FlowStepTitle = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.5rem;
`;

const FlowStepDesc = styled.p`
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.7;
`;

/* ── Capabilities Section ── */
const CapSection = styled.section`
  padding: 5rem 2rem;
  background: white;
`;

const CapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const CapCard = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 2rem;
  transition: all 0.3s;
  animation: ${fadeUp} 0.5s ease-out ${props => props.$delay}s both;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 4px;
    background: ${props => props.$color};
    border-radius: 18px 0 0 18px;
  }

  &:hover {
    background: white;
    box-shadow: 0 16px 40px rgba(0,0,0,0.08);
    border-color: ${props => props.$color}25;
    transform: translateY(-4px);
  }
`;

const CapHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CapIconWrap = styled.div`
  width: 48px;
  height: 48px;
  background: ${props => props.$color}15;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
`;

const CapTitle = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  color: #0f172a;
`;

const CapDesc = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.75;
  margin-bottom: 1.25rem;
`;

const CapList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const CapItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: #475569;
  font-weight: 600;

  &::before {
    content: '✓';
    color: ${props => props.$color};
    font-weight: 900;
    font-size: 0.75rem;
    flex-shrink: 0;
  }
`;

/* ── Architecture Section ── */
const ArchSection = styled.section`
  padding: 5rem 2rem 6rem;
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
    background: linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent);
  }
`;

const ArchTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: -0.75px;
`;

const ArchSub = styled.p`
  text-align: center;
  color: rgba(255,255,255,0.45);
  font-size: 1rem;
  margin-bottom: 3rem;
  line-height: 1.8;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
`;

const ArchDiagram = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ArchLayer = styled.div`
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid ${props => props.$color}20;
  border-left: 3px solid ${props => props.$color};
  border-radius: 14px;
  padding: 1.25rem 1.75rem;
  transition: all 0.3s;

  &:hover {
    background: rgba(36, 51, 73, 0.9);
    border-color: ${props => props.$color}35;
    transform: translateX(4px);
  }
`;

const ArchLayerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

const ArchLayerTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 800;
  color: ${props => props.$color};
  text-transform: uppercase;
  letter-spacing: 0.75px;
`;

const ArchLayerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const ArchChip = styled.span`
  background: ${props => props.$color}10;
  color: rgba(255,255,255,0.6);
  border: 1px solid ${props => props.$color}20;
  padding: 0.25rem 0.7rem;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 500;
`;

const ArchArrow = styled.div`
  text-align: center;
  color: rgba(255,255,255,0.2);
  font-size: 1.1rem;
  line-height: 1;
  margin: -0.1rem 0;
`;

/* ── CTA ── */
const CTASection = styled.section`
  padding: 6rem 2rem;
  background: white;
  text-align: center;
`;

const CTAInner = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 1rem;
  letter-spacing: -0.75px;
`;

const CTASub = styled.p`
  color: #64748b;
  font-size: 1.05rem;
  line-height: 1.8;
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
  gap: 0.5rem;
  padding: 0.95rem 2.1rem;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
  border-radius: 12px;
  font-weight: 800;
  font-size: 0.975rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 16px rgba(37,99,235,0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(37,99,235,0.45);
  }
`;

const CTASecondary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.95rem 2.1rem;
  background: #f8fafc;
  color: #475569;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.975rem;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
    color: #0f172a;
    transform: translateY(-2px);
  }
`;

const TechStack = () => {
  const flowSteps = [
    {
      num: '01', icon: '👤', color: '#3b82f6',
      title: 'Pengguna Membuka Aplikasi',
      desc: 'Guru, siswa, orang tua, atau kepala sekolah login dari HP atau komputer.',
    },
    {
      num: '02', icon: '🔐', color: '#7c3aed',
      title: 'Sistem Memverifikasi Identitas',
      desc: 'Sistem memastikan siapa yang login dan menampilkan fitur yang sesuai perannya.',
    },
    {
      num: '03', icon: '⚙️', color: '#059669',
      title: 'Data Diproses & Disimpan',
      desc: 'Semua aksi seperti input nilai atau absensi langsung diproses dan disimpan dengan aman.',
    },
    {
      num: '04', icon: '📡', color: '#d97706',
      title: 'Informasi Langsung Tersebar',
      desc: 'Perubahan data langsung terlihat oleh semua pihak yang berkepentingan tanpa perlu refresh.',
    },
    {
      num: '05', icon: '💬', color: '#0891b2',
      title: 'Notifikasi Dikirim Otomatis',
      desc: 'Orang tua mendapat pesan WhatsApp otomatis untuk tagihan, kehadiran, dan pengumuman.',
    },
  ];

  const capabilities = [
    {
      icon: '⚡',
      color: '#f59e0b',
      title: 'Aplikasi Cepat & Responsif',
      desc: 'Halaman dimuat dengan cepat dan tampilan selalu segar. Tidak ada lag saat berpindah menu.',
      items: ['Halaman dimuat lebih cepat', 'Perpindahan menu terasa mulus', 'Tidak perlu refresh manual', 'Ringan di koneksi lambat'],
    },
    {
      icon: '🔒',
      color: '#ef4444',
      title: 'Keamanan Data Terjamin',
      desc: 'Data sekolah disimpan dengan enkripsi dan setiap akses dikontrol ketat sesuai peran pengguna.',
      items: ['Login aman dengan enkripsi', 'Hak akses per peran pengguna', 'Sesi login terkontrol', 'Riwayat aktivitas tercatat'],
    },
    {
      icon: '📡',
      color: '#06b6d4',
      title: 'Pembaruan Data Instan',
      desc: 'Saat ada perubahan data, semua pengguna yang relevan langsung melihat informasi terbaru.',
      items: ['Absensi langsung terlihat', 'Nilai terbaru muncul seketika', 'Tagihan diperbarui real-time', 'Dashboard selalu terkini'],
    },
    {
      icon: '💬',
      color: '#22c55e',
      title: 'Notifikasi WhatsApp Otomatis',
      desc: 'Sistem mengirim pesan WhatsApp ke orang tua secara otomatis untuk berbagai kejadian penting.',
      items: ['Info kehadiran siswa', 'Tagihan & pembayaran', 'Status pendaftaran PPDB', 'Peringatan penting'],
    },
    {
      icon: '🗄️',
      color: '#8b5cf6',
      title: 'Penyimpanan Data Aman',
      desc: 'Semua data sekolah tersimpan rapi dan aman. File, foto, dan dokumen mudah diakses kapan saja.',
      items: ['Data siswa & guru tersimpan', 'Dokumen PPDB aman', 'Materi belajar tersedia', 'Backup data otomatis'],
    },
    {
      icon: '📱',
      color: '#ec4899',
      title: 'Bisa Diakses dari Mana Saja',
      desc: 'Tampilan menyesuaikan layar HP, tablet, maupun komputer. Tidak perlu install aplikasi khusus.',
      items: ['Tampilan responsif di HP', 'Nyaman di tablet & laptop', 'Tidak perlu install app', 'Akses 24 jam online'],
    },
  ];

  const archLayers = [
    {
      color: '#60a5fa',
      title: '👤 Yang Dilihat Pengguna',
      items: ['Halaman & menu aplikasi', 'Formulir input data', 'Tabel & laporan', 'Notifikasi di layar', 'Tampilan responsif'],
    },
    {
      color: '#34d399',
      title: '🚦 Pengatur Lalu Lintas',
      items: ['Menjaga koneksi aman (HTTPS)', 'Menampilkan file & gambar', 'Mengarahkan ke server yang tepat'],
    },
    {
      color: '#ef4444',
      title: '⚙️ Otak Pengolah Data',
      items: ['Menerima & memproses permintaan', 'Menjalankan aturan bisnis', 'Mengontrol hak akses', 'Menjalankan tugas otomatis'],
    },
    {
      color: '#f97316',
      title: '🗃️ Tempat Penyimpanan',
      items: ['Database utama sekolah', 'Cache untuk akses cepat', 'Penyimpanan file & dokumen'],
    },
    {
      color: '#a78bfa',
      title: '🔔 Sistem Pemberitahuan',
      items: ['Update langsung di layar', 'Pesan WhatsApp otomatis', 'Proses latar belakang'],
    },
  ];

  return (
    <PageContainer>
      {/* ── Hero ── */}
      <HeroSection>
        <HeroGrid />
        <HeroTag>
          <span className="dot" />
          Cara Kerja Sistem
        </HeroTag>
        <HeroTitle>
          Bagaimana Akademihub<br />
          <span>Bekerja untuk Anda?</span>
        </HeroTitle>
        <HeroSubtitle>
          Halaman ini menjelaskan secara sederhana bagaimana aplikasi Akademihub
          bekerja di balik layar — dari saat pengguna login hingga notifikasi terkirim
          ke orang tua.
        </HeroSubtitle>
      </HeroSection>

      {/* ── How It Works ── */}
      <HowSection>
        <Container>
          <SectionEyebrowWrap>
            <SectionEyebrow>🔄 Alur Kerja</SectionEyebrow>
          </SectionEyebrowWrap>
          <SectionTitle>Dari Login hingga Notifikasi,<br />Semua Berjalan Otomatis</SectionTitle>
          <SectionSub>
            Begini cara Akademihub bekerja setiap harinya — sederhana,
            cepat, dan otomatis.
          </SectionSub>
          <FlowSteps>
            {flowSteps.map((step, i) => (
              <FlowStep key={i} $color={step.color} $delay={i * 0.08}>
                <FlowStepNum $color={step.color}>{step.num}</FlowStepNum>
                <FlowStepIcon>{step.icon}</FlowStepIcon>
                <FlowStepTitle>{step.title}</FlowStepTitle>
                <FlowStepDesc>{step.desc}</FlowStepDesc>
              </FlowStep>
            ))}
          </FlowSteps>
        </Container>
      </HowSection>

      {/* ── Capabilities ── */}
      <CapSection>
        <Container>
          <SectionEyebrowWrap>
            <SectionEyebrow>💪 Kemampuan Sistem</SectionEyebrow>
          </SectionEyebrowWrap>
          <SectionTitle>Apa yang Membuat Sistem Ini Andal?</SectionTitle>
          <SectionSub>
            Di balik tampilan yang sederhana, ada sistem yang kuat dan handal
            untuk mendukung operasional sekolah setiap hari.
          </SectionSub>
          <CapGrid>
            {capabilities.map((cap, i) => (
              <CapCard key={i} $color={cap.color} $delay={i * 0.07}>
                <CapHeader>
                  <CapIconWrap $color={cap.color}>{cap.icon}</CapIconWrap>
                  <CapTitle>{cap.title}</CapTitle>
                </CapHeader>
                <CapDesc>{cap.desc}</CapDesc>
                <CapList>
                  {cap.items.map((item, j) => (
                    <CapItem key={j} $color={cap.color}>{item}</CapItem>
                  ))}
                </CapList>
              </CapCard>
            ))}
          </CapGrid>
        </Container>
      </CapSection>

      {/* ── Architecture ── */}
      <ArchSection>
        <Container>
          <SectionEyebrowWrap>
            <SectionEyebrow style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.25)', color: '#60a5fa' }}>
              🏗️ Arsitektur Sistem
            </SectionEyebrow>
          </SectionEyebrowWrap>
          <ArchTitle>Lapisan-Lapisan yang Membuat<br />Sistem Berjalan</ArchTitle>
          <ArchSub>
            Penjelasan sederhana tentang bagian-bagian utama sistem,
            dari yang dilihat pengguna hingga tempat data tersimpan.
          </ArchSub>
          <ArchDiagram>
            {archLayers.map((layer, i) => (
              <div key={i}>
                <ArchLayer $color={layer.color}>
                  <ArchLayerHeader>
                    <ArchLayerTitle $color={layer.color}>{layer.title}</ArchLayerTitle>
                  </ArchLayerHeader>
                  <ArchLayerItems>
                    {layer.items.map((item, j) => (
                      <ArchChip key={j} $color={layer.color}>{item}</ArchChip>
                    ))}
                  </ArchLayerItems>
                </ArchLayer>
                {i < archLayers.length - 1 && <ArchArrow>↓</ArchArrow>}
              </div>
            ))}
          </ArchDiagram>
        </Container>
      </ArchSection>

      {/* ── CTA ── */}
      <CTASection>
        <CTAInner>
          <CTATitle>Ingin Melihat Langsung Cara Kerjanya?</CTATitle>
          <CTASub>
            Coba demo gratis dan rasakan sendiri bagaimana Akademihub
            menyederhanakan pekerjaan di sekolah Anda.
          </CTASub>
          <CTAButtons>
            <CTAPrimary href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
              🚀 Coba Demo Gratis
            </CTAPrimary>
            <CTASecondary to="/pillars">
              📋 Lihat Semua Fitur
            </CTASecondary>
          </CTAButtons>
        </CTAInner>
      </CTASection>
    </PageContainer>
  );
};

export default TechStack;
