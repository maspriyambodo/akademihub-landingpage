import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  min-height: calc(100vh - 68px);
  background: #0f172a;
`;

const HeroSection = styled.section`
  background: linear-gradient(160deg, #0f172a 0%, #1e293b 100%);
  padding: 5rem 2rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -20%;
    left: 50%;
    transform: translateX(-50%);
    width: 700px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(124, 58, 237, 0.12) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeroTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(124, 58, 237, 0.12);
  border: 1px solid rgba(124, 58, 237, 0.28);
  color: #c4b5fd;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: clamp(1.875rem, 4.5vw, 3.25rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1.125rem;
  letter-spacing: -1px;
  position: relative;

  span {
    background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.5);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.8;
  position: relative;
`;

const ContentSection = styled.section`
  padding: 3.5rem 2rem 5.5rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PillarCard = styled.div`
  background: #1e293b;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid ${props => props.$color}20;
  border-left: 4px solid ${props => props.$color};
  transition: all 0.3s ease;
  animation: ${fadeUp} 0.55s ease-out ${props => props.$delay}s both;

  &:hover {
    background: #243349;
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28), 0 0 0 1px ${props => props.$color}28;
  }
`;

const PillarHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
`;

const PillarNum = styled.div`
  font-size: 0.68rem;
  font-weight: 800;
  color: ${props => props.$color};
  letter-spacing: 0.5px;
  opacity: 0.65;
  padding-top: 0.2rem;
  flex-shrink: 0;
`;

const PillarIconWrap = styled.div`
  width: 44px;
  height: 44px;
  background: ${props => props.$color}18;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
`;

const PillarTitleWrap = styled.div``;

const PillarTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
`;

const PillarBadge = styled.span`
  font-size: 0.68rem;
  background: ${props => props.$color}15;
  color: ${props => props.$color};
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

const PillarDescription = styled.p`
  color: rgba(255, 255, 255, 0.42);
  line-height: 1.75;
  font-size: 0.875rem;
  margin-bottom: 1.25rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.375rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.425rem;
  color: rgba(255, 255, 255, 0.52);
  font-size: 0.8rem;
  font-weight: 500;

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    background: ${props => props.$color};
    border-radius: 50%;
    flex-shrink: 0;
    opacity: 0.75;
  }
`;

const Pillars = () => {
  const pillars = [
    {
      number: '01',
      icon: '🏛️',
      title: 'Manajemen & Master',
      badge: 'Core',
      description: 'Kelola data master sekolah secara terpusat—profil sekolah multi-tenant, tahun ajaran, semester, kelas, guru, siswa, dan wali murid.',
      color: '#3b82f6',
      features: ['Multi-tenant sekolah', 'Tahun ajaran & semester', 'Manajemen kelas', 'Data guru & karyawan', 'Data siswa & wali', 'RBAC 4 role'],
    },
    {
      number: '02',
      icon: '📚',
      title: 'Akademik Digital',
      badge: 'Academic',
      description: 'Platform pembelajaran digital lengkap: materi, tugas, ujian online dengan bank soal, penilaian, e-rapor, absensi harian, dan jadwal pelajaran.',
      color: '#7c3aed',
      features: ['Upload materi & video', 'Tugas & penilaian', 'Ujian online & bank soal', 'E-Rapor & ranking', 'Absensi digital', 'Jadwal pelajaran'],
    },
    {
      number: '03',
      icon: '💰',
      title: 'Keuangan SPP',
      badge: 'Finance',
      description: 'Pengelolaan keuangan terintegrasi—konfigurasi tarif SPP per kelas, pembayaran, invoice otomatis, dan notifikasi WhatsApp ke orang tua.',
      color: '#059669',
      features: ['Tarif per kelas', 'Pembayaran SPP', 'Invoice otomatis', 'Notifikasi WhatsApp', 'Laporan real-time', 'Riwayat transaksi'],
    },
    {
      number: '04',
      icon: '🤝',
      title: 'Bimbingan Konseling',
      badge: 'BK',
      description: 'Modul BK digital untuk pencatatan kasus siswa, jadwal sesi konseling, tindakan penanganan, lampiran dokumen, dan pelibatan wali murid.',
      color: '#dc2626',
      features: ['Kasus & kategori BK', 'Sesi konseling', 'Tindakan & hasil', 'Pelibatan wali', 'Lampiran dokumen', 'Rekomendasi karir'],
    },
    {
      number: '05',
      icon: '📖',
      title: 'Perpustakaan Digital',
      badge: 'Library',
      description: 'Manajemen perpustakaan modern dengan katalog buku digital, sistem peminjaman & pengembalian, dan tracking denda keterlambatan.',
      color: '#d97706',
      features: ['Katalog buku (ISBN)', 'Peminjaman online', 'Pengembalian & denda', 'Tracking keterlambatan', 'Stok buku real-time', 'Laporan sirkulasi'],
    },
    {
      number: '06',
      icon: '📝',
      title: 'PPDB Online',
      badge: 'PPDB',
      description: 'Penerimaan Peserta Didik Baru berbasis online—gelombang pendaftaran, upload & verifikasi dokumen, proses seleksi, hingga pengumuman digital.',
      color: '#0891b2',
      features: ['Gelombang pendaftaran', 'Form online 24/7', 'Upload dokumen', 'Verifikasi digital', 'Seleksi otomatis', 'Pengumuman online'],
    },
    {
      number: '07',
      icon: '🎯',
      title: 'SPK & Analytics',
      badge: 'Decision',
      description: 'Sistem Pendukung Keputusan berbasis kriteria berbobot, Early Warning System, dashboard statistik, dan rekomendasi otomatis untuk siswa berprestasi.',
      color: '#be123c',
      features: ['Kriteria & bobot SPK', 'Perangkingan otomatis', 'Rekomendasi beasiswa', 'Early Warning System', 'Dashboard statistik', 'Analisis kelulusan'],
    },
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTag>Platform Lengkap</HeroTag>
        <HeroTitle>
          7 Modul <span>Terintegrasi</span>
        </HeroTitle>
        <HeroSubtitle>
          Dari manajemen data master hingga sistem pendukung keputusan—
          seluruh kebutuhan sekolah dalam satu ekosistem digital yang terhubung real-time.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <Container>
          <PillarsGrid>
            {pillars.map((pillar, index) => (
              <PillarCard key={index} $color={pillar.color} $delay={index * 0.07}>
                <PillarHeader>
                  <PillarNum $color={pillar.color}>{pillar.number}</PillarNum>
                  <PillarIconWrap $color={pillar.color}>{pillar.icon}</PillarIconWrap>
                  <PillarTitleWrap>
                    <PillarTitle>{pillar.title}</PillarTitle>
                    <PillarBadge $color={pillar.color}>{pillar.badge}</PillarBadge>
                  </PillarTitleWrap>
                </PillarHeader>
                <PillarDescription>{pillar.description}</PillarDescription>
                <FeatureList>
                  {pillar.features.map((feature, idx) => (
                    <FeatureItem key={idx} $color={pillar.color}>{feature}</FeatureItem>
                  ))}
                </FeatureList>
              </PillarCard>
            ))}
          </PillarsGrid>
        </Container>
      </ContentSection>
    </PageContainer>
  );
};

export default Pillars;
