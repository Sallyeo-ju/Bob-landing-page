import './HowItWorks.css';

const STEPS = [
  {
    n: '01',
    title: 'Tanya',
    desc: 'Ketik pertanyaan soal saham atau sektor mana pun dalam bahasa sehari-hari.',
  },
  {
    n: '02',
    title: 'BOB menganalisis',
    desc: 'AI menarik data teknikal, fundamental, dan berita IDX secara real-time.',
  },
  {
    n: '03',
    title: 'Dapat jawaban',
    desc: 'Ringkasan jelas plus angka pendukung, siap membantu keputusanmu.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="how">
      <div className="wrap">
        <div className="reveal how-head">
          <div className="section-label">Cara Kerja</div>
          <h2 className="section-title">Dari pertanyaan ke jawaban, dalam 3 langkah</h2>
        </div>

        <div className="how-grid">
          {STEPS.map((s, i) => (
            <div className="how-step reveal" data-delay={i + 1} key={s.n}>
              <span className="how-num">{s.n}</span>
              <h3 className="how-title">{s.title}</h3>
              <p className="how-desc">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <span className="how-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
