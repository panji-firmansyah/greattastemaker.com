import { Stat, EnginePhase, OutputItem, CaseStudy, ServiceTier, AddOn } from "./types";

// ─────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────

export const homeContent = {
  hero: {
    badge: "Menerima klien baru",
    headline: "Product knowledge Anda, siap di pasar. Dalam 4 hari.",
    subheadline:
      "Great Tastemaker adalah GTM engine untuk perusahaan B2B. Kami ambil pengetahuan terdalam dari tim produk Anda, olah jadi aset yang menjual, dan deploy — lebih cepat dari tim internal mana pun.",
    primaryCTA: { label: "Mulai GTM Sprint", href: "/kontak" },
    secondaryCTA: { label: "Lihat Cara Kerjanya", href: "#engine" },
    stats: [
      { value: 4, suffix: " hari", label: "Dari ekstraksi ke deployment" },
      { value: 50, suffix: "+", label: "Aset per siklus" },
      { value: 1, suffix: "", label: "Sesi ekstraksi dibutuhkan" },
    ] as Stat[],
  },

  problem: {
    label: "Masalahnya",
    headline: "Yang paling paham produk bukan yang membuat kontennya.",
    paragraphs: [
      "Di setiap perusahaan B2B, ada satu masalah yang sama: orang yang paling memahami produk — founder, product lead, engineer — tidak punya waktu untuk membuat konten.",
      "Sementara itu, tim marketing atau agensi yang ditugaskan membuat konten tidak punya akses ke pengetahuan yang cukup dalam. Hasilnya? Konten yang generik, tidak akurat, dan tidak menjual.",
      "Great Tastemaker hadir untuk menutup gap ini. Kami mengekstrak pengetahuan langsung dari sumbernya, mengolahnya dengan sistem yang terstruktur, dan menghasilkan aset yang benar-benar merepresentasikan keunggulan produk Anda.",
    ],
  },

  engine: {
    label: "Mesinnya",
    headline: "Tiga fase. Empat hari. Siap jalan.",
    phases: [
      {
        number: "01",
        title: "Extract",
        description:
          "Satu sesi ekstraksi mendalam (60-90 menit) dengan tim produk Anda. Kami menggali value proposition, keunggulan teknis, use case, dan differentiator yang tidak tertulis di mana pun.",
      },
      {
        number: "02",
        title: "Process",
        description:
          "Pengetahuan yang sudah diekstrak diolah menjadi framework konten terstruktur. AI engine kami memproses, menyusun, dan mengadaptasi ke berbagai format — dengan human oversight di setiap tahap.",
      },
      {
        number: "03",
        title: "Deploy",
        description:
          "Aset final dikirim siap pakai: artikel, carousel, ad creative, email sequence, landing page copy, dan lainnya. Tinggal publish, langsung berdampak.",
      },
    ] as EnginePhase[],
    cta: { label: "Lihat detail layanan", href: "/layanan" },
  },

  output: {
    label: "Hasil Satu Siklus",
    headline: "Satu sesi ekstraksi. Puluhan aset. Semua channel.",
    items: [
      { icon: "📝", label: "Artikel panjang & konten SEO" },
      { icon: "📊", label: "Carousel LinkedIn & posting sosial media" },
      { icon: "🎯", label: "Ad creative untuk Meta & LinkedIn" },
      { icon: "🌐", label: "Landing page & lead magnet" },
      { icon: "🎬", label: "Skrip video & brief talking head" },
      { icon: "✉️", label: "Email sequence & materi sales" },
      { icon: "👥", label: "Framework employee-generated content" },
      { icon: "📋", label: "Mini workshop & dek presentasi" },
    ] as OutputItem[],
    footnote:
      "Semua aset dibangun dari sumber yang sama — pengetahuan langsung dari tim produk Anda.",
  },

  caseStudy: {
    label: "Bukti Kerja",
    headline: "Lihat langsung hasilnya.",
    studies: [
      {
        badge: "Klien Aktif",
        title: "Perusahaan Konsultan B2B — Solusi Kompleks, Transaksi Besar",
        description:
          "Grup konsultan bisnis dengan empat unit bisnis yang melayani segmen enterprise. Tantangan utama: menerjemahkan expertise mendalam di bidang keuangan, legal, dan operasional menjadi konten yang bisa menarik prospek baru secara konsisten. Melalui GTM Sprint, kami mengekstrak pengetahuan dari empat subject matter expert dalam satu sesi terfokus, dan menghasilkan 50+ aset konten yang mencakup semua channel digital mereka.",
        isActive: true,
      },
      {
        badge: "Concept Showcase",
        title: "Kalau GTM Sprint Dijalankan untuk Perusahaan SaaS",
        description:
          "Bayangkan perusahaan SaaS B2B dengan produk project management. Product knowledge ada di kepala founder dan engineering lead, tapi marketing struggle membuat konten yang teknis sekaligus menjual. Dalam satu siklus GTM Sprint, kami bisa menghasilkan: landing page copy, 6 artikel SEO, 12 carousel LinkedIn, ad creative untuk 3 campaign, dan email onboarding sequence — semua dari satu sesi ekstraksi.",
        isActive: false,
      },
    ] as CaseStudy[],
    cta: { label: "Lihat semua studi kasus", href: "/studi-kasus" },
  },

  sprintCTA: {
    headline: "Siap ke pasar lebih cepat?",
    body: "Mulai dengan GTM Sprint. Lihat sendiri apa yang bisa dihasilkan dalam 4 hari.",
    primaryCTA: { label: "Mulai GTM Sprint", href: "/kontak" },
    secondaryText: "Atau hubungi langsung di hello@greattastemaker.com",
  },
};

