import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useMemo } from 'react';

/* ── Animations ── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;
const pulse = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.25; }
`;
const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`;
const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`;

/* ── Hook: Intersection Observer for scroll-triggered animations ── */
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

/* ── Hook: Animated Counter ── */
const useCounter = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const startT = performance.now();
    const tick = (now) => {
      const p = Math.min((now - startT) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return count;
};

/* ────────────────────────────────────────
   STYLED COMPONENTS
   ──────────────────────────────────────── */

/* ── Hero ── */
const HeroSection = styled.section`
  background: linear-gradient(160deg, #080d1c 0%, #0d1629 35%, #140e28 100%);
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 7rem 2rem 5rem;
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: -25%;
    left: -12%;
    width: 720px;
    height: 720px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, transparent 60%);
    border-radius: 50%;
    animation: ${pulse} 7s ease-in-out infinite;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -18%;
    right: -8%;
    width: 640px;
    height: 640px;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 60%);
    border-radius: 50%;
    animation: ${pulse} 9s ease-in-out infinite reverse;
  }
`;

const HeroGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at center, black 18%, transparent 72%);
`;

const HeroOrb = styled.div`
  position: absolute;
  top: 25%;
  right: 14%;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.07) 0%, transparent 65%);
  border-radius: 50%;
  animation: ${float} 8s ease-in-out infinite;
  pointer-events: none;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 880px;
  position: relative;
  z-index: 1;
  animation: ${fadeUp} 0.9s ease-out;
`;

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.28);
  color: #93c5fd;
  padding: 0.45rem 1.15rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;

  .dot {
    width: 7px;
    height: 7px;
    background: #22d3ee;
    border-radius: 50%;
    animation: ${blink} 1.8s ease-in-out infinite;
    box-shadow: 0 0 6px #22d3ee;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.4rem, 5.8vw, 4.2rem);
  font-weight: 900;
  color: white;
  line-height: 1.1;
  letter-spacing: -2px;
  margin-bottom: 1.75rem;

  .gradient {
    display: block;
    background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 42%, #34d399 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientShift} 5s ease infinite;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.12rem;
  color: rgba(255, 255, 255, 0.52);
  line-height: 1.85;
  max-width: 660px;
  margin: 0 auto 2.75rem;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4.5rem;
`;

const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: white;
  border-radius: 12px;
  font-weight: 800;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 6px 28px rgba(37, 99, 235, 0.4);
  position: relative;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(37, 99, 235, 0.5);
  }
`;

const BtnSecondary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  backdrop-filter: blur(6px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-color: rgba(255, 255, 255, 0.22);
    transform: translateY(-3px);
  }
`;

const HeroStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
  animation: ${fadeUp} 1s ease-out 0.35s both;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 20px;
  padding: 1.5rem 2rem;
  max-width: 720px;
  margin: 0 auto;
  backdrop-filter: blur(10px);

  @media (max-width: 640px) {
    padding: 1.25rem 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  flex: 1;
  min-width: 110px;
  padding: 0.5rem 1rem;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: rgba(255,255,255,0.09);
  }

  .num {
    font-size: 1.95rem;
    font-weight: 900;
    background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 0.3rem;
  }
  .label {
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.36);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    min-width: 80px;
    padding: 0.5rem 0.6rem;
    .num { font-size: 1.4rem; }
  }
`;

/* ── Common Section Styles ── */
const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const EyebrowWrap = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;
const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.$dark ? 'rgba(96,165,250,0.1)' : '#eff6ff'};
  border: 1px solid ${props => props.$dark ? 'rgba(96,165,250,0.25)' : '#bfdbfe'};
  color: ${props => props.$dark ? '#60a5fa' : '#2563eb'};
  padding: 0.35rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
`;
const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.8rem, 3.8vw, 2.65rem);
  font-weight: 900;
  margin-bottom: 1.25rem;
  letter-spacing: -1px;
  line-height: 1.18;
  color: ${props => props.$dark ? 'white' : '#0f172a'};
