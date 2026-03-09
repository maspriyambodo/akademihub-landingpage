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
      description: 'Bagian utama yang menjalankan perintah penting di sistem, seperti login, menyimpan data, dan membuat laporan secara otomatis.',
      color: '#ef4444',
      bg: '#fee2e215',
      features: ['Mengatur proses penting aplikasi', 'Menjalankan tugas otomatis', 'Mengambil data dengan cepat', 'Mengatur pekerjaan yang antre'],
    },
    {
      name: 'Database',
      version: 'Penyimpanan Data',
      icon: '🐬',
      description: 'Tempat penyimpanan utama untuk semua data sekolah, seperti data siswa, nilai, dan pembayaran, agar rapi dan mudah dicari.',
      color: '#f97316',
      bg: '#ffedd515',
      features: ['Menyimpan data sekolah', 'Mencari data lebih cepat', 'Data saling terhubung rapi', 'Tetap lancar untuk data banyak'],
    },
    {
      name: 'Cache Cepat',
      version: 'Memori Sementara',
      icon: '⚡',
      description: 'Penyimpanan sementara untuk data yang sering dibuka agar aplikasi terasa lebih cepat.',
      color: '#dc2626',
      bg: '#fee2e215',
      features: ['Membuat halaman lebih cepat', 'Menyimpan status login sementara', 'Membantu antrean pesan WhatsApp', 'Mencegah akses terlalu sering'],
    },
    {
      name: 'Gudang File Digital',
      version: 'Penyimpanan Berkas',
      icon: '🗄️',
      description: 'Tempat menyimpan file seperti foto, dokumen, dan materi belajar agar aman dan mudah diakses.',
      color: '#c2410c',
      bg: '#fed7aa15',
      features: ['Simpan foto dan dokumen', 'Menyimpan berkas pendaftaran', 'Menyimpan materi belajar', 'File tetap mudah diakses'],
    },
    {
      name: 'Notifikasi Instan',
      version: 'Pembaruan Langsung',
      icon: '📡',
      description: 'Perubahan data bisa langsung terlihat di layar tanpa perlu memuat ulang halaman.',
      color: '#0891b2',
      bg: '#cffafe15',
      features: ['Absensi langsung terlihat', 'Nilai terbaru cepat muncul', 'Tagihan langsung diperbarui', 'Dashboard selalu up to date'],
    },
    {
      name: 'Pesan WhatsApp Otomatis',
      version: 'Notifikasi Orang Tua',
      icon: '💬',
      description: 'Sistem bisa mengirim pesan WhatsApp otomatis ke orang tua untuk absensi, tagihan, dan pengumuman sekolah.',
      color: '#059669',
      bg: '#d1fae515',
      features: ['Kirim info absensi', 'Kirim tagihan otomatis', 'Memberi kabar status pendaftaran', 'Mengirim peringatan penting lebih cepat'],
    },
    {
      name: 'Sistem Login Aman',
      version: 'Keamanan Akses',
      icon: '🔐',
      description: 'Keamanan login yang memastikan setiap pengguna hanya melihat fitur yang sesuai dengan perannya.',
      color: '#7c3aed',
      bg: '#ede9fe15',
      features: ['Login lebih aman', 'Sesi bisa diperpanjang otomatis', 'Keluar akun bisa dikendalikan dari pusat', 'Hak akses dibagi sesuai pengguna'],
    },
    {
      name: 'Infrastruktur Server',
      version: 'Pengelola Layanan',
      icon: '🐳',
      description: 'Susunan layanan server dibuat rapi agar sistem mudah dipasang, dijalankan, dan dipindahkan bila diperlukan.',
      color: '#2496ed',
      bg: '#dbeafe15',
      features: ['Pemasangan lebih mudah', 'Mengatur jalur akses website', 'Data tetap aman', 'Koneksi website terenkripsi'],
    },
  ];

  const frontendTechs = [
    {
      name: 'Tampilan Interaktif',
      version: 'Antarmuka Pengguna',
      icon: '⚛️',
      description: 'Bagian yang membuat tampilan aplikasi terlihat rapi, mudah dipakai, dan cepat berubah saat ada data baru.',
      color: '#61dafb',
      bg: '#e0f2fe15',
      features: ['Pindah halaman terasa mulus', 'Tampilan cepat diperbarui', 'Bagian tampilan bisa dipakai ulang', 'Halaman dimuat seperlunya'],
    },
    {
      name: 'Pengemas Aplikasi',
      version: 'Pembangun Aplikasi',
      icon: '⚡',
      description: 'Alat yang menyiapkan aplikasi agar ukurannya lebih ringan dan lebih cepat dibuka di browser.',
      color: '#f97316',
      bg: '#ffedd515',
      features: ['Perubahan bisa dilihat cepat', 'Ukuran file aplikasi lebih ringan', 'Hanya bagian yang dibutuhkan yang dimuat', 'Aplikasi diatur lebih efisien otomatis'],
    },
    {
      name: 'Desain Antarmuka & Responsif',
      version: 'Tampilan & Warna',
      icon: '🎨',
      description: 'Mengatur warna, huruf, dan posisi tampilan supaya aplikasi enak dilihat di HP, tablet, maupun komputer.',
      color: '#06b6d4',
      bg: '#cffafe15',
      features: ['Tampilan seragam di semua halaman', 'Menyesuaikan ukuran layar otomatis', 'Ada mode gelap', 'Terlihat rapi dan modern'],
    },
    {
      name: 'Koneksi Data & Tabel Canggih',
      version: 'Pengambil & Penampil Data',
      icon: '📊',
      description: 'Bagian yang mengambil data dari server lalu menampilkannya dengan rapi, bahkan saat datanya banyak.',
      color: '#7c3aed',
      bg: '#ede9fe15',
      features: ['Mengambil data terbaru', 'Menampilkan banyak data tetap lancar', 'Data bisa disaring dan diurutkan', 'Data mudah diunduh'],
    },
  ];

  const archLayers = [
    { color: '#60a5fa', title: '👤 Tampilan yang Dilihat Pengguna', items: ['Halaman aplikasi', 'Tombol dan formulir', 'Desain yang rapi', 'Pengambilan data', 'Tabel data', 'Perubahan tampil otomatis'] },
    { color: '#34d399', title: '🚦 Pengatur Akses Website', items: ['Menjaga koneksi aman', 'Menampilkan file dan gambar', 'Meneruskan koneksi penting', 'Menghubungkan ke server utama'] },
    { color: '#ef4444', title: '⚙️ Bagian Utama Pengolah Data', items: ['Menerima permintaan', 'Menjalankan aturan sistem', 'Mengatur akses ke data', 'Mengambil data dengan efisien', 'Menjalankan proses otomatis'] },
    { color: '#f97316', title: '🗃️ Tempat Penyimpanan', items: ['Penyimpanan data utama', 'Penyimpanan sementara dan antrean', 'Penyimpanan file digital'] },
    { color: '#a78bfa', title: '🔔 Sistem Pemberitahuan', items: ['Update langsung di layar', 'Pesan WhatsApp otomatis', 'Proses kirim berjalan di belakang'] },
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTag>Teknologi &amp; Infrastruktur</HeroTag>
        <HeroTitle>
          Sistem yang <span>Mudah Dipahami</span>
        </HeroTitle>
        <HeroSubtitle>
          Halaman ini menjelaskan bagian-bagian utama yang membuat aplikasi sekolah bekerja:
          mulai dari tampilan yang mudah dipakai, penyimpanan data yang aman, sampai pesan otomatis
          ke orang tua dan perubahan data yang langsung terlihat.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <Container>
          {/* Backend */}
          <TechGroupSection>
            <CategoryLabel $color="#ef4444">🔥 Bagian Belakang Sistem</CategoryLabel>
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
            <CategoryLabel $color="#60a5fa">⚛️ Bagian Tampilan Aplikasi</CategoryLabel>
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
          <ArchTitle>Alur Kerja Sistem</ArchTitle>
          <ArchSub>
            Penjelasan sederhana tentang bagaimana aplikasi bekerja, dari yang dilihat pengguna sampai data tersimpan dengan aman.
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