// ─────────────────────────────────────────────
// LAYANAN PAGE
// ─────────────────────────────────────────────

export const layananContent = {
  hero: {
    headline: "Sistem GTM yang terstruktur. Bukan jasa marketing biasa.",
    subheadline:
      "Pilih level keterlibatan yang sesuai dengan kebutuhan bisnis Anda. Dari analisis gratis hingga retainer bulanan.",
  },

  tiers: [
    {
      name: "GTM Foundation",
      price: "Gratis",
      duration: "1-2 hari",
      features: [
        "Market research & competitive benchmarking",
        "ICP (Ideal Customer Profile) analysis",
        "Positioning framework",
        "Opportunity Score",
      ],
      cta: { label: "Pelajari Lebih Lanjut", href: "/kontak" },
    },
    {
      name: "GTM Sprint",
      price: "Rp 15 Juta",
      duration: "4 hari",
      features: [
        "16 base assets (semua pillar)",
        "14 bonus credit",
        "1 sesi ekstraksi (60-90 menit)",
        "1 round revisi",
      ],
      cta: { label: "Mulai Sprint", href: "/kontak" },
      highlighted: true,
      badge: "Paling Populer",
    },
    {
      name: "GTM Engine",
      price: "Rp 25 Juta/bln",
      duration: "Ongoing",
      features: [
        "32 base assets per bulan",
        "28 bonus credit per bulan",
        "2 siklus per bulan",
        "Monthly strategic review",
        "Priority scheduling",
        "Credit rollover",
      ],
      cta: { label: "Hubungi Kami", href: "/kontak" },
    },
  ] as ServiceTier[],

  addOns: [
    {
      name: "Brand Playbook",
      price: "Rp 5 Juta",
      scope: "Panduan brand lengkap: voice, tone, visual identity, messaging framework",
      timeline: "5-7 hari kerja",
      prerequisite: "Minimal 1 siklus GTM Sprint",
    },
    {
      name: "Landing Page",
      price: "Rp 5 Juta",
      scope: "Design & development landing page konversi tinggi, termasuk copywriting",
      timeline: "5-7 hari kerja",
      prerequisite: "Minimal 1 siklus GTM Sprint",
    },
    {
      name: "Activation Workshop",
      price: "Rp 3 Juta",
      scope: "Workshop untuk tim internal: cara menggunakan aset GTM secara efektif",
      timeline: "1 hari (2-3 jam)",
    },
  ] as AddOn[],
};

// ─────────────────────────────────────────────
// STUDI KASUS PAGE
// ─────────────────────────────────────────────