`;
const SectionSub = styled.p`
  text-align: center;
  color: ${props => props.$dark ? 'rgba(255,255,255,0.42)' : '#64748b'};
  font-size: 1.02rem;
  max-width: 580px;
  margin: 0 auto 3.5rem;
  line-height: 1.8;
`;

/* ── Trust Strip ── */
const TrustSection = styled.section`
  padding: 2.5rem 2rem;
  background: white;
  border-bottom: 1px solid #f1f5f9;
`;
const TrustInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;
const TrustLabel = styled.p`
  text-align: center;
  font-size: 0.72rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;
const TrustBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
`;
const TrustBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #475569;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
    color: #1e293b;
    transform: translateY(-1px);
  }
  .icon { font-size: 1rem; }
`;

/* ── Why Section ── */
const WhySection = styled(Section)`
  background: #f8fafc;
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.035) 0%, transparent 70%);
    border-radius: 50%;
  }
`;
const FeatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;
const FeatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 18px;
  border: 1px solid #e2e8f0;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
  opacity: ${props => props.$visible ? 1 : 0};
  transform: translateY(${props => props.$visible ? '0' : '20px'});

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${props => props.$gradient};
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 48px rgba(0,0,0,0.1);
    border-color: transparent;
    &::before { opacity: 1; }
  }
`;
const FeatIconWrap = styled.div`
  width: 54px;
  height: 54px;
  background: ${props => props.$bg};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.55rem;
  margin-bottom: 1.25rem;
`;
const FeatTitle = styled.h3`
  font-size: 1.02rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.6rem;
`;
const FeatDesc = styled.p`
  color: #64748b;
  font-size: 0.88rem;
  line-height: 1.75;
`;

/* ── Modules ── */
const ModulesSection = styled(Section)`
  background: #0f172a;
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(99,102,241,0.45), transparent);
  }
`;
const ModulesBg = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  &::before {
    content: '';
    position: absolute;
    top: 18%; left: -6%;
    width: 480px; height: 480px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, transparent 65%);
    border-radius: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 12%; right: -6%;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 65%);
    border-radius: 50%;
  }
`;
const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
`;
const ModuleCard = styled.div`
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(255,255,255,0.055);
  border-radius: 16px;
  padding: 1.75rem;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);
  opacity: ${props => props.$visible ? 1 : 0};
  transform: translateY(${props => props.$visible ? '0' : '20px'});

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${props => props.$color}, ${props => props.$color2 || props.$color});
    opacity: 0.55;
    transition: opacity 0.3s;
  }
  &:hover {
    background: rgba(36, 51, 73, 0.9);
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.3);
    border-color: ${props => props.$color}28;
    &::before { opacity: 1; }
  }
`;
const ModuleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 0.9rem;
`;
const ModuleIcon = styled.div`
  width: 44px; height: 44px;
  background: ${props => props.$color}16;
  border: 1px solid ${props => props.$color}22;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;
const ModuleTitle = styled.h3`
  font-size: 0.98rem;
  font-weight: 800;
  color: white;
  line-height: 1.3;
`;
const ModuleNum = styled.div`
  font-size: 0.62rem;
  font-weight: 800;
  color: ${props => props.$color};
  letter-spacing: 0.5px;
  opacity: 0.65;
  margin-bottom: 0.1rem;
`;
const ModuleDesc = styled.p`
  font-size: 0.84rem;
  color: rgba(255, 255, 255, 0.42);
  line-height: 1.72;
  margin-bottom: 0.95rem;
`;
const ModuleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;
const ModuleTag = styled.span`
  font-size: 0.68rem;
  background: ${props => props.$color}10;
  color: ${props => props.$color};
  border: 1px solid ${props => props.$color}22;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  font-weight: 700;
`;
const ModulesFooter = styled.div`
  text-align: center;
  margin-top: 3rem;
`;
const ModulesViewAll = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #60a5fa;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(96, 165, 250, 0.22);
  border-radius: 10px;
  background: rgba(96, 165, 250, 0.05);

  &:hover {
    color: #93c5fd;
    border-color: rgba(96, 165, 250, 0.35);
    background: rgba(96, 165, 250, 0.08);
    transform: translateX(3px);
  }
`;

