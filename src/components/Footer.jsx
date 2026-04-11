import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

const FooterContainer = styled.footer`
  background: #020817;
  color: white;
  padding: 5rem 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent);
  }
`;

const FooterBg = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, transparent 65%);
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 20%;
    right: -5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.04) 0%, transparent 65%);
    border-radius: 50%;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2.2fr 1fr 1fr 1.5fr;
  gap: 3.5rem;
  position: relative;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }
`;

/* ── Brand Column ── */
const Brand = styled.div``;

const BrandLogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

const BrandIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
`;

const BrandNames = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

const BrandPrimary = styled.span`
  color: white;
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: -0.3px;
`;

const BrandSub = styled.span`
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 600;
`;

const BrandDesc = styled.p`
  color: rgba(255, 255, 255, 0.38);
  font-size: 0.875rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  max-width: 300px;
`;

const LiveBadge = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: #6ee7b7;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  margin-bottom: 1.5rem;
  display: inline-flex;

  &:hover {
    background: rgba(16, 185, 129, 0.14);
    border-color: rgba(16, 185, 129, 0.3);
  }

  .dot {
    width: 6px;
    height: 6px;
    background: #10b981;
    border-radius: 50%;
    animation: ${blink} 1.5s ease-in-out infinite;
    flex-shrink: 0;
    box-shadow: 0 0 4px #10b981;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const SocialBtn = styled.a`
  width: 36px;
  height: 36px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.15);
    transform: translateY(-2px);
  }
`;

/* ── Link Columns ── */
const FooterGroup = styled.div``;

const GroupTitle = styled.h4`
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1.25rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.42);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    color: rgba(255, 255, 255, 0.88);
    transform: translateX(3px);
  }
`;

/* ── Contact Column ── */
const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

const ContactIconBox = styled.div`
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
  margin-top: 0.05rem;
`;

const ContactText = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.42);
  line-height: 1.5;

  a {
    color: rgba(255, 255, 255, 0.42);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: rgba(255, 255, 255, 0.85);
    }
  }
`;

/* ── Bottom Bar ── */
const FooterDivider = styled.div`
  max-width: 1200px;
  margin: 3.5rem auto 0;
  padding: 0 2rem;
  height: 1px;
  background: rgba(255,255,255,0.06);
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.25);
  font-size: 0.8rem;
  margin: 0;
`;

const FooterBadges = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

const FooterBadge = styled.span`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.25);
  padding: 0.22rem 0.65rem;
  border-radius: 5px;
  font-size: 0.7rem;
  font-weight: 600;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterBg />
      <FooterContent>
        {/* Brand */}
        <Brand>
          <BrandLogoRow>
            <BrandIcon>🎓</BrandIcon>
            <BrandNames>
              <BrandPrimary>Akademihub</BrandPrimary>
            </BrandNames>
          </BrandLogoRow>
          <BrandDesc>
            Platform manajemen sekolah lengkap dengan 7 modul utama yang saling
            terhubung. Dirancang untuk memudahkan pengelolaan sekolah dari mana saja.
          </BrandDesc>
          <LiveBadge href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
            <span className="dot" />
            app.akademihub.id — Live
          </LiveBadge>
          <SocialRow>
            <SocialBtn href="mailto:info@akademihub.id" title="Email">✉️</SocialBtn>
            <SocialBtn href="https://wa.me/6281288891339" target="_blank" rel="noopener noreferrer" title="WhatsApp">💬</SocialBtn>
            <SocialBtn href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer" title="Platform">🌐</SocialBtn>
          </SocialRow>
        </Brand>

        {/* Navigation */}
        <FooterGroup>
          <GroupTitle>Navigasi</GroupTitle>
          <FooterLinks>
            <li><FooterLink to="/">Beranda</FooterLink></li>
            <li><FooterLink to="/pillars">Fitur Lengkap</FooterLink></li>
            <li><FooterLink to="/techstack">Cara Kerja</FooterLink></li>
            <li><FooterLink to="/contact">Hubungi Kami</FooterLink></li>
          </FooterLinks>
        </FooterGroup>

        {/* Modules */}
        <FooterGroup>
          <GroupTitle>Modul Utama</GroupTitle>
          <FooterLinks>
            <li><FooterLink to="/pillars">Kegiatan Belajar</FooterLink></li>
            <li><FooterLink to="/pillars">Pembayaran SPP</FooterLink></li>
            <li><FooterLink to="/pillars">Pendaftaran Siswa</FooterLink></li>
            <li><FooterLink to="/pillars">Perpustakaan</FooterLink></li>
            <li><FooterLink to="/pillars">Bimbingan Konseling</FooterLink></li>
            <li><FooterLink to="/pillars">Analisis & Laporan</FooterLink></li>
          </FooterLinks>
        </FooterGroup>

        {/* Contact */}
        <FooterGroup>
          <GroupTitle>Kontak</GroupTitle>
          <ContactList>
            <ContactRow>
              <ContactIconBox>✉️</ContactIconBox>
              <ContactText>
                <a href="mailto:info@akademihub.id">info@akademihub.id</a>
              </ContactText>
            </ContactRow>
            <ContactRow>
              <ContactIconBox>💬</ContactIconBox>
              <ContactText>
                <a href="https://wa.me/6281288891339" target="_blank" rel="noopener noreferrer">
                  WhatsApp Support
                </a>
              </ContactText>
            </ContactRow>
            <ContactRow>
              <ContactIconBox>🌐</ContactIconBox>
              <ContactText>
                <a href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
                  app.akademihub.id
                </a>
              </ContactText>
            </ContactRow>
            <ContactRow>
              <ContactIconBox>🏢</ContactIconBox>
              <ContactText>Indonesia</ContactText>
            </ContactRow>
          </ContactList>
        </FooterGroup>
      </FooterContent>

      <FooterDivider />

      <FooterBottom>
        <Copyright>
          © {currentYear} AkademiHub · Hak cipta dilindungi undang-undang.
        </Copyright>
        <FooterBadges>
          <FooterBadge>7 Modul</FooterBadge>
          <FooterBadge>40+ Fitur</FooterBadge>
          <FooterBadge>Notif WhatsApp</FooterBadge>
          <FooterBadge>Rapor Digital</FooterBadge>
          <FooterBadge>PPDB Online</FooterBadge>
        </FooterBadges>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