export const studiKasusContent = {
  hero: {
    headline: "Bukti kerja, bukan janji.",
    subheadline: "Lihat bagaimana GTM Engine bekerja untuk perusahaan B2B.",
  },

  activeCaseStudy: {
    badge: "Klien Aktif",
    title: "Perusahaan Konsultan B2B — Solusi Kompleks, Transaksi Besar",
    clientProfile:
      "Grup konsultan bisnis dengan empat unit bisnis yang melayani segmen enterprise di bidang keuangan, legal, dan operasional.",
    challenge:
      "Menerjemahkan expertise mendalam dari empat divisi berbeda menjadi konten digital yang konsisten dan menarik prospek baru.",
    process:
      "Satu sesi ekstraksi terfokus dengan empat subject matter expert. Pengetahuan diolah menjadi framework konten terstruktur dan diadaptasi ke berbagai format.",
    results: [
      "50+ aset konten dari satu sesi ekstraksi",
      "Mencakup semua channel digital utama",
      "Konten yang akurat merepresentasikan keunggulan teknis",
      "Engagement berlanjut ke siklus berikutnya",
    ],
  },

  conceptShowcase: {
    badge: "Concept Showcase",
    title: "Kalau GTM Sprint Dijalankan untuk Perusahaan SaaS",
    description:
      "Bayangkan perusahaan SaaS B2B dengan produk project management. Product knowledge ada di kepala founder dan engineering lead, tapi marketing struggle membuat konten yang teknis sekaligus menjual.",
    outputs: [
      "Landing page copy yang conversion-focused",
      "6 artikel SEO yang teknis tapi accessible",
      "12 carousel LinkedIn yang engaging",
      "Ad creative untuk 3 campaign berbeda",
      "Email onboarding sequence",
    ],
  },

  cta: {
    headline: "Mau jadi studi kasus berikutnya?",
    primaryCTA: { label: "Mulai GTM Sprint", href: "/kontak" },
  },
};

// ─────────────────────────────────────────────
// TENTANG PAGE
// ─────────────────────────────────────────────

export const tentangContent = {
  hero: {
    headline: "Dibangun oleh marketer yang sudah ada di kedua sisi.",
    subheadline:
      "Great Tastemaker lahir dari pengalaman langsung di intersection antara product knowledge dan market execution.",
  },

  founder: {
    insight:
      "Marketing paling efektif bukan dari marketer yang nebak-nebak, tapi dari marketer yang punya akses langsung ke orang yang membangun produknya.",
    stats: [
      { value: 3, suffix: "+", label: "Tahun performance marketing" },
      { value: 100, suffix: "K+", label: "Followers organik" },
    ] as Stat[],
    description:
      "Pengalaman lintas industri di content creation dan performance marketing menghasilkan satu insight kunci: gap terbesar dalam B2B marketing bukan di eksekusi — tapi di akses ke pengetahuan yang benar. Great Tastemaker dibangun untuk menutup gap itu.",
  },

  philosophy: {
    headline: "AI Engine with a Great Human Taste",
    description:
      "AI melakukan heavy lifting — memproses, menyusun, mengadaptasi. Tapi selera akhir tetap di tangan manusia. Speed adalah differentiator kami, bukan teknologi AI-nya sendiri. Kombinasi kecepatan mesin dengan kepekaan manusia menghasilkan aset yang bukan hanya cepat, tapi juga tepat.",
  },
};

// ─────────────────────────────────────────────
// KONTAK PAGE
// ─────────────────────────────────────────────

export const kontakContent = {
  hero: {
    headline: "Mari mulai.",
    subheadline:
      "Isi form singkat di bawah, dan kami akan menghubungi Anda untuk langkah selanjutnya.",
  },

  success: {
    title: "Terima kasih! Data Anda sudah kami terima.",
    subtitle: "Pilih cara lanjut yang paling nyaman:",
    whatsappLabel: "Lanjut via WhatsApp",
    calendlyLabel: "Jadwalkan Meeting",
  },

  alternative: {
    headline: "Lebih suka langsung?",
    email: "hello@greattastemaker.com",
    whatsappLabel: "WhatsApp",
  },
};
