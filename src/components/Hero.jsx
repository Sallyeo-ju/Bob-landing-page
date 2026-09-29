import StockCard from './StockCard.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-glow hero-glow--1" aria-hidden="true" />
      <div className="hero-glow hero-glow--2" aria-hidden="true" />

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="hero-pill reveal">
            <span className="dot" /> Analisis saham, dalam bahasa manusia
          </span>
          <h1 className="hero-title reveal" data-delay="1">
            Tanya saham apa saja.
            <br />
            Dapat jawaban <span className="accent">yang dimengerti.</span>
          </h1>
          <p className="hero-lead reveal" data-delay="2">
            BOB menganalisis saham IDX dengan data real — teknikal,
            fundamental, dan berita — lalu menjelaskannya seperti teman yang
            paham. Tanpa jargon, tanpa ribet.
          </p>
          <div className="hero-cta reveal" data-delay="3">
            <a href="#download" className="btn btn-primary">
              Mulai Gratis
            </a>
            <a href="#chat" className="btn btn-ghost">
              Lihat Demo ↓
            </a>
          </div>

          <div className="hero-stats reveal" data-delay="4">
            <div className="stat">
              <span className="stat-num">900+</span>
              <span className="stat-label">Saham IDX</span>
            </div>
            <div className="stat">
              <span className="stat-num">Real-time</span>
              <span className="stat-label">Data pasar</span>
            </div>
            <div className="stat">
              <span className="stat-num">24/7</span>
              <span className="stat-label">Asisten AI</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal" data-delay="2">
          <div className="hero-card hero-card--front">
            <StockCard />
          </div>
          <div className="hero-card hero-card--back" aria-hidden="true">
            <StockCard
              ticker="GOTO"
              company="GoTo Gojek Tokopedia"
              price="87"
              change="-1,1%"
              up={false}
              metrics={[
                { k: 'PER', v: '—', tone: 'neu' },
                { k: 'PBV', v: '1,3x', tone: 'neu' },
                { k: 'Vol', v: 'Tinggi', tone: 'up' },
                { k: 'Sinyal', v: 'Tahan', tone: 'neu' },
              ]}
              bars={[80, 72, 76, 65, 68, 60, 58, 52, 55, 48, 44, 40]}
            />
          </div>
          <span className="hero-ticker hero-ticker--a">TLKM ▲ 3,1%</span>
          <span className="hero-ticker hero-ticker--b">BBRI ▲ 1,8%</span>
        </div>
      </div>
    </header>
  );
}