/* ── How It Works ── */
const HowSection = styled(Section)`
  background: white;
`;
const HowSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  position: relative;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 48px;
    left: 12%;
    right: 12%;
    height: 2px;
    background: linear-gradient(90deg, #dbeafe, #ede9fe, #d1fae5, #fef3c7);
    z-index: 0;
    display: none;

    @media (min-width: 901px) {
      display: block;
    }
  }

  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 520px) { grid-template-columns: 1fr; max-width: 360px; margin: 0 auto; margin-bottom: 2rem; }
`;
const HowStep = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  opacity: ${props => props.$visible ? 1 : 0};
  transform: translateY(${props => props.$visible ? '0' : '24px'});
  transition: all 0.6s ease-out ${props => props.$delay}s;
`;
const HowStepCircle = styled.div`
  width: 56px;
  height: 56px;
  background: ${props => props.$bg};
  border: 2px solid ${props => props.$border};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 1.25rem;
  transition: transform 0.3s;

  ${HowStep}:hover & {
    transform: scale(1.1);
  }
`;
const HowStepTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.45rem;
`;
const HowStepDesc = styled.p`
  font-size: 0.84rem;
  color: #64748b;
  line-height: 1.7;
`;

/* ── Feature Spotlight ── */
const SpotlightSection = styled(Section)`
  background: #f8fafc;
  &::before {
    content: '';
    position: absolute;
    bottom: -80px; left: -80px;
    width: 360px; height: 360px;
    background: radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%);
    border-radius: 50%;
  }
`;
const SpotlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 960px) { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; }
`;
const SpotlightCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 22px;
  overflow: hidden;
  transition: all 0.4s ease;
  opacity: ${props => props.$visible ? 1 : 0};
  transform: translateY(${props => props.$visible ? '0' : '24px'});
  transition-delay: ${props => props.$delay}s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 28px 56px rgba(0,0,0,0.1);
    border-color: transparent;
  }
`;
const SpotlightHeader = styled.div`
  background: ${props => props.$bg};
  padding: 2rem 2rem 1.5rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px; right: -20px;
    width: 100px; height: 100px;
    background: rgba(255,255,255,0.08);
    border-radius: 50%;
  }
`;
const SpotlightEmoji = styled.div`
  font-size: 2.4rem;
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 1;
`;
const SpotlightLabel = styled.div`
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: rgba(255,255,255,0.65);
  margin-bottom: 0.35rem;
`;
const SpotlightTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 900;
  color: white;
  line-height: 1.25;
  position: relative;
  z-index: 1;
`;
const SpotlightBody = styled.div`
  padding: 1.75rem 2rem 2rem;
`;
const SpotlightDesc = styled.p`
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;
const SpotlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;
const SpotlightItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: #334155;
  font-weight: 600;
  line-height: 1.5;

  &::before {
    content: '';
    width: 18px;
    height: 18px;
    background: ${props => props.$color}15;
    border: 1.5px solid ${props => props.$color}35;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M2 5l2.5 2.5L8 3' stroke='${props => encodeURIComponent(props.$color)}' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

/* ── FAQ Section ── */
const FAQSection = styled(Section)`
  background: white;
`;
const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;
const FAQCard = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.75rem;
  transition: all 0.3s;
  cursor: default;

  &:hover {
    background: white;
    box-shadow: 0 8px 24px rgba(0,0,0,0.06);
    border-color: #cbd5e1;
  }
`;
const FAQQuestion = styled.h4`
  font-size: 0.92rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  &::before {
    content: '?';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: #eff6ff;
    color: #2563eb;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: 900;
    flex-shrink: 0;
    margin-top: 0.05rem;
  }
`;
const FAQAnswer = styled.p`
  font-size: 0.86rem;
  color: #64748b;
  line-height: 1.75;
  padding-left: 1.75rem;
`;

