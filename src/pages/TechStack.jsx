import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
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
    background: radial-gradient(ellipse, rgba(6, 182, 212, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeroTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(6, 182, 212, 0.1);
  border: 1px solid rgba(6, 182, 212, 0.22);
  color: #67e8f9;
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
  line-height: 1.8;
  position: relative;
`;

const ContentSection = styled.section`
  padding: 3.5rem 2rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CategoryLabel = styled.h2`
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${props => props.$color || '#60a5fa'};
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.$color || '#60a5fa'}28;
  }
`;

const TechGroupSection = styled.div`
  margin-bottom: 3.5rem;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  gap: 1.25rem;
`;

const TechCard = styled.div`
  background: #1e293b;
  border-radius: 14px;
  padding: 1.5rem;
  border: 1px solid #1e293b;
  border-top: 3px solid ${props => props.$color};
  transition: all 0.3s;
  animation: ${fadeUp} 0.5s ease-out ${props => props.$delay}s both;

  &:hover {
    background: #243349;
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.22);
    border-color: ${props => props.$color}45;
    border-top-color: ${props => props.$color};
  }
`;

const TechHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 0.875rem;
`;

const TechIconWrap = styled.div`
  width: 48px;
  height: 48px;
  background: ${props => props.$bg};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const TechInfo = styled.div``;

const TechName = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: white;
`;

const TechVersion = styled.span`
  display: inline-block;
  background: ${props => props.$bg};
  color: ${props => props.$color};
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  margin-top: 0.2rem;
  letter-spacing: 0.3px;
`;

const TechDescription = styled.p`
  color: rgba(255, 255, 255, 0.42);
  line-height: 1.7;
  font-size: 0.845rem;
  margin-bottom: 0.875rem;
`;

const TechFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TechFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.78rem;
  margin-bottom: 0.3rem;

  &::before {
    content: '▸';
    color: ${props => props.$color};
    font-size: 0.68rem;
  }
`;

/* ── Architecture ── */
const ArchSection = styled.section`
  padding: 0 2rem 5.5rem;
`;

const ArchTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
`;

const ArchSub = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.42);
  font-size: 0.95rem;
  margin-bottom: 2.5rem;
  line-height: 1.7;
`;

const ArchDiagram = styled.div`
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const ArchBox = styled.div`
  background: #1e293b;
  border: 1px solid ${props => props.$color}28;
  border-radius: 10px;
  padding: 1.125rem 1.5rem;
  text-align: center;
`;

const ArchBoxTitle = styled.div`
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  color: ${props => props.$color};
  margin-bottom: 0.6rem;
`;

const ArchBoxItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
`;

const ArchChip = styled.span`
  background: ${props => props.$color}12;
  color: rgba(255, 255, 255, 0.55);
  border: 1px solid ${props => props.$color}22;
  padding: 0.25rem 0.65rem;
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ArchArrow = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.18);
  font-size: 1.2rem;
  line-height: 1;
`;

const TechStack = () => {
  const backendTechs = [
    {
      name: 'Pemrograman Modern',
      version: 'Otak Sistem',
      icon: '🔥',
      description: 'Otak di balik sistem — mengatur semua logika bisnis, dari proses login siswa hingga pembuatan laporan otomatis.',
      color: '#ef4444',
      bg: '#fee2e215',
      features: ['Pengelola data sekolah', 'Proses otomatis latar belakang', 'Query data cepat', 'Antrian tugas terjadwal'],
    },
    {
      name: 'Database',
      version: 'Penyimpanan Data',
      icon: '🐬',
      description: 'Lemari arsip digital tempat semua data — siswa, nilai, keuangan — tersimpan rapi, aman, dan mudah dicari.',
      color: '#f97316',
      bg: '#ffedd515',
      features: ['Simpan data siswa & guru', 'Pencarian data cepat', 'Hubungan antar data terstruktur', 'Efisien untuk data besar'],
    },
    {
      name: 'Cache Cepat',
      version: 'Memori Sementara',
      icon: '⚡',
      description: 'Memori kilat sistem — menyimpan data yang sering diakses agar halaman aplikasi terbuka lebih cepat.',
      color: '#dc2626',
      bg: '#fee2e215',
      features: ['Halaman lebih cepat dimuat', 'Sesi login tersimpan', 'Antrian pesan WhatsApp', 'Pembatasan akses berlebih'],
    },
    {
      name: 'Gudang File Digital',
      version: 'Penyimpanan Berkas',
      icon: '🗄️',
      description: 'Gudang file digital — menyimpan foto, dokumen, dan materi pembelajaran dengan aman dan bisa diakses kapan saja.',
      color: '#c2410c',
      bg: '#fed7aa15',
      features: ['Upload foto & dokumen', 'Dokumen PPDB online', 'Materi pembelajaran', 'Ketersediaan tinggi'],
    },
    {
      name: 'Notifikasi Instan',
      version: 'Pembaruan Langsung',
      icon: '📡',
      description: 'Perubahan data langsung muncul di layar tanpa perlu refresh halaman — seperti fitur chat yang selalu up-to-date.',
      color: '#0891b2',
      bg: '#cffafe15',
      features: ['Absensi tampil langsung', 'Nilai terbaru seketika', 'Update tagihan real-time', 'Dashboard aktif otomatis'],
    },
    {
      name: 'Pesan WhatsApp Otomatis',
      version: 'Notifikasi Orang Tua',
      icon: '💬',
      description: 'Kirim pesan otomatis ke orang tua lewat WhatsApp — mulai dari info absensi, tagihan SPP, hingga pengumuman sekolah.',
      color: '#059669',
      bg: '#d1fae515',
      features: ['Info absensi ke orang tua', 'Tagihan SPP otomatis', 'Update status PPDB', 'Peringatan dini siswa'],
    },
    {
      name: 'Sistem Login Aman',
      version: 'Keamanan Akses',
      icon: '🔐',
      description: 'Sistem keamanan login — setiap pengguna hanya bisa mengakses fitur sesuai perannya: admin, guru, siswa, atau orang tua.',
      color: '#7c3aed',
      bg: '#ede9fe15',
      features: ['Login aman bertoken', 'Perpanjang sesi otomatis', 'Logout paksa dari server', '4 level hak akses'],
    },
    {
      name: 'Infrastruktur Server',
      version: 'Pengelola Layanan',
      icon: '🐳',
      description: 'Seluruh komponen sistem dikemas rapi dalam satu paket — instalasi mudah dan siap dijalankan di server manapun.',
      color: '#2496ed',
      bg: '#dbeafe15',
      features: ['Instalasi satu perintah', 'Gerbang lalu lintas web', 'Data tersimpan aman', 'Enkripsi HTTPS'],
    },
  ];

  const frontendTechs = [
    {
      name: 'Tampilan Interaktif',
      version: 'Antarmuka Pengguna',
      icon: '⚛️',
      description: 'Teknologi di balik tampilan aplikasi — setiap tombol, formulir, dan halaman dibuat responsif dan cepat diperbarui.',
      color: '#61dafb',
      bg: '#e0f2fe15',
      features: ['Navigasi tanpa reload', 'Pembaruan tampilan cepat', 'Komponen bisa dipakai ulang', 'Muat halaman sesuai kebutuhan'],
    },
    {
      name: 'Pengemas Aplikasi',
      version: 'Pembangun Aplikasi',
      icon: '⚡',
      description: 'Alat yang mengemas semua kode menjadi file ringan agar aplikasi terbuka dengan cepat di browser pengguna.',
      color: '#f97316',
      bg: '#ffedd515',
      features: ['Preview perubahan instan', 'File aplikasi lebih kecil', 'Muat hanya yang dibutuhkan', 'Optimasi otomatis'],
    },
    {
      name: 'Desain Antarmuka & Responsif',
      version: 'Tampilan & Warna',
      icon: '🎨',
      description: 'Sistem desain visual — mengatur warna, ukuran teks, dan tata letak agar tampilan terlihat profesional di semua ukuran layar.',
      color: '#06b6d4',
      bg: '#cffafe15',
      features: ['Tampilan konsisten', 'Otomatis menyesuaikan layar', 'Mode gelap tersedia', 'Desain profesional'],
    },
    {
      name: 'Koneksi Data & Tabel Canggih',
      version: 'Pengambil & Penampil Data',
      icon: '📊',
      description: 'Jembatan antara tampilan dan server — mengambil data terbaru, lalu menampilkan ribuan baris data dengan lancar dan bisa difilter.',
      color: '#7c3aed',
      bg: '#ede9fe15',
      features: ['Ambil data dari server', 'Tabel ribuan baris lancar', 'Filter & urutkan kolom', 'Ekspor data mudah'],
    },
  ];

  const archLayers = [
    { color: '#60a5fa', title: '👤 Tampilan Pengguna (Browser)', items: ['Antarmuka Interaktif', 'Pengemas Aplikasi', ' Desain Visual', 'Axios · Pengambil Data', 'Tabel Canggih', 'Pembaruan Langsung Otomatis'] },
    { color: '#34d399', title: '🚦 Gerbang Lalu Lintas (Nginx)', items: ['Enkripsi HTTPS', 'File Statis & Gambar', 'WebSocket Pass-through', 'Koneksi ke Backend'] },
    { color: '#ef4444', title: '⚙️ Otak Sistem (Backend)', items: ['Pengontrol Permintaan', 'Logika Bisnis', 'Akses Database Terstruktur', 'Query Data Efisien', 'Proses Latar Belakang'] },
    { color: '#f97316', title: '🗃️ Penyimpanan Data', items: ['Database Utama', 'Cache & Antrian', 'Gudang File Digital'] },
    { color: '#a78bfa', title: '🔔 Notifikasi & Integrasi', items: ['Pembaruan Langsung', 'WhatsApp · Pesan Otomatis', 'Antrian · Proses Background'] },
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTag>Teknologi &amp; Infrastruktur</HeroTag>
        <HeroTitle>
          Teknologi <span>Terpercaya</span>
        </HeroTitle>
        <HeroSubtitle>
          Dibangun dengan teknologi modern yang andal — tampilan responsif, penyimpanan data aman,
          notifikasi WhatsApp otomatis ke orang tua, hingga pembaruan data secara langsung tanpa perlu refresh halaman.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <Container>
          {/* Backend */}
          <TechGroupSection>
            <CategoryLabel $color="#ef4444">🔥 Teknologi Server (Backend)</CategoryLabel>
            <TechGrid>
              {backendTechs.map((tech, i) => (
                <TechCard key={i} $color={tech.color} $delay={i * 0.055}>
                  <TechHeader>
                    <TechIconWrap $bg={tech.bg}>{tech.icon}</TechIconWrap>
                    <TechInfo>
                      <TechName>{tech.name}</TechName>
                      <TechVersion $bg={tech.bg} $color={tech.color}>{tech.version}</TechVersion>
                    </TechInfo>
                  </TechHeader>
                  <TechDescription>{tech.description}</TechDescription>
                  <TechFeatures>
                    {tech.features.map((f, j) => (
                      <TechFeature key={j} $color={tech.color}>{f}</TechFeature>
                    ))}
                  </TechFeatures>
                </TechCard>
              ))}
            </TechGrid>
          </TechGroupSection>

          {/* Frontend */}
          <TechGroupSection>
            <CategoryLabel $color="#60a5fa">⚛️ Teknologi Tampilan (Frontend)</CategoryLabel>
            <TechGrid>
              {frontendTechs.map((tech, i) => (
                <TechCard key={i} $color={tech.color} $delay={i * 0.055}>
                  <TechHeader>
                    <TechIconWrap $bg={tech.bg}>{tech.icon}</TechIconWrap>
                    <TechInfo>
                      <TechName>{tech.name}</TechName>
                      <TechVersion $bg={tech.bg} $color={tech.color}>{tech.version}</TechVersion>
                    </TechInfo>
                  </TechHeader>
                  <TechDescription>{tech.description}</TechDescription>
                  <TechFeatures>
                    {tech.features.map((f, j) => (
                      <TechFeature key={j} $color={tech.color}>{f}</TechFeature>
                    ))}
                  </TechFeatures>
                </TechCard>
              ))}
            </TechGrid>
          </TechGroupSection>
        </Container>
      </ContentSection>

      {/* Architecture Diagram */}
      <ArchSection>
        <Container>
          <ArchTitle>Cara Kerja Sistem</ArchTitle>
          <ArchSub>
            Alur sistem dari tampilan pengguna hingga penyimpanan data — setiap lapisan punya peran khusus yang saling mendukung.
          </ArchSub>
          <ArchDiagram>
            {archLayers.map((layer, i) => (
              <div key={i}>
                <ArchBox $color={layer.color}>
                  <ArchBoxTitle $color={layer.color}>{layer.title}</ArchBoxTitle>
                  <ArchBoxItems>
                    {layer.items.map((item, j) => (
                      <ArchChip key={j} $color={layer.color}>{item}</ArchChip>
                    ))}
                  </ArchBoxItems>
                </ArchBox>
                {i < archLayers.length - 1 && <ArchArrow>↓</ArchArrow>}
              </div>
            ))}
          </ArchDiagram>
        </Container>
      </ArchSection>
    </PageContainer>
  );
};

export default TechStack;
