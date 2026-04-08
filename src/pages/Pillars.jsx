import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
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
  background: linear-gradient(160deg, #0a0f1e 0%, #0f172a 50%, #1a0a2e 100%);
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
    background: radial-gradient(ellipse, rgba(124, 58, 237, 0.14) 0%, transparent 65%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent);
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
  background: rgba(124, 58, 237, 0.12);
  border: 1px solid rgba(124, 58, 237, 0.28);
  color: #c4b5fd;
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
    background: #a78bfa;
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
    background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.5);
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.85;
  position: relative;
`;

/* ── Content ── */
const ContentSection = styled.section`
  padding: 4rem 2rem 6rem;
  background: #f8fafc;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

/* ── Pillar Cards ── */
const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 1.5rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const PillarCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.25rem;
  border: 1px solid #e2e8f0;
  transition: all 0.35s ease;
  animation: ${fadeUp} 0.55s ease-out ${props => props.$delay}s both;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.$color}, ${props => props.$color2 || props.$color});
    border-radius: 20px 20px 0 0;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 56px rgba(0, 0, 0, 0.1);
    border-color: ${props => props.$color}30;
  }
`;

const PillarTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
`;

const PillarIconWrap = styled.div`
  width: 52px;
  height: 52px;
  background: ${props => props.$color}15;
  border: 1.5px solid ${props => props.$color}25;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const PillarTitleArea = styled.div`
  flex: 1;
`;

const PillarNum = styled.div`
  font-size: 0.65rem;
  font-weight: 800;
  color: ${props => props.$color};
  letter-spacing: 0.5px;
  opacity: 0.7;
  margin-bottom: 0.2rem;
`;

const PillarTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.3rem;
  line-height: 1.3;
`;

const PillarBadge = styled.span`
  display: inline-block;
  font-size: 0.68rem;
  background: ${props => props.$color}12;
  color: ${props => props.$color};
  border: 1px solid ${props => props.$color}25;
  padding: 0.18rem 0.6rem;
  border-radius: 5px;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

const PillarDescription = styled.p`
  color: #64748b;
  line-height: 1.8;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #475569;
  font-size: 0.82rem;
  font-weight: 600;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: ${props => props.$color};
    border-radius: 50%;
    flex-shrink: 0;
    opacity: 0.8;
  }
`;

/* ── Extra Modules Section ── */
const ExtraSection = styled.section`
  padding: 5rem 2rem 6rem;
  background: white;
`;

const ExtraSectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 1rem;
  letter-spacing: -0.75px;
`;

const ExtraSectionSub = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 1rem;
  max-width: 560px;
  margin: 0 auto 3rem;
  line-height: 1.8;
`;

const ExtraGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
`;

const ExtraCard = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.75rem;
  transition: all 0.3s;
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  &:hover {
    background: white;
    border-color: ${props => props.$color}30;
    box-shadow: 0 8px 24px rgba(0,0,0,0.07);
    transform: translateY(-3px);
  }
`;

const ExtraIconWrap = styled.div`
  width: 44px;
  height: 44px;
  background: ${props => props.$color}15;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
`;

const ExtraContent = styled.div``;

const ExtraTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.4rem;
`;

const ExtraDesc = styled.p`
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.7;
`;

/* ── CTA ── */
const CTASection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 350px;
    background: radial-gradient(ellipse, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const CTAContent = styled.div`
  max-width: 580px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: -0.75px;
`;

const CTASub = styled.p`
  color: rgba(255, 255, 255, 0.6);
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
  background: white;
  color: #1e40af;
  border-radius: 12px;
  font-weight: 800;
  font-size: 0.975rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0,0,0,0.22);
  }
`;

const CTASecondary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.95rem 2.1rem;
  background: rgba(255,255,255,0.08);
  color: white;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.975rem;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background: rgba(255,255,255,0.14);
    transform: translateY(-2px);
  }
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