/* ── CTA Section ── */
const CTASection = styled(Section)`
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(99, 102, 241, 0.13) 0%, transparent 70%);
    pointer-events: none;
  }
`;
const CTAContent = styled.div`
  max-width: 640px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;
const CTATitle = styled.h2`
  font-size: clamp(1.9rem, 4vw, 2.9rem);
  font-weight: 900;
  color: white;
  margin-bottom: 1.25rem;
  letter-spacing: -1px;
  line-height: 1.2;
`;
const CTASub = styled.p`
  color: rgba(255, 255, 255, 0.55);
  font-size: 1.08rem;
  line-height: 1.8;
  margin-bottom: 2.75rem;
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
  padding: 1rem 2.25rem;
  background: white;
  color: #1e40af;
  border-radius: 12px;
  font-weight: 800;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 6px 24px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 36px rgba(0,0,0,0.28);
  }
`;
const CTASecondary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: rgba(255,255,255,0.07);
  color: white;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.28);
    transform: translateY(-3px);
  }
`;

/* ────────────────────────────────────────
   DATA — Berdasarkan backend Laravel & Go
   ──────────────────────────────────────── */

const FEATURES = [
  {
    icon: '🔗',
    bg: '#dbeafe',
    gradient: 'linear-gradient(90deg, #2563eb, #3b82f6)',
    title: 'Semua Data Terhubung Otomatis',
    desc: 'Absensi siswa tercatat → nilai rapor otomatis → orang tua dapat notifikasi WhatsApp. Tidak ada input ulang.',
  },
  {
    icon: '⚡',
    bg: '#ede9fe',
    gradient: 'linear-gradient(90deg, #7c3aed, #a78bfa)',
    title: 'Informasi Real-Time',
    desc: 'Saat guru input nilai atau kehadiran, kepala sekolah dan orang tua langsung melihatnya tanpa menunggu.',
  },
  {
    icon: '💬',
    bg: '#d1fae5',
    gradient: 'linear-gradient(90deg, #059669, #10b981)',
    title: 'Notifikasi WhatsApp Otomatis',
    desc: 'Tagihan SPP, kehadiran siswa, dan pengumuman penting dikirim otomatis ke WhatsApp orang tua.',
  },
  {
    icon: '🔐',
    bg: '#fee2e2',
    gradient: 'linear-gradient(90deg, #dc2626, #f87171)',
    title: 'Akses Sesuai Peran',
    desc: 'Kepala sekolah, guru, siswa, dan orang tua — masing-masing hanya melihat data yang relevan dengan perannya.',
  },
  {
    icon: '📊',
    bg: '#fef3c7',
    gradient: 'linear-gradient(90deg, #d97706, #fbbf24)',
    title: 'Dashboard & Statistik Cerdas',
    desc: 'Dashboard ringkasan kondisi sekolah, ranking siswa, analisis kelulusan — tersaji otomatis dari data nyata.',
  },
  {
    icon: '📱',
    bg: '#cffafe',
    gradient: 'linear-gradient(90deg, #0891b2, #22d3ee)',
    title: 'Responsive di Semua Perangkat',
    desc: 'Akses dari HP, tablet, atau laptop. Tampilan otomatis menyesuaikan — tidak perlu install aplikasi.',
  },
];

