import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { MailIcon, WhatsAppIcon, GlobeIcon, ArrowUpRightIcon, MapPinIcon } from './Icons';

const pulseDot = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.9); }
`;

const FooterContainer = styled.footer`
  background: #030712;
  color: #f8fafc;
  padding: 5rem 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 10%; right: 10%;
    height: 1px;
    background: linear-gradient(90deg, transparent, #06b6d4, #8b5cf6, transparent);
    opacity: 0.8;
  }
`;

const FooterBg = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: -10%;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%);
    border-radius: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 10%; right: -5%;
    width: 450px; height: 450px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

const FooterContent = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2.2fr 1fr 1.3fr 1.5fr;
  gap: 3.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }
`;

const Brand = styled.div``;

const BrandLogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

const LogoImg = styled.img`
  height: 32px;
  width: auto;
  object-fit: contain;
`;

const BrandDesc = styled.p`
  color: #94a3b8;
  font-size: 0.88rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  max-width: 320px;
`;

const LiveBadge = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: #34d399;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  margin-bottom: 1.5rem;

  &:hover {
    background: rgba(16, 185, 129, 0.15);
    border-color: rgba(16, 185, 129, 0.4);
    transform: translateY(-1px);
  }

  .dot {
    width: 7px;
    height: 7px;
    background: #10b981;
    border-radius: 50%;
    animation: ${pulseDot} 1.8s ease-in-out infinite;
    box-shadow: 0 0 8px #10b981;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const SocialBtn = styled.a`
  width: 38px;
  height: 38px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: rgba(6, 182, 212, 0.15);
    border-color: rgba(6, 182, 212, 0.35);
    color: #38bdf8;
    transform: translateY(-2px);
  }
`;

const FooterGroup = styled.div``;

const GroupTitle = styled.h4`
  color: #f8fafc;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &::before {
    content: '';
    width: 4px;
    height: 12px;
    background: #06b6d4;
    border-radius: 2px;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const FooterLink = styled(Link)`
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.88rem;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;

  &:hover {
    color: #38bdf8;
    transform: translateX(3px);
  }
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

const ContactIconBox = styled.div`
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #06b6d4;
  flex-shrink: 0;
`;

const ContactText = styled.div`
  font-size: 0.88rem;
  color: #94a3b8;
  line-height: 1.5;

  a {
    color: #cbd5e1;
    transition: color 0.2s;
    &:hover { color: #38bdf8; }
  }
`;

const FooterDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  max-width: 1240px;
  margin: 4rem auto 0;
`;

const FooterBottom = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #64748b;
  font-size: 0.82rem;
`;

const FooterBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
`;

const FooterBadge = styled.span`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #94a3b8;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterBg />
      <FooterContent>
        <Brand>
          <BrandLogoRow>
            <LogoImg src="/logo-akademihub-horizontal.png" alt="AkademiHub" />
          </BrandLogoRow>
          <BrandDesc>
            Sistem Informasi Akademik & Manajemen Sekolah Terpadu generasi baru. Mengintegrasikan seluruh aktivitas sekolah secara real-time dan otomatis.
          </BrandDesc>
          <LiveBadge href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
            <span className="dot" />
            <span>app.akademihub.id — Cloud Platform</span>
            <ArrowUpRightIcon size={14} />
          </LiveBadge>
          <SocialRow>
            <SocialBtn href="mailto:info@akademihub.id" title="Email Kami">
              <MailIcon size={18} />
            </SocialBtn>
            <SocialBtn href="https://wa.me/6281288891339" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <WhatsAppIcon size={18} />
            </SocialBtn>
            <SocialBtn href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer" title="Portal">
              <GlobeIcon size={18} />
            </SocialBtn>
          </SocialRow>
        </Brand>

        <FooterGroup>
          <GroupTitle>Navigasi</GroupTitle>
          <FooterLinks>
            <li><FooterLink to="/">Beranda</FooterLink></li>
            <li><FooterLink to="/pillars">7 Modul Fitur</FooterLink></li>
            <li><FooterLink to="/techstack">Arsitektur & Alur</FooterLink></li>
            <li><FooterLink to="/contact">Hubungi Kami</FooterLink></li>
          </FooterLinks>
        </FooterGroup>

        <FooterGroup>
          <GroupTitle>7 Modul Utama</GroupTitle>
          <FooterLinks>
            <li><FooterLink to="/pillars">Data Induk Sekolah</FooterLink></li>
            <li><FooterLink to="/pillars">KBM & Ujian Online</FooterLink></li>
            <li><FooterLink to="/pillars">Keuangan & Tagihan</FooterLink></li>
            <li><FooterLink to="/pillars">Bimbingan Konseling</FooterLink></li>
            <li><FooterLink to="/pillars">Perpustakaan Digital</FooterLink></li>
            <li><FooterLink to="/pillars">PPDB Online Terpadu</FooterLink></li>
            <li><FooterLink to="/pillars">SPK & Rekomendasi AI</FooterLink></li>
          </FooterLinks>
        </FooterGroup>

        <FooterGroup>
          <GroupTitle>Kontak & Layanan</GroupTitle>
          <ContactList>
            <ContactRow>
              <ContactIconBox><MailIcon size={16} /></ContactIconBox>
              <ContactText>
                <a href="mailto:info@akademihub.id">info@akademihub.id</a>
              </ContactText>
            </ContactRow>
            <ContactRow>
              <ContactIconBox><WhatsAppIcon size={16} /></ContactIconBox>
              <ContactText>
                <a href="https://wa.me/6281288891339" target="_blank" rel="noopener noreferrer">
                  +62 812-8889-1339 (WA)
                </a>
              </ContactText>
            </ContactRow>
            <ContactRow>
              <ContactIconBox><GlobeIcon size={16} /></ContactIconBox>
              <ContactText>
                <a href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
                  app.akademihub.id
                </a>
              </ContactText>
            </ContactRow>
            <ContactRow>
              <ContactIconBox><MapPinIcon size={16} /></ContactIconBox>
              <ContactText>Indonesia — Cloud Architecture</ContactText>
            </ContactRow>
          </ContactList>
        </FooterGroup>
      </FooterContent>

      <FooterDivider />

      <FooterBottom>
        <Copyright>
          © {currentYear} AkademiHub. Sistem Informasi Sekolah Terpadu Kelas Dunia.
        </Copyright>
        <FooterBadges>
          <FooterBadge>7 Modul Utama</FooterBadge>
          <FooterBadge>80+ Fitur Terpadu</FooterBadge>
          <FooterBadge>WhatsApp Gateway</FooterBadge>
          <FooterBadge>Rapor Digital KM</FooterBadge>
          <FooterBadge>PPDB Digital</FooterBadge>
          <FooterBadge>SPK Smart Decision</FooterBadge>
        </FooterBadges>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
