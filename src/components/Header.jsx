import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderContainer = styled.header`
  background: ${props => props.$scrolled
    ? 'rgba(255, 255, 255, 0.95)'
    : 'rgba(255, 255, 255, 0.85)'};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid ${props => props.$scrolled
    ? 'rgba(226, 232, 240, 0.8)'
    : 'rgba(226, 232, 240, 0.4)'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.$scrolled
    ? '0 4px 24px rgba(0,0,0,0.06)'
    : 'none'};
`;

const Nav = styled.nav`
  max-width: 1200px;
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

  &:hover { opacity: 0.85; }
`;

const LogoIcon = styled.div`
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

const LogoTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

const LogoBrand = styled.span`
  color: #0f172a;
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: -0.3px;
`;

const LogoSub = styled.span`
  color: #94a3b8;
  font-size: 0.62rem;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  font-weight: 600;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #475569;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.5rem 0.875rem;
  border-radius: 9px;
  transition: all 0.2s;
  position: relative;

  &:hover {
    color: #0f172a;
    background: #f1f5f9;
  }

  ${props => props.$active && css`
    color: #2563eb;
    background: #eff6ff;
    &:hover { background: #dbeafe; color: #1d4ed8; }
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
  gap: 0.4rem;
  padding: 0.55rem 1.25rem;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: white;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s;
  box-shadow: 0 2px 10px rgba(37, 99, 235, 0.35);
  white-space: nowrap;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.45);
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: 1px solid #e2e8f0;
  color: #475569;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem 0.625rem;
  border-radius: 9px;
  transition: all 0.2s;
  line-height: 1;

  &:hover {
    background: #f1f5f9;
    color: #0f172a;
    border-color: #cbd5e1;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div`
  background: white;
  border-top: 1px solid #f1f5f9;
  padding: 1rem 1.25rem 1.25rem;
  display: ${props => props.$open ? 'flex' : 'none'};
  flex-direction: column;
  gap: 0.25rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  animation: ${slideDown} 0.2s ease-out;
`;

const MobileNavLink = styled(Link)`
  color: #475569;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  transition: all 0.2s;

  &:hover {
    color: #0f172a;
    background: #f8fafc;
  }

  ${props => props.$active && css`
    color: #2563eb;
    background: #eff6ff;
  `}
`;

const MobileDemoBtn = styled.a`
  display: block;
  text-align: center;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
  padding: 0.875rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  margin-top: 0.75rem;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
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
    { path: '/pillars', label: 'Fitur Lengkap' },
    { path: '/techstack', label: 'Cara Kerja' },
    { path: '/contact', label: 'Hubungi Kami' },
  ];

  return (
    <HeaderWrapper>
      <HeaderContainer $scrolled={scrolled}>
        <Nav>
          <LogoWrap to="/">
            <LogoIcon>🎓</LogoIcon>
            <LogoTextWrap>
              <LogoBrand>Akademihub</LogoBrand>
            </LogoTextWrap>
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
              Coba Gratis ↗
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
          🚀 Coba Demo Gratis
        </MobileDemoBtn>
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;
