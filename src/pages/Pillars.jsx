import styled, { keyframes } from 'styled-components';
import {
  SchoolIcon,
  BookOpenIcon,
  WalletIcon,
  UsersIcon,
  LibraryIcon,
  UserCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  ZapIcon,
  DatabaseIcon,
  CpuIcon,
  ShieldCheckIcon,
  ClockIcon,
  SmartphoneIcon
} from '../components/Icons';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.08); }
`;

const PageContainer = styled.div`
  min-height: calc(100vh - 72px);
  background: #030712;
  color: #f8fafc;
`;

/* ── Hero Section ── */
const HeroSection = styled.section`
  background: radial-gradient(circle at 50% -20%, #1e1b4b 0%, #090d16 50%, #030712 100%);
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
    background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 65%);
    pointer-events: none;
    animation: ${pulseGlow} 8s ease-in-out infinite;
  }
`;

const HeroGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, transparent 70%);
`;

const HeroTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #c4b5fd;
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
    background: linear-gradient(135deg, #a78bfa 0%, #38bdf8 50%, #34d399 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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

/* ── Content Section ── */
const ContentSection = styled.section`
  padding: 5rem 2rem 6rem;
  background: #030712;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 1.75rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PillarCard = styled.div`
  background: rgba(15, 23, 42, 0.65);
  border-radius: 20px;
  padding: 2.25rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  animation: ${fadeUp} 0.55s ease-out ${props => props.$delay}s both;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(16px);

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${props => props.$color}, ${props => props.$color2 || props.$color});
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, ${props => props.$color}15 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 50px -15px rgba(0, 0, 0, 0.7);
    border-color: ${props => props.$color}40;
    &::after { opacity: 1; }
  }
`;

const PillarTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  position: relative;
  z-index: 1;
`;

const PillarIconWrap = styled.div`
  width: 52px;
  height: 52px;
  background: ${props => props.$color}15;
  border: 1.5px solid ${props => props.$color}30;
  color: ${props => props.$color};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const PillarTitleArea = styled.div`
  flex: 1;
`;

const PillarNum = styled.div`
  font-size: 0.72rem;
  font-weight: 800;
  color: ${props => props.$color};
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 1px;
  margin-bottom: 0.2rem;
`;

const PillarTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 800;
  color: #f8fafc;
  margin-bottom: 0.3rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
`;

const PillarBadge = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  background: ${props => props.$color}12;
  color: ${props => props.$color};
  border: 1px solid ${props => props.$color}25;
  padding: 0.18rem 0.65rem;
  border-radius: 50px;
  font-weight: 700;
`;

const PillarDescription = styled.p`
  color: #94a3b8;
  line-height: 1.75;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  position: relative;
  z-index: 1;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #cbd5e1;
  font-size: 0.82rem;
  font-weight: 600;
`;

/* ── Extra Modules Section ── */
const ExtraSection = styled.section`
  padding: 5rem 2rem 6rem;
  background: #090d16;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const ExtraGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const ExtraCard = styled.div`
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.75rem;
  transition: all 0.3s;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(15, 23, 42, 0.8);
    border-color: ${props => props.$color}40;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    transform: translateY(-3px);
  }
`;

const ExtraIconWrap = styled.div`
  width: 44px;
  height: 44px;
  background: ${props => props.$color}15;
  border: 1px solid ${props => props.$color}25;
  color: ${props => props.$color};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ExtraContent = styled.div``;

const ExtraTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 800;
  color: #f8fafc;
  margin-bottom: 0.4rem;
`;

const ExtraDesc = styled.p`
  font-size: 0.84rem;
  color: #94a3b8;
  line-height: 1.65;
`;

/* ── CTA Banner ── */
const CTASection = styled.section`
  padding: 6rem 2rem;
  background: #030712;
`;

const CTABox = styled.div`
  background: radial-gradient(circle at center, #1e1b4b 0%, #0f172a 70%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 28px;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 60px rgba(139, 92, 246, 0.15);
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
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(6, 182, 212, 0.4);
    transform: translateY(-2px);
  }
