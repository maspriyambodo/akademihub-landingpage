import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ArrowUpRightIcon, SparklesIcon } from './Icons';

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const HeaderContainer = styled.header`
  background: ${props => props.$scrolled
    ? 'rgba(3, 7, 18, 0.88)'
    : 'rgba(3, 7, 18, 0.65)'};
  backdrop-filter: blur(20px) saturate(1.8);
  -webkit-backdrop-filter: blur(20px) saturate(1.8);
  border-bottom: 1px solid ${props => props.$scrolled
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(255, 255, 255, 0.05)'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.$scrolled
    ? '0 8px 32px rgba(0, 0, 0, 0.6)'
    : 'none'};
`;

const Nav = styled.nav`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
    height: 64px;
  }
`;

const LogoWrap = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: opacity 0.2s;
  flex-shrink: 0;
  &:hover { opacity: 0.9; }
`;

const LogoImg = styled.img`
  height: 32px;
  width: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 26px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.4rem;
  margin: 0;
  padding: 0.35rem 0.5rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 50px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #94a3b8;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.45rem 1rem;
  border-radius: 50px;
  transition: all 0.22s ease;
  position: relative;

  &:hover {
    color: #f8fafc;
    background: rgba(255, 255, 255, 0.06);
  }

  ${props => props.$active && css`
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.12);
    border: 1px solid rgba(56, 189, 248, 0.25);
    &:hover { background: rgba(56, 189, 248, 0.18); color: #7dd3fc; }
  `}
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const DemoButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1.25rem;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%);
  background-size: 200% auto;
  color: white;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.2);
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 28px rgba(6, 182, 212, 0.55);
    background-position: right center;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem 0.65rem;
  border-radius: 10px;
  transition: all 0.2s;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div`
  background: rgba(3, 7, 18, 0.96);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1rem 1.25rem 1.5rem;
  display: ${props => props.$open ? 'flex' : 'none'};
  flex-direction: column;
  gap: 0.35rem;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.8);
  animation: ${slideDown} 0.25s ease-out;
`;

const MobileNavLink = styled(Link)`
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  transition: all 0.2s;

  &:hover {
    color: #f8fafc;
    background: rgba(255, 255, 255, 0.05);
  }

  ${props => props.$active && css`
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.2);
  `}
`;

const MobileDemoBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #06b6d4, #8b5cf6);
  color: white;
  padding: 0.875rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.92rem;
  text-decoration: none;
  margin-top: 0.75rem;
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
  transition: all 0.25s;

  &:hover {
    box-shadow: 0 0 28px rgba(6, 182, 212, 0.5);
  }
`;

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/pillars', label: '7 Modul & Fitur' },
    { path: '/techstack', label: 'Arsitektur & Alur' },
    { path: '/contact', label: 'Hubungi Kami' },
  ];

  return (
    <HeaderWrapper>
      <HeaderContainer $scrolled={scrolled}>
        <Nav>
          <LogoWrap to="/">
            <LogoImg src="/logo-akademihub-horizontal.png" alt="AkademiHub Logo" />
          </LogoWrap>

          <NavLinks>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  $active={location.pathname === item.path}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </NavLinks>

          <HeaderRight>
            <DemoButton href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
              <span>Coba Demo</span>
              <ArrowUpRightIcon size={15} />
            </DemoButton>
            <MobileMenuButton
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? '✕' : '☰'}
            </MobileMenuButton>
          </HeaderRight>
        </Nav>
      </HeaderContainer>

      <MobileMenu $open={mobileOpen}>
        {navItems.map((item) => (
          <MobileNavLink
            key={item.path}
            to={item.path}
            $active={location.pathname === item.path}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </MobileNavLink>
        ))}
        <MobileDemoBtn href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
          <SparklesIcon size={18} />
          <span>Coba Demo Gratis ↗</span>
        </MobileDemoBtn>
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;