const Pillars = () => {
  const pillars = [
    {
      number: '01',
      icon: '🏫',
      title: 'Data Induk Sekolah',
      badge: 'Fondasi Utama',
      description: 'Kelola semua data dasar sekolah dalam satu tempat — profil sekolah, tahun ajaran, kelas, data guru, data siswa, dan data orang tua. Semua terorganisir dan mudah diperbarui.',
      color: '#3b82f6',
      color2: '#60a5fa',
      features: [
        'Profil & data sekolah',
        'Tahun ajaran & semester',
        'Manajemen kelas',
        'Data guru & karyawan',
        'Data siswa lengkap',
        'Data orang tua/wali',
      ],
    },
    {
      number: '02',
      icon: '📚',
      title: 'Kegiatan Belajar Mengajar',
      badge: 'Akademik',
      description: 'Platform belajar digital lengkap: materi pelajaran, tugas, ujian online dengan bank soal, penilaian, rapor digital, absensi harian, dan jadwal pelajaran.',
      color: '#7c3aed',
      color2: '#a78bfa',
      features: [
        'Materi & video belajar',
        'Tugas & penilaian',
        'Ujian online',
        'Bank soal',
        'Rapor digital',
        'Absensi & jadwal',
      ],
    },
    {
      number: '03',
      icon: '💳',
      title: 'Pembayaran & Keuangan Sekolah',
      badge: 'Keuangan',
      description: 'Atur tagihan SPP per kelas, catat pembayaran, buat tagihan otomatis, dan kirim notifikasi ke orang tua lewat WhatsApp. Laporan keuangan tersedia kapan saja.',
      color: '#059669',
      color2: '#34d399',
      features: [
        'Tarif SPP per kelas',
        'Catat pembayaran',
        'Tagihan otomatis',
        'Notifikasi WhatsApp',
        'Laporan keuangan',
        'Riwayat transaksi',
      ],
    },
    {
      number: '04',
      icon: '🤝',
      title: 'Bimbingan & Konseling',
      badge: 'BK',
      description: 'Catat masalah dan perkembangan siswa, jadwalkan sesi konseling, dokumentasikan tindak lanjut, dan libatkan orang tua dalam proses pembinaan.',
      color: '#dc2626',
      color2: '#f87171',
      features: [
        'Catatan kasus siswa',
        'Jadwal konseling',
        'Tindak lanjut',
        'Pelibatan orang tua',
        'Lampiran dokumen',
        'Rekomendasi karir',
      ],
    },
    {
      number: '05',
      icon: '📖',
      title: 'Perpustakaan Digital',
      badge: 'Perpustakaan',
      description: 'Kelola katalog buku, proses peminjaman dan pengembalian, pantau stok buku, dan catat denda keterlambatan secara digital dan efisien.',
      color: '#d97706',
      color2: '#fbbf24',
      features: [
        'Katalog buku digital',
        'Peminjaman online',
        'Pengembalian buku',
        'Catatan denda',
        'Stok buku real-time',
        'Laporan sirkulasi',
      ],
    },
    {
      number: '06',
      icon: '📝',
      title: 'Pendaftaran Siswa Baru (PPDB)',
      badge: 'PPDB',
      description: 'Calon siswa bisa mendaftar online kapan saja. Dokumen diunggah dan diverifikasi secara digital. Proses seleksi otomatis dan hasil diumumkan langsung.',
      color: '#0891b2',
      color2: '#22d3ee',
      features: [
        'Pendaftaran online 24/7',
        'Unggah dokumen',
        'Verifikasi digital',
        'Seleksi otomatis',
        'Pengumuman online',
        'Cek status pendaftaran',
      ],
    },
    {
      number: '07',
      icon: '🎯',
      title: 'Analisis & Rekomendasi Cerdas',
      badge: 'Analitik',
      description: 'Sistem secara otomatis mendeteksi siswa yang perlu perhatian lebih, memberi rekomendasi beasiswa, menyusun peringkat, dan menyajikan data penting untuk kepala sekolah.',
      color: '#be123c',
      color2: '#fb7185',
      features: [
        'Peringatan dini otomatis',
        'Peringkat siswa',
        'Rekomendasi beasiswa',
        'Profil risiko siswa',
        'Dashboard statistik',
        'Analisis kelulusan',
      ],
    },
  ];

  const extraModules = [
    {
      icon: '🗓️',
      title: 'Kalender Akademik',
      desc: 'Atur jadwal kegiatan sekolah, hari libur, dan event penting dalam kalender yang bisa dilihat semua pihak.',
      color: '#6366f1',
    },
    {
      icon: '⚽',
      title: 'Ekstrakurikuler',
      desc: 'Kelola daftar kegiatan ekstrakurikuler, pendaftaran siswa, dan pantau keaktifan peserta.',
      color: '#f59e0b',
    },
    {
      icon: '🏛️',
      title: 'Organisasi Siswa',
      desc: 'Catat struktur organisasi siswa, jabatan, dan keanggotaan aktif di setiap periode.',
      color: '#8b5cf6',
    },
    {
      icon: '🧠',
      title: 'Tes Minat & Bakat',
      desc: 'Bantu siswa mengenali potensi diri melalui tes terstruktur dengan hasil dan rekomendasi yang jelas.',
      color: '#ec4899',
    },
    {
      icon: '📈',
      title: 'Laporan & Statistik',
      desc: 'Laporan lengkap untuk semua area: akademik, keuangan, kehadiran, BK, dan PPDB dalam satu dashboard.',
      color: '#14b8a6',
    },
    {
      icon: '🔔',
      title: 'Notifikasi Cerdas',
      desc: 'Pesan penting dikirim otomatis ke orang tua via WhatsApp — dari tagihan, kehadiran, hingga pengumuman sekolah.',
      color: '#22c55e',
    },
    {
      icon: '🎓',
      title: 'Portal Siswa',
      desc: 'Siswa bisa melihat jadwal, nilai, tugas, materi belajar, absensi, dan status pembayaran dari satu halaman.',
      color: '#3b82f6',
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Portal Orang Tua',
      desc: 'Orang tua bisa memantau perkembangan anak — nilai, kehadiran, tagihan, dan jadwal — kapan saja dari HP.',
      color: '#10b981',
    },
    {
      icon: '📋',
      title: 'Jadwal Pelajaran',
      desc: 'Buat dan kelola jadwal pelajaran per kelas. Guru dan siswa bisa melihat jadwal mereka secara langsung.',
      color: '#f97316',
    },
    {
      icon: '📂',
      title: 'Materi & Tugas Digital',
      desc: 'Guru bisa mengunggah materi, video, dan tugas. Siswa mengumpulkan tugas secara online dan mendapat nilai langsung.',
      color: '#7c3aed',
    },
    {
      icon: '💬',
      title: 'Forum Diskusi',
      desc: 'Guru dan siswa bisa berdiskusi tentang materi pelajaran dalam forum yang terorganisir per mata pelajaran.',
      color: '#0891b2',
    },
    {
      icon: '🔍',
      title: 'Profil Risiko Siswa 360°',
      desc: 'Sistem menganalisis kondisi siswa dari 5 sisi: akademik, kehadiran, perilaku, keuangan, dan sosial untuk deteksi dini.',
      color: '#be123c',
    },
    {
      icon: '📊',
      title: 'Dashboard Kepala Sekolah',
      desc: 'Ringkasan kondisi sekolah dalam satu halaman: jumlah siswa hadir, tagihan belum bayar, nilai rata-rata, dan lainnya.',
      color: '#d97706',
    },
    {
      icon: '🔑',
      title: 'Manajemen Hak Akses',
      desc: 'Atur siapa bisa melihat dan mengubah data apa. Setiap pengguna hanya mengakses fitur yang sesuai perannya.',
      color: '#64748b',
    },
    {
      icon: '📄',
      title: 'Laporan Cetak Otomatis',
      desc: 'Cetak rapor, surat keterangan, dan laporan keuangan langsung dari sistem dalam format yang siap pakai.',
      color: '#059669',
    },
    {
      icon: '🏫',
      title: 'Profil & Pengaturan Sekolah',
      desc: 'Kelola identitas sekolah, logo, tahun ajaran aktif, dan konfigurasi sistem sesuai kebutuhan sekolah.',
      color: '#2563eb',
    },
    {
      icon: '📝',
      title: 'Catatan Aktivitas Sistem',
      desc: 'Rekam jejak semua aktivitas penting di sistem — siapa mengubah apa dan kapan — untuk keamanan dan audit.',
      color: '#475569',
    },
  ];

  return (
    <PageContainer>
      {/* ── Hero ── */}
      <HeroSection>
        <HeroGrid />
        <HeroTag>
          <span className="dot" />
          Platform Lengkap
        </HeroTag>
        <HeroTitle>
          Semua Fitur yang Dibutuhkan<br />
          <span>Sekolah Modern</span>
        </HeroTitle>
        <HeroSubtitle>
          7 modul utama yang saling terhubung, ditambah fitur pendukung lengkap —
          semua dirancang agar mudah digunakan oleh siapa saja di sekolah.
        </HeroSubtitle>
      </HeroSection>

      {/* ── 7 Pillars ── */}
      <ContentSection>
        <Container>
          <SectionEyebrowWrap>
            <SectionEyebrow>🧩 7 Modul Inti</SectionEyebrow>
          </SectionEyebrowWrap>
          <ExtraSectionTitle style={{ marginBottom: '0.75rem' }}>Modul Utama Akademihub</ExtraSectionTitle>
          <ExtraSectionSub>
            Setiap modul dirancang untuk menyelesaikan masalah nyata di sekolah,
            dan semuanya saling terhubung dalam satu sistem.
          </ExtraSectionSub>
          <PillarsGrid>
            {pillars.map((pillar, index) => (
              <PillarCard
                key={index}
                $color={pillar.color}
                $color2={pillar.color2}
                $delay={index * 0.06}
              >
                <PillarTopRow>
                  <PillarIconWrap $color={pillar.color}>{pillar.icon}</PillarIconWrap>
                  <PillarTitleArea>
                    <PillarNum $color={pillar.color}>{pillar.number}</PillarNum>
                    <PillarTitle>{pillar.title}</PillarTitle>
                    <PillarBadge $color={pillar.color}>{pillar.badge}</PillarBadge>
                  </PillarTitleArea>
                </PillarTopRow>
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

      {/* ── Extra Modules ── */}
      <ExtraSection>
        <Container>
          <SectionEyebrowWrap>
            <SectionEyebrow>➕ Fitur Tambahan</SectionEyebrow>
          </SectionEyebrowWrap>
          <ExtraSectionTitle>Lebih dari Sekadar 7 Modul</ExtraSectionTitle>
          <ExtraSectionSub>
            Akademihub juga dilengkapi fitur-fitur pendukung yang membuat
            pengelolaan sekolah semakin lengkap dan efisien.
          </ExtraSectionSub>
          <ExtraGrid>
            {extraModules.map((m, i) => (
              <ExtraCard key={i} $color={m.color}>
                <ExtraIconWrap $color={m.color}>{m.icon}</ExtraIconWrap>
                <ExtraContent>
                  <ExtraTitle>{m.title}</ExtraTitle>
                  <ExtraDesc>{m.desc}</ExtraDesc>
                </ExtraContent>
              </ExtraCard>
            ))}
          </ExtraGrid>
        </Container>
      </ExtraSection>

      {/* ── CTA ── */}
      <CTASection>
        <CTAContent>
          <CTATitle>Tertarik Mencoba Semua Fitur Ini?</CTATitle>
          <CTASub>
            Akses demo langsung dan jelajahi semua modul secara gratis.
            Tidak perlu instalasi, langsung bisa digunakan.
          </CTASub>
          <CTAButtons>
            <CTAPrimary href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
              🚀 Coba Demo Gratis
            </CTAPrimary>
            <CTASecondary to="/contact">
              💬 Tanya Tim Kami
            </CTASecondary>
          </CTAButtons>
        </CTAContent>
      </CTASection>
    </PageContainer>
  );
};

export default Pillars;