`;

const Pillars = () => {
  const pillars = [
    {
      number: '01',
      icon: SchoolIcon,
      title: 'Data Induk Sekolah',
      badge: 'Fondasi Utama',
      description: 'Kelola seluruh entitas dasar sekolah: profil, semester aktif, rombongan belajar, data siswa dengan NISN, PTK, dan akun orang tua dalam satu database terpusat.',
      color: '#38bdf8',
      color2: '#60a5fa',
      features: [
        'Profil & SK Operasional',
        'Tahun Ajaran & Semester',
        'Manajemen Rombel & Kelas',
        'Data Guru & Pegawai',
        'Data Siswa & Wali Murid',
        'Riwayat Mutasi & Alumni',
      ],
    },
    {
      number: '02',
      icon: BookOpenIcon,
      title: 'Kegiatan Belajar Mengajar',
      badge: 'Akademik & Rapor',
      description: 'Platform KBM modern dengan CBT ujian online, bank soal, absensi barcode guru/siswa, dan modul e-Rapor Kurikulum Merdeka siap cetak masal.',
      color: '#a78bfa',
      color2: '#c084fc',
      features: [
        'Ujian Online CBT & Acak',
        'Bank Soal Terdistribusi',
        'Input Nilai Terstandar',
        'Generate Rapor PDF',
        'Absensi Real-time Mobile',
        'Jadwal Pelajaran Otomatis',
      ],
    },
    {
      number: '03',
      icon: WalletIcon,
      title: 'Pembayaran & Keuangan',
      badge: 'Finansial & SPP',
      description: 'Otomasi penerbitan tagihan SPP bulanan, rekonsiliasi kas masuk, kwitansi digital, dan integrasi WhatsApp bot pengingat jatuh tempo.',
      color: '#34d399',
      color2: '#10b981',
      features: [
        'Setting Tarif SPP per Kelas',
        'Catat Pembayaran & Kasir',
        'Kirim Invoice via WhatsApp',
        'Laporan Kas & Jurnal',
        'Status Tunggakan Siswa',
        'Cetak Kwitansi Otomatis',
      ],
    },
    {
      number: '04',
      icon: UsersIcon,
      title: 'Bimbingan & Konseling',
      badge: 'Pembinaan Karakter',
      description: 'Pencatatan kasus pelanggaran, penghargaan poin prestasi, rekam konseling psikologis siswa, dan jalur komunikasi privat dengan orang tua.',
      color: '#f87171',
      color2: '#ef4444',
      features: [
        'Buku Catatan Kasus & Poin',
        'Jadwal Sesi Konseling',
        'Riwayat Pembinaan Siswa',
        'Notifikasi Rahasia ke Ortu',
        'Rekomendasi Karir/Kuliah',
        'Arsip Dokumen Konseling',
      ],
    },
    {
      number: '05',
      icon: LibraryIcon,
      title: 'Perpustakaan Digital',
      badge: 'Katalog & Sirkulasi',
      description: 'Manajemen koleksi literasi fisik dan e-book. Sirkulasi peminjaman cepat dengan scanner barcode, kalkulasi denda otomatis, dan log pembaca.',
      color: '#fbbf24',
      color2: '#f59e0b',
      features: [
        'Katalog E-Book & Fisik',
        'Peminjaman Scan Barcode',
        'Hitung Denda Otomatis',
        'Label Barcode Buku',
        'Statistik Buku Terpopuler',
        'Laporan Stok Inventaris',
      ],
    },
    {
      number: '06',
      icon: UserCheckIcon,
      title: 'PPDB Online Terpadu',
      badge: 'Penerimaan Siswa',
      description: 'Portal mandiri pendaftaran peserta didik baru. Formulir dinamis, verifikasi berkas online, ujian seleksi mandiri, dan pengumuman instan.',
      color: '#22d3ee',
      color2: '#06b6d4',
      features: [
        'Formulir Publik Mandiri',
        'Unggah & Verifikasi Berkas',
        'Multi-Jalur (Zonasi/Prestasi)',
        'Ujian Seleksi Online CBT',
        'Pengumuman Kelulusan',
        'Daftar Ulang Digital',
      ],
    },
    {
      number: '07',
      icon: SparklesIcon,
      title: 'Analisis & SPK Cerdas',
      badge: 'Smart Decision',
      description: 'Sistem pendukung keputusan menggunakan algoritma SAW dan TOPSIS untuk perangkingan siswa teladan, beasiswa, dan peringatan dini akademik.',
      color: '#ec4899',
      color2: '#f43f5e',
      features: [
        'Algoritma SAW & TOPSIS',
        'Rekomendasi Penerima Beasiswa',
        'Deteksi Penurunan Prestasi',
        'Kriteria Bobot Dinamis',
        'Visualisasi Grafik Tren',
        'Export Laporan Rekomendasi',
      ],
    },
  ];

  const extraModules = [
    {
      icon: SmartphoneIcon,
      title: 'Mobile-First Responsive',
      desc: 'Dapat diakses sempurna dari browser smartphone tanpa perlu menginstal aplikasi tambahan.',
      color: '#38bdf8',
    },
    {
      icon: DatabaseIcon,
      title: 'Backup & Proteksi Otomatis',
      desc: 'Penyimpanan data cloud dengan backup berkala dan keamanan setara enterprise perbankan.',
      color: '#a78bfa',
    },
    {
      icon: ClockIcon,
      title: 'Real-time Event Synchronization',
      desc: 'Setiap input nilai atau kehadiran langsung tersinkronisasi detik itu juga ke dashboard pimpinan.',
      color: '#34d399',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Hak Akses Multi-Level',
      desc: 'Isolasi data ketat memastikan setiap peran (Kepsek, Guru, Siswa, Ortu) hanya melihat datanya sendiri.',
      color: '#f87171',
    },
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroGrid />
        <HeroTag>
          <ZapIcon size={14} />
          <span>7 Modul Lengkap & Sinergis</span>
        </HeroTag>
        <HeroTitle>
          Ekosistem Manajemen Sekolah <span>Paling Komprehensif</span>
        </HeroTitle>
        <HeroSubtitle>
          Jelajahi seluruh modul inti yang dirancang untuk mengotomatisasi setiap lini operasional sekolah Anda dalam satu ekosistem terpadu.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <Container>
          <PillarsGrid>
            {pillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <PillarCard
                  key={pillar.number}
                  $color={pillar.color}
                  $color2={pillar.color2}
                  $delay={idx * 0.08}
                >
                  <PillarTopRow>
                    <PillarIconWrap $color={pillar.color}>
                      <PillarIcon size={26} />
                    </PillarIconWrap>
                    <PillarTitleArea>
                      <PillarNum $color={pillar.color}>MODUL {pillar.number}</PillarNum>
                      <PillarTitle>{pillar.title}</PillarTitle>
                      <PillarBadge $color={pillar.color}>{pillar.badge}</PillarBadge>
                    </PillarTitleArea>
                  </PillarTopRow>

                  <PillarDescription>{pillar.description}</PillarDescription>

                  <FeatureList>
                    {pillar.features.map((feature, fIdx) => (
                      <FeatureItem key={fIdx}>
                        <CheckCircleIcon size={15} color={pillar.color} />
                        <span>{feature}</span>
                      </FeatureItem>
                    ))}
                  </FeatureList>
                </PillarCard>
              );
            })}
          </PillarsGrid>
        </Container>
      </ContentSection>

      <ExtraSection>
        <Container>
          <SectionHeader>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#06b6d4', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
              Keunggulan Fondasi
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#f8fafc', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
              Didukung Pondasi Teknologi Terdepan
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '580px', margin: '0 auto', lineHeight: '1.75' }}>
              Kecepatan, kestabilan, dan kemudahan akses dijamin oleh arsitektur sistem berbasis cloud.
            </p>
          </SectionHeader>

          <ExtraGrid>
            {extraModules.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <ExtraCard key={idx} $color={item.color}>
                  <ExtraIconWrap $color={item.color}>
                    <ItemIcon size={22} />
                  </ExtraIconWrap>
                  <ExtraContent>
                    <ExtraTitle>{item.title}</ExtraTitle>
                    <ExtraDesc>{item.desc}</ExtraDesc>
                  </ExtraContent>
                </ExtraCard>
              );
            })}
          </ExtraGrid>
        </Container>
      </ExtraSection>

      <CTASection>
        <Container>
          <CTABox>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: '#f8fafc', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Coba Langsung Semua Modul Ini di Demo
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto 2.25rem', lineHeight: '1.8' }}>
              Akses platform live AkademiHub tanpa biaya pendaftaran awal. Rasakan kemudahan manajemen sekolah serba otomatis.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <GlowPrimaryBtn href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
                <span>Buka Demo AkademiHub</span>
                <ArrowUpRightIcon size={16} />
              </GlowPrimaryBtn>
              <GlassSecondaryBtn href="/contact">
                <span>Konsultasi Kebutuhan</span>
                <ArrowRightIcon size={16} />
              </GlassSecondaryBtn>
            </div>
          </CTABox>
        </Container>
      </CTASection>
    </PageContainer>
  );
};

export default Pillars;