const MODULES = [
  {
    num: '01', icon: '🏫', title: 'Data Induk Sekolah',
    desc: 'Profil sekolah, tahun ajaran, kelas, data guru, siswa, dan orang tua — semuanya terorganisir.',
    color: '#3b82f6', color2: '#60a5fa',
    tags: ['Data Guru', 'Data Siswa', 'Manajemen Kelas'],
  },
  {
    num: '02', icon: '📚', title: 'Kegiatan Belajar Mengajar',
    desc: 'Materi, tugas, ujian online dengan bank soal, rapor digital, absensi, dan jadwal pelajaran.',
    color: '#7c3aed', color2: '#a78bfa',
    tags: ['Ujian Online', 'Rapor Digital', 'Absensi'],
  },
  {
    num: '03', icon: '💳', title: 'Pembayaran & Keuangan',
    desc: 'Tagihan SPP per kelas, pencatatan pembayaran, notifikasi WhatsApp otomatis ke orang tua.',
    color: '#059669', color2: '#34d399',
    tags: ['Tagihan SPP', 'Notif WhatsApp', 'Laporan'],
  },
  {
    num: '04', icon: '🤝', title: 'Bimbingan & Konseling',
    desc: 'Catatan kasus siswa, jadwal konseling, tindak lanjut, dan pelibatan orang tua secara terstruktur.',
    color: '#dc2626', color2: '#f87171',
    tags: ['Catatan Kasus', 'Sesi Konseling', 'Orang Tua'],
  },
  {
    num: '05', icon: '📖', title: 'Perpustakaan Digital',
    desc: 'Katalog buku, peminjaman, pengembalian, stok real-time, dan catatan denda secara digital.',
    color: '#d97706', color2: '#fbbf24',
    tags: ['Katalog Buku', 'Peminjaman', 'Stok Real-Time'],
  },
  {
    num: '06', icon: '📝', title: 'Pendaftaran Siswa Baru (PPDB)',
    desc: 'Pendaftaran online 24/7, unggah dokumen, verifikasi digital, seleksi otomatis, pengumuman online.',
    color: '#0891b2', color2: '#22d3ee',
    tags: ['Daftar Online', 'Verifikasi', 'Seleksi'],
  },
  {
    num: '07', icon: '🎯', title: 'Analisis & Rekomendasi Cerdas',
    desc: 'EWS (Early Warning System), ranking siswa, rekomendasi beasiswa, dan profil risiko 5 dimensi.',
    color: '#be123c', color2: '#fb7185',
    tags: ['EWS', 'Rekomendasi', 'Profil Risiko'],
  },
];

const HOW_STEPS = [
  {
    num: '01', icon: '👤', color: '#3b82f6',
    bg: '#eff6ff', border: '#bfdbfe',
    title: 'Login dari HP atau Laptop',
    desc: 'Guru, siswa, atau orang tua login langsung dari browser.',
  },
  {
    num: '02', icon: '🔐', color: '#7c3aed',
    bg: '#f5f3ff', border: '#ddd6fe',
    title: 'Sistem Sesuaikan Peran',
    desc: 'Menu dan data yang tampil disesuaikan dengan peran masing-masing.',
  },
  {
    num: '03', icon: '⚙️', color: '#059669',
    bg: '#ecfdf5', border: '#a7f3d0',
    title: 'Data Diproses & Disimpan',
    desc: 'Semua input langsung diproses aman dan terhubung ke modul lain.',
  },
  {
    num: '04', icon: '📡', color: '#d97706',
    bg: '#fffbeb', border: '#fde68a',
    title: 'Notifikasi Otomatis Terkirim',
    desc: 'Orang tua terima WhatsApp otomatis — tagihan, kehadiran, pengumuman.',
  },
];

const SPOTLIGHTS = [
  {
    emoji: '💬',
    label: 'Komunikasi Otomatis',
    title: 'Notifikasi WhatsApp ke Orang Tua',
    bg: 'linear-gradient(135deg, #059669 0%, #0891b2 100%)',
    color: '#059669',
    desc: 'Sistem mengirim pesan WhatsApp otomatis ke orang tua untuk setiap kejadian penting — tanpa perlu ada yang mengetik manual.',
    items: [
      'Siswa tidak hadir → orang tua langsung tahu',
      'Tagihan SPP jatuh tempo → notif otomatis terkirim',
      'Pengumuman sekolah → broadcast ke semua wali',
      'Status pendaftaran PPDB → update real-time',
    ],
  },
  {
    emoji: '📊',
    label: 'Akademik Digital',
    title: 'Rapor & Nilai Langsung dari HP',
    bg: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
    color: '#7c3aed',
    desc: 'Guru input nilai sekali, rapor digital langsung tersusun otomatis. Orang tua bisa pantau perkembangan anak kapan saja.',
    items: [
      'Input nilai → rapor tersusun otomatis',
      'Orang tua lihat nilai real-time dari HP',
      'Ujian online dengan bank soal terstruktur',
      'Ranking siswa & analisis kelulusan otomatis',
    ],
  },
  {
    emoji: '🎯',
    label: 'Analisis Cerdas',
    title: 'Early Warning System & SPK',
    bg: 'linear-gradient(135deg, #be123c 0%, #d97706 100%)',
    color: '#be123c',
    desc: 'Sistem secara otomatis mendeteksi siswa yang perlu perhatian lebih berdasarkan 5 dimensi data — sebelum masalah membesar.',
    items: [
      'Deteksi dini siswa berisiko dari 5 dimensi',
      'Rekomendasi beasiswa berbasis data nyata',
      'Profil risiko: akademik, kehadiran, keuangan',
      'Dashboard kepala sekolah dengan insight harian',
    ],
  },
];

