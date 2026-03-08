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
      name: 'PHP 8.3 + Laravel 12',
      version: 'Backend Core',
      icon: '🔥',
      description: 'Full-stack framework dengan Clean Architecture: Controller → Service → Repository Pattern.',
      color: '#ef4444',
      bg: '#fee2e215',
      features: ['PHP-FPM 8.3-alpine', 'Service & Repository', 'Eloquent ORM', 'Queue & Jobs'],
    },
    {
      name: 'MySQL 8 / MariaDB',
      version: 'Database',
      icon: '🐬',
      description: 'Database relasional utama dengan skema terstruktur, eager loading, dan indeks optimal.',
      color: '#f97316',
      bg: '#ffedd515',
      features: ['Primary database', 'Eager loading', 'Cursor pagination', 'DB indexing'],
    },
    {
      name: 'Redis',
      version: 'In-Memory Cache',
      icon: '⚡',
      description: 'Cache query, session management, JWT blacklist, queue processing, dan rate limiting API.',
      color: '#dc2626',
      bg: '#fee2e215',
      features: ['Query caching', 'Session store', 'JWT blacklist', 'Rate limiting'],
    },
    {
      name: 'MinIO S3',
      version: 'Object Storage',
      icon: '🗄️',
      description: 'Penyimpanan file S3-compatible—materi pembelajaran, dokumen PPDB, lampiran BK.',
      color: '#c2410c',
      bg: '#fed7aa15',
      features: ['S3-compatible API', 'Presigned URLs', 'Bucket policies', 'High availability'],
    },
    {
      name: 'Laravel Reverb',
      version: 'WebSocket',
      icon: '📡',
      description: 'WebSocket server first-party Laravel untuk real-time broadcasting event ke semua klien.',
      color: '#0891b2',
      bg: '#cffafe15',
      features: ['Absensi live', 'Nilai broadcast', 'SPP updates', 'Dashboard activity'],
    },
    {
      name: 'WAHA WhatsApp API',
      version: 'Messaging',
      icon: '💬',
      description: 'Self-hosted WhatsApp HTTP API dengan HMAC webhook untuk notifikasi otomatis ke orang tua.',
      color: '#059669',
      bg: '#d1fae515',
      features: ['Notif absensi', 'Tagihan SPP', 'Status PPDB', 'Alert EWS'],
    },
    {
      name: 'JWT Authentication',
      version: 'Auth & RBAC',
      icon: '🔐',
      description: 'Token-based auth dengan refresh token, Redis blacklist, dan RBAC 4 role pengguna.',
      color: '#7c3aed',
      bg: '#ede9fe15',
      features: ['Access token', 'Refresh token', 'Redis blacklist', 'RBAC 4 role'],
    },
    {
      name: 'Docker & Nginx',
      version: 'Infrastructure',
      icon: '🐳',
      description: 'Multi-service Docker Compose untuk app, database, Redis, MinIO, dan Reverb—production ready.',
      color: '#2496ed',
      bg: '#dbeafe15',
      features: ['Multi-service compose', 'Nginx reverse proxy', 'Volume mounts', 'SSL/TLS'],
    },
  ];

  const frontendTechs = [
    {
      name: 'React 18',
      version: 'UI Library',
      icon: '⚛️',
      description: 'Component-based architecture dengan Hooks, Context API, dan React Router v7.',
      color: '#61dafb',
      bg: '#e0f2fe15',
      features: ['Hooks & Context', 'React Router v7', 'Code splitting', 'Lazy loading'],
    },
    {
      name: 'Vite 5',
      version: 'Build Tool',
      icon: '⚡',
      description: 'Build tool ultra-cepat dengan HMR instan dan optimasi bundle untuk produksi.',
      color: '#f97316',
      bg: '#ffedd515',
      features: ['HMR instant', 'ESM native', 'Tree shaking', 'Bundle analysis'],
    },
    {
      name: 'Tailwind CSS v4',
      version: 'Styling',
      icon: '🎨',
      description: 'Utility-first CSS framework versi 4 dengan engine CSS yang lebih cepat dan konfigurasi minimal.',
      color: '#06b6d4',
      bg: '#cffafe15',
      features: ['Utility-first', 'CSS engine v4', 'Dark mode ready', 'Responsive design'],
    },
    {
      name: 'Axios & AG Grid',
      version: 'Data Layer',
      icon: '📊',
      description: 'Axios untuk REST API calls, AG Grid untuk tabel data besar dengan virtual scrolling.',
      color: '#7c3aed',
      bg: '#ede9fe15',
      features: ['REST API client', 'AG Grid tables', 'Virtual scrolling', 'Column filters'],
    },
  ];

  const archLayers = [
    { color: '#60a5fa', title: 'Client Browser', items: ['React 18', 'Vite 5', 'Tailwind CSS v4', 'Axios', 'AG Grid', 'Laravel Echo + Pusher.js'] },
    { color: '#34d399', title: 'Nginx — Reverse Proxy', items: ['SSL Termination', 'Static Files', 'WebSocket Proxy', 'PHP-FPM Upstream'] },
    { color: '#ef4444', title: 'Laravel 12 — PHP 8.3', items: ['Controllers', 'Service Layer', 'Repository Pattern', 'Eloquent ORM', 'Queue Workers'] },
    { color: '#f97316', title: 'Data & Storage', items: ['MySQL 8 · Primary DB', 'Redis · Cache / Session / Queue', 'MinIO S3 · File Storage'] },
    { color: '#a78bfa', title: 'Real-time & Integrations', items: ['Laravel Reverb · WebSocket', 'WAHA · WhatsApp API', 'Queue · Broadcast Events'] },
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTag>Architecture &amp; Stack</HeroTag>
        <HeroTitle>
          Tech Stack <span>Modern</span>
        </HeroTitle>
        <HeroSubtitle>
          Dibangun dengan teknologi production-grade—Laravel 12, PHP 8.3, React 18, Redis,
          MinIO, WebSocket real-time, dan integrasi WhatsApp otomatis.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <Container>
          {/* Backend */}
          <TechGroupSection>
            <CategoryLabel $color="#ef4444">🔥 Backend Stack</CategoryLabel>
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
            <CategoryLabel $color="#60a5fa">⚛️ Frontend Stack</CategoryLabel>
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
          <ArchTitle>Arsitektur Sistem</ArchTitle>
          <ArchSub>
            Stack berlapis dari UI ke database—setiap layer memiliki tanggung jawab yang jelas dan terisolasi.
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
