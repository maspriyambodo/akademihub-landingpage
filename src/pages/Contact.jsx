import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import {
  MailIcon,
  WhatsAppIcon,
  GlobeIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
  SparklesIcon
} from '../components/Icons';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.08); }
`;
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const PageContainer = styled.div`
  min-height: calc(100vh - 72px);
  background: #030712;
  color: #f8fafc;
`;

/* ── Hero ── */
const HeroSection = styled.section`
  background: radial-gradient(circle at 50% -20%, #064e3b 0%, #090d16 50%, #030712 100%);
  padding: 6rem 2rem 5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  &::before {
    content: '';
    position: absolute;
    top: -20%; left: 50%;
    transform: translateX(-50%);
    width: 700px; height: 500px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 65%);
    pointer-events: none;
    animation: ${pulseGlow} 8s ease-in-out infinite;
  }
`;

const HeroGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, transparent 70%);
`;

const HeroTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #6ee7b7;
  padding: 0.45rem 1.15rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 900;
  color: #f8fafc;
  margin-bottom: 1.25rem;
  letter-spacing: -0.035em;
  line-height: 1.12;
  position: relative;
  z-index: 1;

  span {
    background: linear-gradient(135deg, #6ee7b7 0%, #38bdf8 50%, #a78bfa 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientShift} 6s ease infinite;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  color: #94a3b8;
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.8;
  position: relative;
  z-index: 1;
`;

/* ── Info Cards Section ── */
const InfoSection = styled.section`
  padding: 5rem 2rem;
  background: #030712;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.a`
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  display: block;
  animation: ${fadeUp} 0.5s ease-out ${props => props.$delay}s both;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(16px);

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${props => props.$gradient};
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
    border-color: ${props => props.$color}40;
  }
`;

const ContactIconWrap = styled.div`
  width: 64px;
  height: 64px;
  background: ${props => props.$bg || 'rgba(6, 182, 212, 0.12)'};
  border: 1.5px solid ${props => props.$border || 'rgba(6, 182, 212, 0.25)'};
  color: ${props => props.$color || '#38bdf8'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
`;

const ContactLabel = styled.h3`
  font-size: 1.15rem;
  font-weight: 800;
  color: #f8fafc;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`;

const ContactValue = styled.p`
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ContactAction = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: ${props => props.$color};
`;

/* ── Form Section ── */
const FormSection = styled.section`
  padding: 5rem 2rem 6rem;
  background: #090d16;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const FormWrapper = styled.div`
  max-width: 760px;
  margin: 0 auto;
  background: rgba(15, 23, 42, 0.7);
  border-radius: 24px;
  padding: 3.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 50px rgba(0,0,0,0.6);
  backdrop-filter: blur(20px);

  @media (max-width: 640px) {
    padding: 2rem 1.5rem;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.85rem;
  font-weight: 900;
  color: #f8fafc;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
`;

const FormSubtitle = styled.p`
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 0.82rem;
  font-weight: 700;
  color: #cbd5e1;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.9rem 1.1rem;
  background: rgba(3, 7, 18, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  font-size: 0.9rem;
  color: #f8fafc;
  transition: all 0.2s;
  outline: none;
  font-family: inherit;

  &:focus {
    border-color: #06b6d4;
    box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2);
    background: rgba(3, 7, 18, 0.85);
  }

  &::placeholder {
    color: #64748b;
  }
`;

const FormSelect = styled.select`
  padding: 0.9rem 1.1rem;
  background: rgba(3, 7, 18, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  font-size: 0.9rem;
  color: #f8fafc;
  transition: all 0.2s;
  outline: none;
  font-family: inherit;
  cursor: pointer;

  &:focus {
    border-color: #06b6d4;
    box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2);
  }

  option {
    background: #0f172a;
    color: #f8fafc;
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.9rem 1.1rem;
  background: rgba(3, 7, 18, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  font-size: 0.9rem;
  color: #f8fafc;
  min-height: 130px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s;
  outline: none;
  line-height: 1.6;

  &:focus {
    border-color: #06b6d4;
    box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2);
    background: rgba(3, 7, 18, 0.85);
  }

  &::placeholder {
    color: #64748b;
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%);
  color: white;
  padding: 1rem 2.25rem;
  border: none;
  border-radius: 12px;
  font-size: 0.98rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 0 25px rgba(6, 182, 212, 0.4);
  align-self: flex-start;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 35px rgba(6, 182, 212, 0.6);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #34d399;
  font-size: 0.92rem;
  font-weight: 700;
  animation: ${fadeUp} 0.4s ease-out;
`;

/* ── FAQ Section ── */
const FAQSection = styled.section`
  padding: 5.5rem 2rem;
  background: #030712;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FAQCard = styled.div`
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 1.75rem;
  transition: all 0.3s;
  backdrop-filter: blur(12px);

  &:hover {
    background: rgba(15, 23, 42, 0.9);
    border-color: rgba(6, 182, 212, 0.3);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }
`;

const FAQQuestion = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  color: #f8fafc;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;

  .q-badge {
    width: 22px;
    height: 22px;
    background: rgba(6, 182, 212, 0.15);
    color: #38bdf8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 900;
    flex-shrink: 0;
  }
`;

const FAQAnswer = styled.p`
  font-size: 0.88rem;
  color: #94a3b8;
  line-height: 1.75;
  padding-left: 2rem;
`;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const contactChannels = [
    {
      icon: MailIcon,
      label: 'Email Tim Support',
      value: 'info@akademihub.id',
      action: 'Kirim Pesan',
      href: 'mailto:info@akademihub.id',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      color: '#38bdf8',
      bg: 'rgba(6, 182, 212, 0.12)',
      border: 'rgba(6, 182, 212, 0.25)'
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp Konsultasi',
      value: '+62 812-8889-1339',
      action: 'Chat Langsung',
      href: 'https://wa.me/6281288891339',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: '#34d399',
      bg: 'rgba(16, 185, 129, 0.12)',
      border: 'rgba(16, 185, 129, 0.25)'
    },
    {
      icon: GlobeIcon,
      label: 'Demo Langsung',
      value: 'app.akademihub.id',
      action: 'Buka Portal',
      href: 'https://app.akademihub.id',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      color: '#a78bfa',
      bg: 'rgba(139, 92, 246, 0.12)',
      border: 'rgba(139, 92, 246, 0.25)'
    },
  ];

  const faqs = [
    {
      q: 'Apakah AkademiHub memerlukan instalasi server fisik di sekolah?',
      a: 'Tidak. AkademiHub berbasis Cloud SaaS (Software-as-a-Service). Sekolah tidak perlu membeli atau merawat server fisik. Cukup buka browser dan login.'
    },
    {
      q: 'Bagaimana cara kerja notifikasi WhatsApp otomatis?',
      a: 'Sistem terintegrasi dengan WhatsApp Gateway resmi. Saat guru menginput presensi atau bendahara menerbitkan tagihan SPP, notifikasi otomatis terkirim langsung ke nomor orang tua.'
    },
    {
      q: 'Apakah format e-Rapor sesuai Kurikulum Merdeka?',
      a: 'Ya, modul e-Rapor AkademiHub sudah disesuaikan dengan pedoman Kurikulum Merdeka terbaru, mencakup deskripsi capaian kompetensi, penilaian formatif, dan sumatif.'
    },
    {
      q: 'Berapa lama proses implementasi dan migrasi data sekolah?',
      a: 'Dengan fitur import Excel massal, proses input master data siswa, guru, dan rombel hanya membutuhkan waktu 1-2 hari kerja didampingi tim teknis kami.'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroGrid />
        <HeroTag>
          <SparklesIcon size={14} />
          <span>Layanan & Konsultasi 24/7</span>
        </HeroTag>
        <HeroTitle>
          Hubungi Tim <span>AkademiHub</span>
        </HeroTitle>
        <HeroSubtitle>
          Kami siap membantu sekolah Anda memulai transformasi digital modern. Konsultasikan kebutuhan sistem sekolah Anda sekarang.
        </HeroSubtitle>
      </HeroSection>

      <InfoSection>
        <Container>
          <SectionHeader>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#10b981', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
              Kanal Komunikasi
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#f8fafc', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
              Pilih Cara Tercepat Terhubung
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '540px', margin: '0 auto', lineHeight: '1.75' }}>
              Respons cepat dari tim technical consultant kami untuk menjawab segala pertanyaan teknis maupun non-teknis.
            </p>
          </SectionHeader>

          <ContactGrid>
            {contactChannels.map((ch, idx) => {
              const ChIcon = ch.icon;
              return (
                <ContactCard
                  key={idx}
                  href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  $color={ch.color}
                  $gradient={ch.gradient}
                  $delay={idx * 0.1}
                >
                  <ContactIconWrap $bg={ch.bg} $border={ch.border} $color={ch.color}>
                    <ChIcon size={28} />
                  </ContactIconWrap>
                  <ContactLabel>{ch.label}</ContactLabel>
                  <ContactValue>{ch.value}</ContactValue>
                  <ContactAction $color={ch.color}>
                    <span>{ch.action}</span>
                    <ArrowUpRightIcon size={15} />
                  </ContactAction>
                </ContactCard>
              );
            })}
          </ContactGrid>
        </Container>
      </InfoSection>

      <FormSection>
        <FormWrapper>
          <FormTitle>Kirim Pesan / Permintaan Presentasi</FormTitle>
          <FormSubtitle>
            Isi formulir singkat di bawah ini untuk menjadwalkan demo khusus bagi yayasan atau sekolah Anda.
          </FormSubtitle>

          {submitted ? (
            <SuccessMessage>
              <CheckCircleIcon size={20} />
              <span>Terima kasih! Pesan Anda telah diterima. Tim kami akan menghubungi dalam kurun waktu 1x24 jam.</span>
            </SuccessMessage>
          ) : (
            <ContactForm onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <FormLabel>Nama Lengkap *</FormLabel>
                  <FormInput type="text" placeholder="cth: Budi Santoso, S.Pd." required />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Nama Sekolah / Yayasan *</FormLabel>
                  <FormInput type="text" placeholder="cth: SMA Nusantara 1" required />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <FormLabel>Alamat Email *</FormLabel>
                  <FormInput type="email" placeholder="budi@sekolah.sch.id" required />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Nomor WhatsApp *</FormLabel>
                  <FormInput type="tel" placeholder="08123456789" required />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <FormLabel>Peran / Jabatan</FormLabel>
                  <FormSelect defaultValue="kepsek">
                    <option value="kepsek">Kepala Sekolah</option>
                    <option value="yayasan">Pengurus Yayasan</option>
                    <option value="guru">Guru / Staff Akademik</option>
                    <option value="tu">Kepala Tata Usaha</option>
                    <option value="lainnya">Lainnya</option>
                  </FormSelect>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Estimasi Jumlah Siswa</FormLabel>
                  <FormSelect defaultValue="500">
                    <option value="200">&lt; 200 Siswa</option>
                    <option value="500">200 - 500 Siswa</option>
                    <option value="1000">500 - 1.000 Siswa</option>
                    <option value="more">&gt; 1.000 Siswa</option>
                  </FormSelect>
                </FormGroup>
              </FormRow>

              <FormGroup>
                <FormLabel>Pesan / Pertanyaan Spesifik *</FormLabel>
                <FormTextarea placeholder="Ceritakan kebutuhan operasional sekolah Anda..." required />
              </FormGroup>

              <SubmitButton type="submit" disabled={loading}>
                {loading ? 'Mengirim Data...' : 'Kirim Pesan Sekarang ↗'}
              </SubmitButton>
            </ContactForm>
          )}
        </FormWrapper>
      </FormSection>

      <FAQSection>
        <Container>
          <SectionHeader>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
              FAQ
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#f8fafc', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
              Pertanyaan yang Sering Diajukan
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '540px', margin: '0 auto', lineHeight: '1.75' }}>
              Informasi lengkap seputar implementasi dan penggunaan sistem.
            </p>
          </SectionHeader>

          <FAQGrid>
            {faqs.map((faq, idx) => (
              <FAQCard key={idx}>
                <FAQQuestion>
                  <span className="q-badge">?</span>
                  <span>{faq.q}</span>
                </FAQQuestion>
                <FAQAnswer>{faq.a}</FAQAnswer>
              </FAQCard>
            ))}
          </FAQGrid>
        </Container>
      </FAQSection>
    </PageContainer>
  );
};

export default Contact;