const TRUST_BADGES = [
  { icon: '⚡', label: 'Aplikasi Cepat & Ringan' },
  { icon: '🔒', label: 'Data Terenkripsi' },
  { icon: '📱', label: 'HP & Laptop' },
  { icon: '🔄', label: 'Real-Time' },
  { icon: '💬', label: 'WhatsApp Otomatis' },
  { icon: '👥', label: '4 Jenis Pengguna' },
  { icon: '📊', label: 'Laporan Otomatis' },
  { icon: '🌐', label: 'Akses 24 Jam' },
  { icon: '🛡️', label: 'Hak Akses Terkontrol' },
  { icon: '📡', label: 'Update Langsung' },
];

const FAQS = [
  {
    q: 'Apakah ada biaya untuk mencoba demo?',
    a: 'Tidak ada biaya sama sekali. Demo bisa diakses langsung di app.akademihub.id tanpa perlu mendaftar.',
  },
  {
    q: 'Berapa lama proses implementasi?',
    a: 'Setup awal biasanya 1-3 hari kerja, tergantung volume data yang perlu dimigrasi.',
  },
  {
    q: 'Apakah data sekolah kami aman?',
    a: 'Ya. Semua data dienkripsi, setiap sekolah memiliki database terisolasi, dan akses dikontrol per peran pengguna.',
  },
  {
    q: 'Apakah bisa diakses dari HP?',
    a: 'Tentu. Tampilan responsif dan menyesuaikan layar HP, tablet, maupun laptop tanpa perlu install aplikasi.',
  },
  {
    q: 'Bagaimana cara notifikasi WhatsApp ke orang tua?',
    a: 'Sistem mengirim pesan WhatsApp otomatis untuk kehadiran siswa, tagihan SPP, pengumuman, dan status PPDB.',
  },
  {
    q: 'Apakah ada chatbot atau fitur AI?',
    a: 'Ya. Tersedia chatbot untuk pertanyaan umum dan Sistem Pendukung Keputusan (SPK) untuk analisis siswa.',
  },
];

/* ────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────── */

