Stack: React 18 + Vite + `styled-components` + `react-router-dom` v7.

Prompt refactor siap pakai:

```markdown
# Role & Goal
Kamu adalah Principal UI/UX Designer & Senior Frontend Engineer kelas dunia. Tugasmu me-refactor seluruh UI website AkademiHub (`./akademihub/`) menjadi landing page SaaS B2B kelas dunia bertema **Modern Futuristic EdTech / Tech-Enterprise** (referensi: Linear.app, Vercel, Supabase, Raycast).

# Context Project
- Folder target: `./akademihub/`
- Tech Stack: React 18, Vite, `styled-components` v6, `react-router-dom` v7.
- Pages: `Home.jsx`, `Pillars.jsx`, `TechStack.jsx`, `Contact.jsx`
- Layout: `Header.jsx`, `Footer.jsx`, `index.css`
- Core Brand: Sistem Informasi Akademik & Manajemen Sekolah Terpadu (7 Modul, 80+ fitur, WhatsApp bot automation, SPK/AI analysis, PPDB, Rapor Digital).

# Masalah Tampilan Saat Ini
1. Flat, generik, membosankan, layout terasa seperti template lawas.
2. Tipografi dan hierarchy informasi kurang tegas.
3. Terlalu banyak emoji polos sebagai pengganti icon visual profesional.
4. Kurang elemen visual interaktif/mockup UI produk yang nyata (dashboard preview, floating widgets, interactive tabs).
5. Dark/Light balance kurang dynamic (tidak ada depth, mesh gradient, atau glassmorphism yang polished).

# Target Design Direction
1. **Design Theme**: Dark/Deep Slate Canvas (`#090d16` / `#030712`) dipadu neon cyan (`#06b6d4`), violet/electric purple (`#8b5cf6`), dan emerald green accents.
2. **Visual Depth**:
   - Subtle animated grid / matrix dots / glow orbs di background.
   - Glassmorphic floating cards (`backdrop-filter: blur(16px)`, translucent borders `rgba(255,255,255,0.08)`).
   - Card hover effects: subtle border glow, inner gradient spotlight cursor tracking, micro-lift translateY.
3. **Typography & Hierarchy**:
   - Modern font display (Geist / Plus Jakarta Sans / Inter), tight letter-spacing di headline (`-0.03em`).
   - Gradient typography untuk keyword ("Satu Ekosistem Sekolah Masa Depan").
4. **Hero Section Transformation**:
   - Dynamic Hero dengan floating mock UI: Dashboard analytics preview, Real-time WhatsApp Notification pill, Live attendance counter.
   - Dual CTA: High-contrast primary glow button ("Coba Demo Gratis ↗") + Secondary glass button ("Lihat 7 Modul").
   - Social proof bar / metric badges dengan live pulsing indicators.
5. **Interactive Components**:
   - Modul Showcase: Tabbed interactive switcher atau bento-grid layout (Bento Grid 2.0).
   - Flow Architecture / Cara Kerja: Step connectors beranimasi (glowing line/pulse trail) bukan sekadar list statis.
   - Fitur Unggulan / Spotlight: Clean comparison UI card / interactive feature matrix.
6. **Icons & Assets**:
   - Ganti emoji statis dengan inline SVG tech icons yang tajam, modern, dan scalable.
   - Clean badges bergradien halus.

# Implementation Rules
1. Jangan merusak route navigasi (`/`, `/pillars`, `/techstack`, `/contact`) dan external link (`app.akademihub.id`, WhatsApp link).
2. Pertahankan performa: gunakan CSS animations / hardware-accelerated transforms (`transform`, `opacity`), hindari library berat tambahan.
3. Fully responsive (Desktop, Tablet, Mobile) dengan header blur sticky dan bottom-sheet / smooth mobile navigation.
4. Hasilkan kode lengkap tanpa placeholder `// TODO` atau fungsi yang terpotong.
```