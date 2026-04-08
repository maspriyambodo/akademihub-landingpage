import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

/* ── Page Layout ── */
const PageContainer = styled.div`
  min-height: calc(100vh - 72px);
  background: white;
`;

/* ── Hero ── */
const HeroSection = styled.section`
  background: linear-gradient(160deg, #0a0f1e 0%, #0f172a 50%, #001a0a 100%);
  padding: 5.5rem 2rem 4.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 500px;
    background: radial-gradient(ellipse, rgba(5, 150, 105, 0.12) 0%, transparent 65%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(16,185,129,0.4), transparent);
  }
`;

const HeroGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
`;

const HeroTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(5, 150, 105, 0.1);
  border: 1px solid rgba(5, 150, 105, 0.25);
  color: #6ee7b7;
  padding: 0.45rem 1.1rem;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1.75rem;
  position: relative;

  .dot {
    width: 6px;
    height: 6px;
    background: #34d399;
    border-radius: 50%;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: white;
  margin-bottom: 1.25rem;
  letter-spacing: -1.5px;
  line-height: 1.15;
  position: relative;

  span {
    background: linear-gradient(135deg, #6ee7b7 0%, #60a5fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.5);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.85;
  position: relative;
`;

/* ── Contact Info Section ── */
const InfoSection = styled.section`
  padding: 5rem 2rem;
  background: #f8fafc;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionEyebrowWrap = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  color: #2563eb;
  padding: 0.35rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 1rem;
  letter-spacing: -0.75px;
`;

const SectionSub = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 1rem;
  max-width: 520px;
  margin: 0 auto 3rem;
  line-height: 1.8;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
  }
`;

const ContactCard = styled.a`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2.25rem 2rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.35s ease;
  display: block;
  animation: ${fadeUp} 0.5s ease-out ${props => props.$delay}s both;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
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

const ContactIconWrap = styled.div`
  width: 68px;
  height: 68px;
  background: ${props => props.$gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  font-size: 1.8rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
`;

const ContactLabel = styled.h3`
  font-size: 1.05rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
`;

const ContactAction = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: ${props => props.$color};
`;

/* ── FAQ Section ── */
const FAQSection = styled.section`
  padding: 5rem 2rem;
  background: white;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FAQCard = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.75rem;
  transition: all 0.3s;

  &:hover {
    background: white;
    box-shadow: 0 8px 24px rgba(0,0,0,0.07);
    border-color: #cbd5e1;
  }
`;

const FAQQuestion = styled.h4`
  font-size: 0.95rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.625rem;
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
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.75;
  padding-left: 1.75rem;
`;

/* ── Form Section ── */
const FormSection = styled.section`
  padding: 5rem 2rem 6rem;
  background: #f8fafc;
`;

const FormWrapper = styled.div`
  max-width: 760px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 8px 32px rgba(0,0,0,0.06);

  @media (max-width: 640px) {
    padding: 2rem 1.5rem;
  }
`;

const FormHeader = styled.div`
  margin-bottom: 2.5rem;
`;

const FormTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
`;