const Home = () => {
  const [featRef, featInView] = useInView(0.1);
  const [modRef, modInView] = useInView(0.08);
  const [howRef, howInView] = useInView(0.12);
  const [spotRef, spotInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.3);

  const statModules   = useCounter(7, 1400, statsInView);
  const statFeatures  = useCounter(80, 1600, statsInView);
  const statUsers     = useCounter(4, 1000, statsInView);
  const statUptime    = useCounter(99, 1200, statsInView);

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection>
        <HeroBg />
        <HeroGrid />
        <HeroOrb />
        <HeroContent>
          <HeroBadge>
            <span className="dot" />
            Platform Aktif · app.akademihub.id
          </HeroBadge>
          <HeroTitle>
            Kelola Sekolah Lebih Mudah,
            <span className="gradient">Lebih Cerdas, Lebih Efisien</span>
          </HeroTitle>
          <HeroSubtitle>
            Satu aplikasi untuk semua kebutuhan sekolah — dari absensi, nilai,
            rapor, pembayaran SPP, hingga pendaftaran siswa baru. Semua terhubung,
            semua real-time, semua bisa dipantau dari mana saja.
          </HeroSubtitle>
          <HeroButtons>
            <BtnPrimary href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
              🚀 Coba Demo Gratis
            </BtnPrimary>
            <BtnSecondary to="/pillars">
              Lihat Semua Fitur →
            </BtnSecondary>
          </HeroButtons>
          <HeroStats ref={statsRef}>
            <StatItem>
              <div className="num">{statModules}</div>
              <div className="label">Modul Utama</div>
            </StatItem>
            <StatItem>
              <div className="num">{statFeatures}+</div>
              <div className="label">Fitur Tersedia</div>
            </StatItem>
            <StatItem>
              <div className="num">{statUsers}</div>
              <div className="label">Jenis Pengguna</div>
            </StatItem>
            <StatItem>
              <div className="num">{statUptime}%</div>
              <div className="label">Uptime Sistem</div>
            </StatItem>
          </HeroStats>
        </HeroContent>
      </HeroSection>

      {/* ── Trust Strip ── */}
      <TrustSection>
        <TrustInner>
          <TrustLabel>Apa yang Bisa Dilakukan Akademihub</TrustLabel>
          <TrustBadges>
            {TRUST_BADGES.map((t, i) => (
              <TrustBadge key={i}>
                <span className="icon">{t.icon}</span>
                {t.label}
              </TrustBadge>
            ))}
          </TrustBadges>
        </TrustInner>
      </TrustSection>

      {/* ── Why Section ── */}
      <WhySection>
        <Container>
          <EyebrowWrap>
            <Eyebrow>✨ Keunggulan Platform</Eyebrow>
          </EyebrowWrap>
          <SectionTitle>Mengapa Sekolah Memilih<br />Akademihub?</SectionTitle>
          <SectionSub>
            Bukan sekadar pencatat data. Akademihub adalah mitra digital yang
            membantu semua pihak di sekolah tetap terhubung setiap saat.
          </SectionSub>
          <FeatGrid ref={featRef}>
            {FEATURES.map((f, i) => (
              <FeatCard key={i} $gradient={f.gradient} $visible={featInView}>
                <FeatIconWrap $bg={f.bg}>{f.icon}</FeatIconWrap>
                <FeatTitle>{f.title}</FeatTitle>
                <FeatDesc>{f.desc}</FeatDesc>
              </FeatCard>
            ))}
          </FeatGrid>
        </Container>
      </WhySection>

      {/* ── Modules ── */}
      <ModulesSection>
        <ModulesBg />
        <Container>
          <EyebrowWrap>
            <Eyebrow $dark>🧩 7 Modul Terintegrasi</Eyebrow>
          </EyebrowWrap>
          <SectionTitle $dark>Satu Platform,<br />Semua Kebutuhan Sekolah</SectionTitle>
          <SectionSub $dark>
            Dari pengelolaan data harian hingga analisis cerdas,
            semua tersedia dalam satu aplikasi yang saling terhubung.
          </SectionSub>
          <ModulesGrid ref={modRef}>
            {MODULES.map((m, i) => (
              <ModuleCard key={i} $color={m.color} $color2={m.color2} $visible={modInView}>
                <ModuleHeader>
                  <ModuleIcon $color={m.color}>{m.icon}</ModuleIcon>
                  <div>
                    <ModuleNum $color={m.color}>{m.num}</ModuleNum>
                    <ModuleTitle>{m.title}</ModuleTitle>
                  </div>
                </ModuleHeader>
                <ModuleDesc>{m.desc}</ModuleDesc>
                <ModuleTags>
                  {m.tags.map((tag, j) => (
                    <ModuleTag key={j} $color={m.color}>{tag}</ModuleTag>
                  ))}
                </ModuleTags>
              </ModuleCard>
            ))}
          </ModulesGrid>
          <ModulesFooter>
            <ModulesViewAll to="/pillars">
              Lihat detail semua fitur dan modul →
            </ModulesViewAll>
          </ModulesFooter>
        </Container>
      </ModulesSection>

      {/* ── How It Works ── */}
      <HowSection>
        <Container>
          <EyebrowWrap>
            <Eyebrow>🔄 Cara Kerja</Eyebrow>
          </EyebrowWrap>
          <SectionTitle>Bagaimana Sistem Ini Bekerja?</SectionTitle>
          <SectionSub>
            Dari login hingga notifikasi WhatsApp ke orang tua —
            semua berjalan otomatis dalam empat langkah sederhana.
          </SectionSub>
          <HowSteps ref={howRef}>
            {HOW_STEPS.map((step, i) => (
              <HowStep key={i} $visible={howInView} $delay={i * 0.12}>
                <HowStepCircle $bg={step.bg} $border={step.border}>
                  {step.icon}
                </HowStepCircle>
                <HowStepTitle>{step.title}</HowStepTitle>
                <HowStepDesc>{step.desc}</HowStepDesc>
              </HowStep>
            ))}
          </HowSteps>
        </Container>
      </HowSection>

      {/* ── Feature Spotlight ── */}
      <SpotlightSection>
        <Container>
          <EyebrowWrap>
            <Eyebrow>⚡ Fitur Unggulan</Eyebrow>
          </EyebrowWrap>
          <SectionTitle>Tiga Hal yang Paling<br />Dirasakan Sekolah</SectionTitle>
          <SectionSub>
            Dari ratusan fitur yang ada, inilah tiga yang paling mengubah
            cara kerja sekolah sehari-hari.
          </SectionSub>
          <SpotlightGrid ref={spotRef}>
            {SPOTLIGHTS.map((s, i) => (
              <SpotlightCard key={i} $visible={spotInView} $delay={i * 0.12}>
                <SpotlightHeader $bg={s.bg}>
                  <SpotlightEmoji>{s.emoji}</SpotlightEmoji>
                  <SpotlightLabel>{s.label}</SpotlightLabel>
                  <SpotlightTitle>{s.title}</SpotlightTitle>
                </SpotlightHeader>
                <SpotlightBody>
                  <SpotlightDesc>{s.desc}</SpotlightDesc>
                  <SpotlightList>
                    {s.items.map((item, j) => (
                      <SpotlightItem key={j} $color={s.color}>{item}</SpotlightItem>
                    ))}
                  </SpotlightList>
                </SpotlightBody>
              </SpotlightCard>
            ))}
          </SpotlightGrid>
        </Container>
      </SpotlightSection>

      {/* ── FAQ ── */}
      <FAQSection>
        <Container>
          <EyebrowWrap>
            <Eyebrow>❓ Pertanyaan Umum</Eyebrow>
          </EyebrowWrap>
          <SectionTitle>Yang Sering Ditanyakan</SectionTitle>
          <SectionSub>
            Temukan jawaban atas pertanyaan yang paling sering kami terima
            dari kepala sekolah dan staf.
          </SectionSub>
          <FAQGrid>
            {FAQS.map((faq, i) => (
              <FAQCard key={i}>
                <FAQQuestion>{faq.q}</FAQQuestion>
                <FAQAnswer>{faq.a}</FAQAnswer>
              </FAQCard>
            ))}
          </FAQGrid>
        </Container>
      </FAQSection>

      {/* ── CTA ── */}
      <CTASection>
        <CTAContent>
          <CTATitle>Siap Membawa Sekolah Anda ke Level Berikutnya?</CTATitle>
          <CTASub>
            Coba demo gratis sekarang dan rasakan sendiri bagaimana Akademihub
            menyederhanakan pekerjaan sehari-hari di sekolah Anda.
          </CTASub>
          <CTAButtons>
            <CTAPrimary href="https://app.akademihub.id" target="_blank" rel="noopener noreferrer">
              🚀 Mulai Demo Gratis
            </CTAPrimary>
            <CTASecondary to="/contact">
              💬 Konsultasi Dulu
            </CTASecondary>
          </CTAButtons>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default Home;
