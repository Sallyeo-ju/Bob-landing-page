import './Features.css';

const FEATURES = [
  {
    title: 'Analisis fundamental',
    desc: 'PER, PBV, ROE, dan laporan keuangan diringkas jadi kesimpulan yang jelas — murah atau mahal, sehat atau tidak.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 3v18h18" />
        <path d="M7 14l3-4 3 2 4-6" />
      </svg>
    ),
  },
  {
    title: 'Sinyal teknikal',
    desc: 'Indikator harga dan volume dibaca otomatis, lalu diterjemahkan jadi sinyal beli, tahan, atau jual.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
  },
  {
    title: 'Berita & sentimen',
    desc: 'Berita terbaru per emiten dikumpulkan dan diringkas, supaya kamu tahu kenapa harga bergerak hari ini.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 5h16v14H4z" />
        <path d="M8 9h8M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    title: 'Screener cerdas',
    desc: 'Minta "saham bank yang paling murah" dan BOB menyaring pasar IDX untuk kamu dalam hitungan detik.',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: 'Bahasa manusia',
    desc: 'Tanya dalam Bahasa Indonesia sehari-hari. Jawaban tanpa jargon — cocok buat pemula maupun trader.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 5h16v11H8l-4 4z" />
      </svg>
    ),
  },
  {
    title: 'Data real-time',
    desc: 'Terhubung ke data pasar Sectors.app, jadi angka yang kamu lihat selalu segar dan bisa dipercaya.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="wrap">
        <div className="reveal">
          <div className="section-label">Kenapa BOB</div>
          <h2 className="section-title">Semua yang kamu butuh untuk paham saham</h2>
          <p className="section-sub">
            Data mentah IDX diubah jadi jawaban yang bisa langsung kamu pakai —
            bukan sekadar angka.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <article
              className="feature-card reveal"
              data-delay={(i % 3) + 1}
              key={f.title}
            >
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
