import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: rgba(15, 23, 42, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const LogoWrap = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

const LogoIcon = styled.div`
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

const LogoTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`;

const LogoBrand = styled.span`
  color: white;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.3px;
`;

const LogoSub = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.65rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.07);
  }

  &.active {
    color: white;
    background: rgba(255, 255, 255, 0.08);
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const DemoButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 1.1rem;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: white;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(37, 99, 235, 0.45);
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.35rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background 0.2s;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: white;
  }

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div`
  background: #0a1628;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  padding: 1rem 1.25rem;
  display: ${props => props.$open ? 'flex' : 'none'};
  flex-direction: column;
  gap: 0.25rem;
  position: sticky;
  top: 68px;
  z-index: 999;
`;

const MobileNavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.7rem 0.875rem;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover,
  &.active {
    color: white;
    background: rgba(255, 255, 255, 0.07);
  }
`;

const MobileDemoBtn = styled.a`
  display: block;
  text-align: center;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  margin-top: 0.5rem;
`;

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/pillars', label: '7 Modul' },
    { path: '/techstack', label: 'Tech Stack' },
    { path: '/contact', label: 'Kontak' },
  ];

  return (
    <>
      <HeaderContainer>
        <Nav>
          <LogoWrap to="/">
            <LogoIcon>📚</LogoIcon>
            <LogoTextWrap>
              <LogoBrand>Sekolah Pintar</LogoBrand>
              <LogoSub>by AkademiHub</LogoSub>
            </LogoTextWrap>
          </LogoWrap>

          <NavLinks>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </NavLinks>

          <HeaderRight>
            <DemoButton href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
              Coba Demo ↗
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
            className={location.pathname === item.path ? 'active' : ''}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </MobileNavLink>
        ))}
        <MobileDemoBtn href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
          Coba Demo ↗
        </MobileDemoBtn>
      </MobileMenu>
    </>
  );
};

export default Header;