const FormSubtitle = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.7;
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
  color: #374151;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.875rem 1rem;
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 11px;
  font-size: 0.9rem;
  color: #0f172a;
  transition: all 0.2s;
  outline: none;
  font-family: inherit;

  &:focus {
    border-color: #2563eb;
    background: white;
    box-shadow: 0 0 0 3px rgba(37, 99, 246, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const FormSelect = styled.select`
  padding: 0.875rem 1rem;
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 11px;
  font-size: 0.9rem;
  color: #0f172a;
  transition: all 0.2s;
  outline: none;
  font-family: inherit;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394a3b8' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;

  &:focus {
    border-color: #2563eb;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(37, 99, 246, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.875rem 1rem;
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 11px;
  font-size: 0.9rem;
  color: #0f172a;
  min-height: 140px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s;
  outline: none;
  line-height: 1.6;

  &:focus {
    border-color: #2563eb;
    background: white;
    box-shadow: 0 0 0 3px rgba(37, 99, 246, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: white;
  padding: 1rem 2.25rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.35);
  font-family: inherit;
  align-self: flex-start;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(37, 99, 235, 0.45);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #166534;
  font-size: 0.9rem;
  font-weight: 600;
  animation: ${fadeUp} 0.4s ease-out;
`;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const contactCards = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'info@akademihub.id',
      action: 'Kirim email →',
      actionColor: '#2563eb',
      gradient: 'linear-gradient(135deg, #2563eb, #3b82f6)',
      href: 'mailto:info@akademihub.id',
      delay: 0,
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: '+62 812-3456-7890',
      action: 'Chat sekarang →',
      actionColor: '#059669',
      gradient: 'linear-gradient(135deg, #059669, #10b981)',
      href: 'https://wa.me/6281234567890',
      delay: 0.08,
    },
    {
      icon: '🌐',
      label: 'Demo Platform',
      value: 'app.akademihub.id',
      action: 'Buka demo →',
      actionColor: '#7c3aed',
      gradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
      href: 'https://app.akademihub.id',
      delay: 0.16,
    },
  ];

  const faqs = [
    {
      q: 'Apakah ada biaya untuk mencoba demo?',
      a: 'Tidak ada biaya sama sekali. Demo bisa diakses langsung di app.akademihub.id tanpa perlu mendaftar.',
    },
    {
      q: 'Berapa lama proses implementasi di sekolah?',
      a: 'Proses setup awal biasanya memakan waktu 1-3 hari kerja, tergantung jumlah data yang perlu dimasukkan.',
    },
    {
      q: 'Apakah data sekolah kami aman?',
      a: 'Ya, semua data dienkripsi dan disimpan dengan standar keamanan tinggi. Setiap sekolah memiliki data yang terisolasi.',
    },
    {
      q: 'Apakah bisa diakses dari HP?',
      a: 'Tentu. Akademihub bisa diakses dari HP, tablet, maupun komputer tanpa perlu install aplikasi khusus.',
    },
    {
      q: 'Apakah ada pelatihan untuk guru dan staf?',
      a: 'Ya, kami menyediakan panduan penggunaan dan sesi pelatihan untuk memastikan semua pengguna bisa menggunakan sistem dengan lancar.',
    },
    {
      q: 'Bagaimana cara menghubungi tim support?',
      a: 'Anda bisa menghubungi kami via WhatsApp, email, atau mengisi form di halaman ini. Tim kami merespons dalam 1×24 jam.',
    },
  ];

  return (
    <PageContainer>
      {/* ── Hero ── */}
      <HeroSection>
        <HeroGrid />
        <HeroTag>
          <span className="dot" />
          Siap Membantu Anda
        </HeroTag>
        <HeroTitle>
          Ada Pertanyaan?<br />
          <span>Kami Siap Membantu</span>
        </HeroTitle>
        <HeroSubtitle>
          Tim Akademihub siap membantu Anda memulai transformasi digital sekolah.
          Hubungi kami melalui saluran yang paling nyaman untuk Anda.
        </HeroSubtitle>
      </HeroSection>

      {/* ── Contact Cards ── */}
      <InfoSection>
        <Container>
          <SectionEyebrowWrap>
            <SectionEyebrow>📞 Hubungi Kami</SectionEyebrow>
          </SectionEyebrowWrap>
          <SectionTitle>Pilih Cara yang Paling Mudah</SectionTitle>
          <SectionSub>
            Kami tersedia melalui berbagai saluran komunikasi.
            Pilih yang paling nyaman untuk Anda.
          </SectionSub>
          <ContactGrid>
            {contactCards.map((card, i) => (
              <ContactCard
                key={i}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                $gradient={card.gradient}
                $delay={card.delay}
              >
                <ContactIconWrap $gradient={card.gradient}>
                  {card.icon}
                </ContactIconWrap>
                <ContactLabel>{card.label}</ContactLabel>
                <ContactValue>{card.value}</ContactValue>
                <ContactAction $color={card.actionColor}>{card.action}</ContactAction>
              </ContactCard>
            ))}
          </ContactGrid>
        </Container>
      </InfoSection>

      {/* ── FAQ ── */}
      <FAQSection>
        <Container>
          <SectionEyebrowWrap>
            <SectionEyebrow>❓ Pertanyaan Umum</SectionEyebrow>
          </SectionEyebrowWrap>
          <SectionTitle>Yang Sering Ditanyakan</SectionTitle>
          <SectionSub>
            Temukan jawaban atas pertanyaan yang paling sering kami terima
            dari kepala sekolah dan staf.
          </SectionSub>
          <FAQGrid>
            {faqs.map((faq, i) => (
              <FAQCard key={i}>
                <FAQQuestion>{faq.q}</FAQQuestion>
                <FAQAnswer>{faq.a}</FAQAnswer>
              </FAQCard>
            ))}
          </FAQGrid>
        </Container>
      </FAQSection>

      {/* ── Form ── */}
      <FormSection>
        <Container>
          <FormWrapper>
            <FormHeader>
              <FormTitle>Kirim Pesan ke Kami</FormTitle>
              <FormSubtitle>
                Ceritakan kebutuhan sekolah Anda dan tim kami akan merespons dalam 1×24 jam kerja.
              </FormSubtitle>
            </FormHeader>

            {submitted ? (
              <SuccessMessage>
                <span style={{ fontSize: '1.5rem' }}>✅</span>
                <div>
                  <div style={{ fontWeight: 800, marginBottom: '0.2rem' }}>Pesan berhasil terkirim!</div>
                  <div style={{ fontWeight: 500, opacity: 0.8 }}>Tim kami akan menghubungi Anda dalam 1×24 jam kerja.</div>
                </div>
              </SuccessMessage>
            ) : (
              <ContactForm onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <FormLabel htmlFor="name">Nama Lengkap *</FormLabel>
                    <FormInput type="text" id="name" name="name" placeholder="Nama Anda" required />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel htmlFor="role">Jabatan *</FormLabel>
                    <FormSelect id="role" name="role" required>
                      <option value="">Pilih jabatan...</option>
                      <option value="kepala_sekolah">Kepala Sekolah</option>
                      <option value="wakil_kepala">Wakil Kepala Sekolah</option>
                      <option value="guru">Guru</option>
                      <option value="staf_tata_usaha">Staf Tata Usaha</option>
                      <option value="komite_sekolah">Komite Sekolah</option>
                      <option value="lainnya">Lainnya</option>
                    </FormSelect>
                  </FormGroup>
                </FormRow>
                <FormRow>
                  <FormGroup>
                    <FormLabel htmlFor="email">Email *</FormLabel>
                    <FormInput type="email" id="email" name="email" placeholder="email@sekolah.id" required />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel htmlFor="phone">Nomor WhatsApp</FormLabel>
                    <FormInput type="tel" id="phone" name="phone" placeholder="+62 8xx-xxxx-xxxx" />
                  </FormGroup>
                </FormRow>
                <FormGroup>
                  <FormLabel htmlFor="school">Nama Sekolah *</FormLabel>
                  <FormInput type="text" id="school" name="school" placeholder="Nama sekolah Anda" required />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="message">Ceritakan Kebutuhan Anda *</FormLabel>
                  <FormTextarea
                    id="message"
                    name="message"
                    placeholder="Misalnya: Kami ingin menggunakan sistem untuk mengelola absensi dan nilai siswa. Sekolah kami memiliki 500 siswa..."
                    required
                  />
                </FormGroup>
                <SubmitButton type="submit" disabled={loading}>
                  {loading ? '⏳ Mengirim...' : '📨 Kirim Pesan'}
                </SubmitButton>
              </ContactForm>
            )}
          </FormWrapper>
        </Container>
      </FormSection>
    </PageContainer>
  );
};

export default Contact;
