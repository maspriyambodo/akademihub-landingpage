import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const pulseLive = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
`;

const FooterContainer = styled.footer`
  background: #020817;
  color: white;
  padding: 4rem 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
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
  gap: 0.625rem;
  margin-bottom: 1rem;
`;

const BrandIcon = styled.div`
  width: 34px;
  height: 34px;
  background: linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
`;

const BrandNames = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`;

const BrandPrimary = styled.span`
  color: white;
  font-size: 1rem;
  font-weight: 700;
`;

const BrandSub = styled.span`
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const BrandDesc = styled.p`
  color: rgba(255, 255, 255, 0.38);
  font-size: 0.84rem;
  line-height: 1.75;
  margin-bottom: 1.25rem;
  max-width: 290px;
`;

const LiveBadge = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.425rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.22);
  color: #6ee7b7;
  padding: 0.35rem 0.875rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: rgba(16, 185, 129, 0.16);
  }

  .dot {
    width: 5px;
    height: 5px;
    background: #10b981;
    border-radius: 50%;
    animation: ${pulseLive} 1.5s ease-in-out infinite;
    flex-shrink: 0;
  }
`;

const FooterGroup = styled.div``;

const GroupTitle = styled.h4`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.25px;
  color: rgba(255, 255, 255, 0.48);
  margin-bottom: 1rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.48);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
`;

const ContactIconBox = styled.div`
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  flex-shrink: 0;
  margin-top: 0.05rem;
`;

const ContactText = styled.div`
  font-size: 0.825rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.5;

  a {
    color: rgba(255, 255, 255, 0.45);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: rgba(255, 255, 255, 0.85);
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding: 1.5rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.28);
  font-size: 0.8rem;
  margin: 0;
`;

const TechChips = styled.div`
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
`;

const TechChip = styled.span`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.28);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 500;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Brand>
          <BrandLogoRow>
            <BrandIcon>📚</BrandIcon>
            <BrandNames>
              <BrandPrimary>Sekolah Pintar</BrandPrimary>
              <BrandSub>by AkademiHub</BrandSub>
            </BrandNames>
          </BrandLogoRow>
          <BrandDesc>
            Platform manajemen sekolah terintegrasi dengan 7 modul utama,
            real-time WebSocket, dan notifikasi WhatsApp otomatis untuk
            institusi pendidikan Indonesia.
          </BrandDesc>
          <LiveBadge href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
            <span className="dot" />
            app.akademihub.id
          </LiveBadge>
        </Brand>

        <FooterGroup>
          <GroupTitle>Navigasi</GroupTitle>
          <FooterLinks>
            <li><FooterLink to="/">Beranda</FooterLink></li>
            <li><FooterLink to="/pillars">7 Modul</FooterLink></li>
            <li><FooterLink to="/techstack">Tech Stack</FooterLink></li>
            <li><FooterLink to="/contact">Kontak</FooterLink></li>
          </FooterLinks>
        </FooterGroup>

        <FooterGroup>
          <GroupTitle>Modul</GroupTitle>
          <FooterLinks>
            <li><FooterLink to="/pillars">Akademik Digital</FooterLink></li>
            <li><FooterLink to="/pillars">Keuangan SPP</FooterLink></li>
            <li><FooterLink to="/pillars">PPDB Online</FooterLink></li>
            <li><FooterLink to="/pillars">Perpustakaan</FooterLink></li>
            <li><FooterLink to="/pillars">BK Digital</FooterLink></li>
            <li><FooterLink to="/pillars">SPK & Analytics</FooterLink></li>
          </FooterLinks>
        </FooterGroup>

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
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
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

      <FooterBottom>
        <Copyright>
          © {currentYear} AkademiHub. Sekolah Pintar. Hak cipta dilindungi.
        </Copyright>
        <TechChips>
          <TechChip>Laravel 12</TechChip>
          <TechChip>PHP 8.3</TechChip>
          <TechChip>React 18</TechChip>
          <TechChip>Docker</TechChip>
        </TechChips>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
