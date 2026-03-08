import styled from 'styled-components';

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
    background: radial-gradient(ellipse, rgba(5, 150, 105, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeroTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(5, 150, 105, 0.1);
  border: 1px solid rgba(5, 150, 105, 0.22);
  color: #6ee7b7;
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
    background: linear-gradient(135deg, #6ee7b7 0%, #60a5fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.5);
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.8;
  position: relative;
`;

const ContentSection = styled.section`
  padding: 3.5rem 2rem 5.5rem;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-bottom: 3rem;
`;

const ContactCard = styled.div`
  background: #1e293b;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: #243349;
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  }
`;

const ContactIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, ${props => props.$color1} 0%, ${props => props.$color2} 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  font-size: 1.75rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`;

const ContactLabel = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.625rem;
`;

const ContactValue = styled.p`
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.9rem;
  line-height: 1.65;
  margin: 0;
`;

const ContactLink = styled.a`
  color: #60a5fa;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #93c5fd;
    text-decoration: underline;
  }
`;

const FormSection = styled.section`
  padding: 0 2rem 0;
`;

const FormContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: #1e293b;
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
`;

const FormSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.42);
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: grid;
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
  font-weight: 600;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 0.5rem;
  letter-spacing: 0.2px;
`;

const FormInput = styled.input`
  padding: 0.8rem 1rem;
  background: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  font-size: 0.9rem;
  color: white;
  transition: all 0.2s;
  outline: none;
  font-family: inherit;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.22);
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.8rem 1rem;
  background: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  font-size: 0.9rem;
  color: white;
  min-height: 140px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.22);
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: white;
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s;
  justify-self: start;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.35);
  font-family: inherit;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.45);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.');
  };

  const contactInfo = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'info@akademihub.id',
      link: 'mailto:info@akademihub.id',
      color1: '#2563eb',
      color2: '#3b82f6',
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: '+62 812-3456-7890',
      link: 'https://wa.me/6281234567890',
      color1: '#059669',
      color2: '#10b981',
    },
    {
      icon: '🌐',
      label: 'Platform',
      value: 'app.akademihub.id',
      link: 'https://app.akademihub.id',
      color1: '#7c3aed',
      color2: '#6d28d9',
    },
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTag>Get in Touch</HeroTag>
        <HeroTitle>
          Hubungi <span>Kami</span>
        </HeroTitle>
        <HeroSubtitle>
          Siap membantu transformasi digital sekolah Anda. Hubungi kami
          melalui email, WhatsApp, atau akses langsung platform demo.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <Container>
          <ContactGrid>
            {contactInfo.map((info, index) => (
              <ContactCard key={index}>
                <ContactIcon $color1={info.color1} $color2={info.color2}>
                  {info.icon}
                </ContactIcon>
                <ContactLabel>{info.label}</ContactLabel>
                <ContactValue>
                  {info.link ? (
                    <ContactLink href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {info.value}
                    </ContactLink>
                  ) : (
                    info.value
                  )}
                </ContactValue>
              </ContactCard>
            ))}
          </ContactGrid>
        </Container>
      </ContentSection>

      <FormSection>
        <Container>
          <FormContainer>
            <FormTitle>Kirim Pesan</FormTitle>
            <FormSubtitle>
              Isi form di bawah ini dan tim kami akan merespons dalam 1×24 jam
            </FormSubtitle>
            <ContactForm onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="name">Nama Lengkap</FormLabel>
                  <FormInput type="text" id="name" name="name" placeholder="Nama lengkap Anda" required />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormInput type="email" id="email" name="email" placeholder="email@sekolah.id" required />
                </FormGroup>
              </FormRow>
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="phone">Nomor WhatsApp</FormLabel>
                  <FormInput type="tel" id="phone" name="phone" placeholder="+62 8xx-xxxx-xxxx" />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="subject">Subjek</FormLabel>
                  <FormInput type="text" id="subject" name="subject" placeholder="Topik pertanyaan Anda" required />
                </FormGroup>
              </FormRow>
              <FormGroup>
                <FormLabel htmlFor="message">Pesan</FormLabel>
                <FormTextarea id="message" name="message" placeholder="Ceritakan kebutuhan sekolah Anda..." required />
              </FormGroup>
              <SubmitButton type="submit">
                Kirim Pesan ↗
              </SubmitButton>
            </ContactForm>
          </FormContainer>
        </Container>
      </FormSection>
    </PageContainer>
  );
};

export default Contact;
